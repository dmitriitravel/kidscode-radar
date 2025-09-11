#!/bin/bash

echo "🧪 Testing static page generation..."

# Create test dist directory
mkdir -p dist

# Run the page generator
node scripts/generatePages.js

# Check if files were created
echo ""
echo "📊 Generated files:"
ls -la dist/
echo ""

if [ -f "dist/index.html" ]; then
    echo "🔍 Preview of index.html meta tags:"
    head -20 dist/index.html | grep -E "(title|meta)"
    echo ""
fi

if [ -d "dist/about" ] && [ -f "dist/about/index.html" ]; then
    echo "🔍 Preview of about page meta tags:"
    head -20 dist/about/index.html | grep -E "(title|meta)"
    echo ""
fi

echo "✅ Test completed! Check the generated HTML files in the dist folder."