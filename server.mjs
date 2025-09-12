import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(resolve(__dirname, 'dist')));

// Handle all routes
app.use((req, res) => {
  try {
    // Read the HTML template
    const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
    
    // For now, just serve the static HTML - this will be enhanced later with full SSR
    const html = template.replace('<!--ssr-outlet-->', '');
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end(`
      <html>
        <head><title>Server Error</title></head>
        <body>
          <h1>500 - Internal Server Error</h1>
          <p>Error: ${error.message}</p>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`SSR Server running on http://0.0.0.0:${port}`);
  console.log(`Local: http://localhost:${port}`);
  console.log(`Network: http://195.133.49.159:${port}`);
});