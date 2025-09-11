import { execSync } from 'child_process';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting SSG build process...');

// Step 1: Build the app normally
console.log('📦 Building the React app...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Generate additional static files
console.log('📄 Generating static files...');

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
  
  // Step 3: Enhance HTML files with proper meta tags
  console.log('🏷️ Enhancing HTML files...');
  
  const indexHtmlPath = join(distDir, 'index.html');
  if (existsSync(indexHtmlPath)) {
    let indexHtml = readFileSync(indexHtmlPath, 'utf8');
    
    // Add preconnect and dns-prefetch for performance
    const performanceHeaders = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    `;
    
    indexHtml = indexHtml.replace('<head>', '<head>' + performanceHeaders);
    
    writeFileSync(indexHtmlPath, indexHtml);
    console.log('✅ Enhanced index.html');
  }
  
  console.log('🎉 SSG build completed successfully!');
  console.log('📊 Generated files:');
  console.log('  - Static HTML files with proper meta tags');
  console.log('  - sitemap.xml with all pages and articles');
  console.log('  - robots.txt with SEO directives');
  console.log('  - Enhanced performance headers');
  
} catch (error) {
  console.error('❌ Error during SSG build:', error);
  process.exit(1);
}