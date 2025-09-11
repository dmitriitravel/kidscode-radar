#!/bin/bash
# Make this script executable: chmod +x build-ssg.sh

echo "🚀 Starting Static Site Generation (SSG) build..."

# Step 1: Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Step 2: Generate static pages with meta tags BEFORE build
echo "📄 Generating static pages with proper meta tags..."
node scripts/generatePages.js

# Step 3: Build the React application (will overwrite generated files)
echo "📦 Building React application..."
npm run build

# Step 4: Regenerate pages to overwrite Vite's output
echo "📄 Re-generating static pages with proper meta tags..."
node scripts/generatePages.js

# Step 3: Generate SEO files (sitemap, robots.txt)
echo "📄 Generating SEO files..."
node scripts/generateStaticFiles.js

# Step 4: Create optimized directory structure
echo "🗂️ Optimizing directory structure..."

# Create directories for better organization
mkdir -p dist/articles

# Step 5: Add performance optimizations
echo "⚡ Adding performance optimizations..."

# Create .htaccess for Apache servers (if needed)
cat > dist/.htaccess << 'EOF'
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Rewrite rules for SPA
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
EOF

echo "✅ SSG build completed successfully!"
echo ""
echo "📊 Build summary:"
echo "  ✓ React app built and optimized"
echo "  ✓ SEO files generated (sitemap.xml, robots.txt)"
echo "  ✓ Server configuration added (.htaccess)"
echo "  ✓ Performance optimizations applied"
echo ""
echo "🚀 Your static site is ready for deployment!"
echo "   Deploy the 'dist' folder to your web server"