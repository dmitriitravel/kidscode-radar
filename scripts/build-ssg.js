import { execSync } from 'child_process';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting SSG build process...');

// Step 1: Generate static pages with meta tags
console.log('📄 Generating static pages with proper meta tags...');
execSync('node scripts/generatePages.js', { stdio: 'inherit' });

// Step 2: Build the app normally  
console.log('📦 Building the React app...');
execSync('npm run build', { stdio: 'inherit' });

// Step 3: Generate additional static files
console.log('📄 Generating SEO files...');

try {
  // Generate sitemap and robots.txt
  const { generateSitemap, generateRobotsTxt } = await import('../src/utils/sitemapGenerator.js');
  
  const distDir = join(__dirname, '..', 'dist');
  
  // Ensure dist directory exists
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }
  
  // Generate sitemap.xml
  const sitemap = generateSitemap();
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
  
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt();
    writeFileSync(join(distDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt');
    
    console.log('🎉 SSG build completed successfully!');
    console.log('📊 Generated files:');
    console.log('  - Static HTML files with unique meta tags for each page');
    console.log('  - sitemap.xml with all pages and articles');
    console.log('  - robots.txt with SEO directives');
  
} catch (error) {
  console.error('❌ Error during SSG build:', error);
  process.exit(1);
}