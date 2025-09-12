#!/bin/bash

echo "🔍 Previewing meta tags in generated static pages..."
echo "=================================================="

# Function to extract meta tags from HTML file
extract_meta() {
    local file="$1"
    local page_name="$2"
    
    echo ""
    echo "📄 $page_name"
    echo "---"
    
    if [ -f "$file" ]; then
        echo "Title: $(grep -o '<title>[^<]*' "$file" | sed 's/<title>//')"
        echo "Description: $(grep -o 'name="description" content="[^"]*' "$file" | sed 's/name="description" content="//')"
        echo "OG Title: $(grep -o 'property="og:title" content="[^"]*' "$file" | sed 's/property="og:title" content="//')"
        echo "OG Description: $(grep -o 'property="og:description" content="[^"]*' "$file" | sed 's/property="og:description" content="//')"
    else
        echo "❌ File not found: $file"
    fi
}

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ dist directory not found. Run npm run build-static first."
    exit 1
fi

# Extract meta tags from key pages
extract_meta "dist/index.html" "Homepage"
extract_meta "dist/compare/index.html" "Compare Page"
extract_meta "dist/about/index.html" "About Page"
extract_meta "dist/articles/vizualno-blochnoe-programmirovanie-dlya-detey/index.html" "Sample Article Page"

echo ""
echo "=================================================="
echo "✅ Meta tag preview complete!"
echo "💡 Each page should have unique titles and descriptions"