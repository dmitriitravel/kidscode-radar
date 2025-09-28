#!/bin/bash

# Migration script for existing React app to Next.js SSR
# Use this if you already have a React application that needs to be migrated

set -e

DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"
BACKUP_DIR="/var/backups/react-app-$(date +%Y%m%d-%H%M%S)"

echo "🔄 Migrating existing React app to Next.js SSR"

# Create backup
echo "💾 Creating backup..."
mkdir -p $BACKUP_DIR
if [ -d "$APP_DIR" ]; then
    cp -r $APP_DIR/* $BACKUP_DIR/
    echo "✅ Backup created at: $BACKUP_DIR"
fi

cd $APP_DIR

# Check current React setup
if [ -f "package.json" ]; then
    echo "📋 Current package.json found"
    cat package.json | jq '.dependencies' || echo "Dependencies found but jq not available"
fi

# Install Next.js and required dependencies
echo "📦 Installing Next.js and dependencies..."
npm install next@latest react@latest react-dom@latest

# Install development dependencies
npm install -D eslint eslint-config-next @types/node @types/react @types/react-dom typescript

# Create Next.js configuration
echo "⚙️ Creating Next.js configuration..."
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static optimization
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['localhost', 'programmirovanie-dlya-detej-online.ru'],
  },
  
  // Compression
  compress: true,
  
  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
EOF

# Create TypeScript configuration
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Create directory structure for Next.js
echo "📁 Creating Next.js directory structure..."
mkdir -p src/app
mkdir -p src/components
mkdir -p src/styles
mkdir -p public

# Create basic layout and page structure
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Программирование для детей онлайн',
  description: 'Обучение программированию для детей - курсы, уроки и практические задания',
  keywords: 'программирование, дети, обучение, курсы, онлайн',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
EOF

cat > src/app/page.tsx << 'EOF'
export default function Home() {
  return (
    <main>
      <h1>Программирование для детей онлайн</h1>
      <p>Добро пожаловать на наш сайт обучения программированию для детей!</p>
    </main>
  )
}
EOF

cat > src/app/globals.css << 'EOF'
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

main {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
  color: #2c3e50;
}
EOF

# Update package.json scripts
echo "📝 Updating package.json scripts..."
npm pkg set scripts.dev="next dev"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"
npm pkg set scripts.lint="next lint"

echo "✅ Migration to Next.js completed!"
echo ""
echo "📋 Next steps:"
echo "1. Move your existing React components to src/components/"
echo "2. Update imports to use Next.js conventions"
echo "3. Convert pages to Next.js app router structure"
echo "4. Test the application: npm run dev"
echo "5. Build for production: npm run build"
echo ""
echo "💾 Your original files are backed up at: $BACKUP_DIR"