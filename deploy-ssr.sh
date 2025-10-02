#!/bin/bash
set -e

echo "=== Starting SSR deployment ==="

PROJECT_DIR="/root/programmirovanie-dlya-detej-online.ru"
cd "$PROJECT_DIR"

# Stop existing services
echo "Stopping existing services..."
systemctl stop programmirovanie-ssr 2>/dev/null || true

# Install compression if not present
echo "Checking dependencies..."
if ! grep -q '"compression"' package.json; then
    echo "Installing compression package..."
    /usr/local/bin/npm install compression @types/compression --save
fi

# Backup old files
echo "Backing up old configuration..."
cp -f package.json package.json.backup 2>/dev/null || true
cp -f vite.config.ts vite.config.ts.backup 2>/dev/null || true
cp -f production-server.mjs production-server.mjs.backup 2>/dev/null || true

# Update configuration files
echo "Updating configuration files..."
cat > production-server.mjs << 'EOF'
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

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;

      try {
        let template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8',
        );

        template = await vite.transformIndexHtml(url, template);
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const { appHtml, headTags } = await render(url);

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

    app.use(
      express.static(path.resolve(__dirname, 'dist/client'), {
        maxAge: '1y',
        etag: true,
      })
    );

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;

      try {
        const { render } = await import('./dist/server/entry-server.mjs');
        const { appHtml, headTags } = await render(url);

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
EOF

# Update vite.config.ts
cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isSSRBuild = process.env.SSR_BUILD === 'true';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: isSSRBuild ? 'dist/server' : 'dist/client',
      ssr: isSSRBuild,
      rollupOptions: isSSRBuild ? {
        input: './src/entry-server.tsx',
        output: {
          format: 'esm',
          entryFileNames: '[name].mjs',
        },
      } : {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          },
        },
      },
      ssrManifest: !isSSRBuild,
    },
    ssr: {
      noExternal: ['react-helmet-async'],
    },
  };
});
EOF

# Update package.json scripts
echo "Updating package.json scripts..."
/usr/local/bin/node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts['dev'] = 'node production-server.mjs';
pkg.scripts['build'] = 'npm run build:client && npm run build:server';
pkg.scripts['build:client'] = 'vite build';
pkg.scripts['build:server'] = 'SSR_BUILD=true vite build';
pkg.scripts['start'] = 'NODE_ENV=production node production-server.mjs';
if (!pkg.dependencies['compression']) {
  pkg.dependencies['compression'] = '^1.7.4';
}
if (!pkg.devDependencies['@types/compression']) {
  pkg.devDependencies['@types/compression'] = '^1.7.5';
}
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Install dependencies
echo "Installing dependencies..."
/usr/local/bin/npm install

# Build the application
echo "Building application..."
rm -rf dist
echo "Building client..."
/usr/local/bin/npm run build:client
echo "Building server..."
/usr/local/bin/npm run build:server

# Setup systemd service
echo "Setting up systemd service..."
cat > /etc/systemd/system/programmirovanie-ssr.service << 'SERVICEEOF'
[Unit]
Description=Programmirovanie SSR Node.js Application
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/programmirovanie-dlya-detej-online.ru
Environment="NODE_ENV=production"
Environment="PORT=3000"
ExecStart=/usr/local/bin/node /root/programmirovanie-dlya-detej-online.ru/production-server.mjs
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=programmirovanie-ssr

[Install]
WantedBy=multi-user.target
SERVICEEOF

# Reload systemd and start service
echo "Starting service..."
systemctl daemon-reload
systemctl enable programmirovanie-ssr
systemctl start programmirovanie-ssr

# Wait a bit and check status
sleep 3
systemctl status programmirovanie-ssr --no-pager

# Check if service is running
if systemctl is-active --quiet programmirovanie-ssr; then
    echo "=== SSR service is running successfully ==="
    echo "You can check logs with: journalctl -u programmirovanie-ssr -f"
else
    echo "=== Warning: Service may not be running properly ==="
    echo "Check logs with: journalctl -u programmirovanie-ssr -n 50"
fi

echo "=== Deployment completed ==="
