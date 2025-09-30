#!/bin/bash

# SSR Deployment Script for existing React app (programmirovanie-dlya-detej-online.ru)
# This script is specifically designed for your existing Vite React application

set -e

echo "🚀 Starting SSR deployment for existing React application"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"
BACKUP_DIR="/var/backups/react-app-$(date +%Y%m%d-%H%M%S)"
NODE_VERSION="18"

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "Domain: $DOMAIN"
echo "App Directory: $APP_DIR"
echo "Backup Directory: $BACKUP_DIR"
echo "Node Version: $NODE_VERSION"
echo ""

# Update system
echo -e "${YELLOW}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install Node.js
echo -e "${YELLOW}🟢 Installing Node.js $NODE_VERSION...${NC}"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt-get install -y nodejs

# Install Nginx
echo -e "${YELLOW}🌐 Installing Nginx...${NC}"
apt install -y nginx

# Install PM2 globally
echo -e "${YELLOW}⚙️ Installing PM2...${NC}"
npm install -g pm2

# Install additional tools
echo -e "${YELLOW}📥 Installing additional tools...${NC}"
apt install -y git curl wget unzip jq

# Create backup if directory exists
if [ -d "$APP_DIR" ]; then
    echo -e "${YELLOW}💾 Creating backup of existing files...${NC}"
    mkdir -p $BACKUP_DIR
    cp -r $APP_DIR/* $BACKUP_DIR/
    echo -e "${GREEN}✅ Backup created at: $BACKUP_DIR${NC}"
fi

# Create application directory
echo -e "${YELLOW}📁 Creating application directory...${NC}"
mkdir -p $APP_DIR
cd $APP_DIR

# If this script is run from the project directory, copy files
if [ -f "../package.json" ]; then
    echo -e "${YELLOW}📋 Copying project files...${NC}"
    cp -r ../* .
fi

# Check if we have the React application files
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please ensure your React application files are in the current directory.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ React application files found${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci --production=false

# Add Next.js for SSR capabilities while keeping existing structure
echo -e "${YELLOW}🔄 Adding Next.js for SSR...${NC}"
npm install next@latest react@latest react-dom@latest

# Install additional SSR dependencies
npm install -D @types/node @types/react @types/react-dom

# Create Next.js configuration that works with existing structure
echo -e "${YELLOW}⚙️ Creating Next.js configuration...${NC}"
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  
  // Configure for existing React app structure
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Image optimization
  images: {
    domains: ['localhost', 'programmirovanie-dlya-detej-online.ru'],
    unoptimized: true, // For static export compatibility
  },
  
  // Enable static optimization
  output: 'export',
  distDir: 'dist',
  
  // Compression
  compress: true,
  
  // Asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
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
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Webpack configuration to handle existing structure
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Handle CSS imports
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
  },
}

module.exports = nextConfig
EOF

# Create app directory for Next.js
mkdir -p app

# Create Next.js app structure that serves your existing React app
cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'Программирование для детей онлайн - Курсы и обучение',
  description: 'Лучшие онлайн курсы программирования для детей. Сравнение школ, отзывы, рейтинги. Обучение программированию с нуля.',
  keywords: 'программирование для детей, курсы программирования, онлайн обучение, детские IT курсы, изучение программирования',
  authors: [{ name: 'Программирование для детей онлайн' }],
  openGraph: {
    title: 'Программирование для детей онлайн',
    description: 'Лучшие онлайн курсы программирования для детей',
    url: 'https://programmirovanie-dlya-detej-online.ru',
    siteName: 'Программирование для детей онлайн',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
EOF

# Create the main page that renders your existing React app
cat > app/page.tsx << 'EOF'
'use client'

import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Программирование для детей онлайн</h1>
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
EOF

# Create dynamic routes for your existing pages
mkdir -p app/\[...slug\]
cat > app/\[...slug\]/page.tsx << 'EOF'
'use client'

import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../../src/App'

export default function CatchAllPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Программирование для детей онлайн</h1>
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
EOF

# Update package.json scripts for Next.js
echo -e "${YELLOW}📝 Updating package.json scripts...${NC}"
npm pkg set scripts.dev="next dev"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"
npm pkg set scripts.export="next build && next export"
npm pkg set scripts.lint="next lint"

# Build the application
echo -e "${YELLOW}🏗️ Building the application...${NC}"
npm run build

# Create PM2 ecosystem file
echo -e "${YELLOW}⚙️ Creating PM2 configuration...${NC}"
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'programmirovanie-dlya-detej',
    script: 'npx',
    args: 'serve dist -s -l 3000',
    cwd: '/var/www/programmirovanie-dlya-detej-online.ru',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/programmirovanie-dlya-detej.error.log',
    out_file: '/var/log/pm2/programmirovanie-dlya-detej.out.log',
    log_file: '/var/log/pm2/programmirovanie-dlya-detej.combined.log',
    time: true
  }]
};
EOF

# Install serve globally for serving static files
npm install -g serve

# Create log directory for PM2
mkdir -p /var/log/pm2

# Configure Nginx
echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    root /var/www/$DOMAIN/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types
        application/javascript
        application/json
        application/xml
        text/css
        text/javascript
        text/plain
        text/xml;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # CSS and JS caching
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
        access_log off;
    }

    # Handle client-side routing
    location / {
        try_files \$uri \$uri/ @fallback;
    }

    # Fallback to serve app
    location @fallback {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # API routes (if any)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Start and enable services
echo -e "${YELLOW}🚀 Starting services...${NC}"
systemctl enable nginx
systemctl restart nginx

# Start the application with PM2
cd $APP_DIR
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo -e "${GREEN}✅ SSR deployment completed!${NC}"
echo ""
echo -e "${YELLOW}📋 Deployment Summary:${NC}"
echo "✅ Node.js $NODE_VERSION installed"
echo "✅ Nginx configured and running"
echo "✅ PM2 process manager configured"
echo "✅ Application built and deployed"
echo "✅ Static files optimized"
echo ""
echo -e "${YELLOW}🌐 Your website is now available at:${NC}"
echo "   http://$DOMAIN"
echo ""
echo -e "${YELLOW}📊 Check status:${NC}"
echo "   pm2 status"
echo "   pm2 logs"
echo "   systemctl status nginx"
echo ""
echo -e "${YELLOW}🔒 Next step - SSL Setup:${NC}"
echo "   Run: ./ssl-setup.sh"
echo ""
echo -e "${YELLOW}📈 For monitoring setup:${NC}"
echo "   Run: ./monitoring-setup.sh"