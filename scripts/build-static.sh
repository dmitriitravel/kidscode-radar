#!/bin/bash

echo "🚀 Building static site with unique meta tags..."

# Build the Vite project
echo "📦 Building Vite project..."
npm run build

# Generate static pages with unique meta tags
echo "🏗️  Generating static pages..."
node scripts/generateStaticPages.js

echo "✅ Static site build complete!"
echo "📁 Output directory: dist/"
echo "🔍 Each page now has unique meta tags in source HTML"