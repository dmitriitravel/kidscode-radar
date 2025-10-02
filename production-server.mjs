import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  // Compression middleware
  app.use(compression());

  if (!isProduction) {
    // Development mode with Vite
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    // Handle all routes for SSR
    app.use(async (req, res, next) => {
      const url = req.originalUrl;

      try {
        // Read index.html
        let template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8',
        );

        // Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);

        // Load the server entry
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

        // Render the app HTML
        const { appHtml, headTags } = await render(url);

        // Replace placeholders
        const html = template
          .replace('<!--app-head-->', headTags || '')
          .replace('<!--app-html-->', appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e.stack);
        res.status(500).end(e.stack);
      }
    });
  } else {
    // Production mode
    const templateHtml = fs.readFileSync(
      path.resolve(__dirname, 'dist/client/index.html'),
      'utf-8',
    );

    // Serve static assets (JS, CSS, images, etc.) but not HTML files
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets'), {
      maxAge: '1y',
      etag: true,
    }));

    // Serve other static files except index.html
    app.use(express.static(path.resolve(__dirname, 'dist/client'), {
      index: false,
      maxAge: '1y',
      etag: true,
      setHeaders: (res, filepath) => {
        // Prevent caching of HTML files
        if (filepath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache');
        }
      }
    }));

    // Handle all routes for SSR
    app.use(async (req, res, next) => {
      const url = req.originalUrl;

      try {
        // Import the pre-built server entry
        const { render } = await import('./dist/server/entry-server.mjs');

        // Render the app HTML
        const { appHtml, headTags } = await render(url);

        // Replace placeholders in template
        const html = templateHtml
          .replace('<!--app-head-->', headTags || '')
          .replace('<!--app-html-->', appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        console.error(e.stack);
        res.status(500).end(e.stack);
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running in ${isProduction ? 'production' : 'development'} mode`);
    console.log(`Listening on http://0.0.0.0:${port}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
