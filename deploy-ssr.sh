#!/bin/bash

# SSR Deployment Script for programmirovanie-dlya-detej-online.ru
# Run this script on your VPS as root

set -e

echo "🚀 Starting SSR deployment for programmirovanie-dlya-detej-online.ru"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"
NODE_VERSION="18"

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "Domain: $DOMAIN"
echo "App Directory: $APP_DIR"
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

# Install Git if not present
echo -e "${YELLOW}📥 Installing Git...${NC}"
apt install -y git

# Create application directory
echo -e "${YELLOW}📁 Creating application directory...${NC}"
mkdir -p $APP_DIR
cd $APP_DIR

# Check if it's already a git repository or has React files
if [ ! -d ".git" ] && [ ! -f "package.json" ]; then
    echo -e "${YELLOW}🎯 Setting up React application with SSR...${NC}"
    
    # Create a Next.js application (recommended for SSR)
    npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
    
    echo -e "${GREEN}✅ Next.js application created${NC}"
else
    echo -e "${YELLOW}📦 Existing application found, installing dependencies...${NC}"
    npm install
fi

# Create PM2 ecosystem file
echo -e "${YELLOW}⚙️ Creating PM2 configuration...${NC}"
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'programmirovanie-dlya-detej',
    script: 'npm',
    args: 'start',
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

# Create log directory for PM2
mkdir -p /var/log/pm2

# Build the application
echo -e "${YELLOW}🏗️ Building the application...${NC}"
npm run build

# Configure Nginx
echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Redirect HTTP to HTTPS (will be enabled after SSL setup)
    # return 301 https://\$server_name\$request_uri;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Enable gzip compression
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    }

    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }

    # Images and assets caching
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
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

echo -e "${GREEN}✅ Basic deployment completed!${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Install SSL certificate with Certbot:"
echo "   apt install certbot python3-certbot-nginx -y"
echo "   certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
echo "2. Check application status:"
echo "   pm2 status"
echo "   pm2 logs"
echo ""
echo "3. Your application should be accessible at:"
echo "   http://$DOMAIN"
echo ""
echo -e "${YELLOW}🔧 Useful commands:${NC}"
echo "   pm2 restart all     # Restart application"
echo "   pm2 logs            # View logs"
echo "   nginx -t            # Test nginx config"
echo "   systemctl status nginx  # Check nginx status"