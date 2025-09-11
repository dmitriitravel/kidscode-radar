import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the sitemap generator
async function generateStaticFiles() {
  try {
    // Dynamic import for ES modules - fix the import path
    const sitemapModule = await import('../src/utils/sitemapGenerator.js');
    const { generateSitemap, generateRobotsTxt } = sitemapModule;
    
    const distDir = join(__dirname, '..', 'dist');
    
    // Ensure dist directory exists
    try {
      mkdirSync(distDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
    
    // Generate sitemap.xml
    const sitemap = generateSitemap();
    writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml');
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt();
    writeFileSync(join(distDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt');
    
  } catch (error) {
    console.error('❌ Error generating static files:', error);
    process.exit(1);
  }
}

generateStaticFiles();