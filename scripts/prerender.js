import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import Beasties from "beasties";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const templatePath = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist", "server", "entry-server.js");

const template = fs.readFileSync(templatePath, "utf-8");

const { render } = await import(pathToFileURL(serverEntry).href);
const { html, head } = render();

let output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${html}</div>`,
);

if (head && output.includes("</head>")) {
  output = output.replace("</head>", `${head}\n  </head>`);
}

// Critical CSS: инлайним критические стили в <head>, остальной CSS грузим асинхронно (preload swap).
const beasties = new Beasties({
  path: path.join(root, "dist"),
  publicPath: "/",
  preload: "swap",
  pruneSource: false,
  fonts: false,
  logLevel: "silent",
});
output = await beasties.process(output);

fs.writeFileSync(templatePath, output);

// Серверный бандл не нужен в финальной раздаче.
fs.rmSync(path.join(root, "dist", "server"), { recursive: true, force: true });

console.log("✅ Prerendered dist/index.html with full content for crawlers");
