#!/bin/bash

# Complete SSR Setup Script for programmirovanie-dlya-detej-online.ru
# This script will set up everything needed for SSR on your VPS

set -e

echo "🚀 Starting complete SSR setup for programmirovanie-dlya-detej-online.ru"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"
BACKUP_DIR="/var/backups/react-app-$(date +%Y%m%d-%H%M%S)"
NODE_VERSION="18"

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_header "SYSTEM PREPARATION"

# Update system
echo -e "${YELLOW}📦 Updating system packages...${NC}"
apt update && apt upgrade -y
print_success "System updated"

# Install essential tools
echo -e "${YELLOW}🛠️  Installing essential tools...${NC}"
apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release
print_success "Essential tools installed"

print_header "NODE.JS INSTALLATION"

# Install Node.js
echo -e "${YELLOW}🟢 Installing Node.js $NODE_VERSION...${NC}"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt-get install -y nodejs
print_success "Node.js $(node --version) installed"
print_success "npm $(npm --version) installed"

print_header "WEB SERVER SETUP"

# Install Nginx
echo -e "${YELLOW}🌐 Installing Nginx...${NC}"
apt install -y nginx
systemctl enable nginx
systemctl start nginx
print_success "Nginx installed and started"

# Install PM2
echo -e "${YELLOW}⚙️  Installing PM2...${NC}"
npm install -g pm2
print_success "PM2 installed globally"

print_header "APPLICATION SETUP"

# Create backup if directory exists
if [ -d "$APP_DIR" ]; then
    echo -e "${YELLOW}💾 Creating backup of existing files...${NC}"
    mkdir -p $BACKUP_DIR
    cp -r $APP_DIR/* $BACKUP_DIR/ 2>/dev/null || true
    print_success "Backup created at: $BACKUP_DIR"
fi

# Create application directory
echo -e "${YELLOW}📁 Setting up application directory...${NC}"
mkdir -p $APP_DIR
cd $APP_DIR

# Create a Next.js application with SSR
echo -e "${YELLOW}🎯 Creating Next.js application with SSR...${NC}"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
print_success "Next.js application created"

print_header "SSR CONFIGURATION"

# Create optimized Next.js configuration
echo -e "${YELLOW}⚙️  Creating optimized Next.js configuration...${NC}"
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable experimental features for better performance
  experimental: {
    appDir: true,
  },
  
  // Image optimization
  images: {
    domains: ['localhost', 'programmirovanie-dlya-detej-online.ru'],
    formats: ['image/webp', 'image/avif'],
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
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
EOF

# Create Russian-focused layout
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Программирование для детей онлайн - Лучшие курсы и школы 2024',
  description: 'Сравнение лучших онлайн школ программирования для детей. Отзывы, рейтинги, цены. Выберите идеальный курс программирования для вашего ребенка.',
  keywords: 'программирование для детей, курсы программирования, онлайн обучение, детские IT курсы, изучение программирования, школы программирования, Python для детей, Scratch, робототехника',
  authors: [{ name: 'Программирование для детей онлайн' }],
  creator: 'Программирование для детей онлайн',
  publisher: 'Программирование для детей онлайн',
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
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://programmirovanie-dlya-detej-online.ru',
    title: 'Программирование для детей онлайн - Лучшие курсы и школы 2024',
    description: 'Сравнение лучших онлайн школ программирования для детей. Отзывы, рейтинги, цены.',
    siteName: 'Программирование для детей онлайн',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Программирование для детей онлайн',
    description: 'Лучшие онлайн курсы программирования для детей',
  },
  alternates: {
    canonical: 'https://programmirovanie-dlya-detej-online.ru',
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
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
EOF

# Create main page with Russian content
cat > src/app/page.tsx << 'EOF'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Программирование для детей онлайн
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Сравните лучшие онлайн школы программирования для детей. 
            Найдите идеальный курс для вашего ребенка с учетом возраста, 
            интересов и уровня подготовки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schools" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Выбрать школу
            </Link>
            <Link 
              href="/compare" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Сравнить курсы
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-4">Персональный подбор</h3>
            <p className="text-gray-600">
              Помогаем выбрать курс программирования, идеально подходящий 
              возрасту и интересам вашего ребенка.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-4">Честные отзывы</h3>
            <p className="text-gray-600">
              Реальные отзывы родителей и учеников о качестве обучения 
              в различных онлайн школах.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-4">Сравнение цен</h3>
            <p className="text-gray-600">
              Актуальные цены на курсы, скидки и специальные предложения 
              от ведущих школ программирования.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Популярные направления
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="font-semibold mb-2">Python</h4>
              <p className="text-sm text-gray-600">Для начинающих и продвинутых</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="font-semibold mb-2">Scratch</h4>
              <p className="text-sm text-gray-600">Визуальное программирование</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold mb-2">Веб-разработка</h4>
              <p className="text-sm text-gray-600">HTML, CSS, JavaScript</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="font-semibold mb-2">Робототехника</h4>
              <p className="text-sm text-gray-600">Arduino, Raspberry Pi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
EOF

# Create additional pages
mkdir -p src/app/schools src/app/compare src/app/about

cat > src/app/schools/page.tsx << 'EOF'
export default function Schools() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Онлайн школы программирования для детей
        </h1>
        <div className="text-center">
          <p className="text-xl text-gray-600">
            Здесь будет список лучших школ программирования для детей
          </p>
        </div>
      </div>
    </main>
  )
}
EOF

cat > src/app/compare/page.tsx << 'EOF'
export default function Compare() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Сравнение курсов программирования
        </h1>
        <div className="text-center">
          <p className="text-xl text-gray-600">
            Здесь будет инструмент для сравнения различных курсов
          </p>
        </div>
      </div>
    </main>
  )
}
EOF

cat > src/app/about/page.tsx << 'EOF'
export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          О проекте
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Наш проект помогает родителям выбрать лучшие онлайн курсы 
            программирования для своих детей. Мы анализируем различные 
            школы и предоставляем честные отзывы и сравнения.
          </p>
        </div>
      </div>
    </main>
  )
}
EOF

print_success "SSR pages created with Russian content"

# Build the application
echo -e "${YELLOW}🏗️  Building the application...${NC}"
npm run build
print_success "Application built successfully"

print_header "PM2 CONFIGURATION"

# Create PM2 ecosystem file
echo -e "${YELLOW}⚙️  Creating PM2 configuration...${NC}"
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
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};
EOF

# Create log directory for PM2
mkdir -p /var/log/pm2
print_success "PM2 configuration created"

print_header "NGINX CONFIGURATION"

# Configure Nginx with optimized settings
echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header X-XSS-Protection "1; mode=block" always;

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
        text/xml
        image/svg+xml;

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
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching for Next.js
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }

    # Images and assets caching
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Favicon
    location = /favicon.ico {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Robots.txt
    location = /robots.txt {
        proxy_pass http://localhost:3000;
        expires 1d;
        add_header Cache-Control "public";
        access_log off;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t
print_success "Nginx configured and tested"

print_header "STARTING SERVICES"

# Start and enable services
echo -e "${YELLOW}🚀 Starting services...${NC}"
systemctl restart nginx
print_success "Nginx restarted"

# Start the application with PM2
cd $APP_DIR
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root
print_success "Application started with PM2"

print_header "SSL CERTIFICATE SETUP"

# Install Certbot
echo -e "${YELLOW}🔒 Installing SSL certificate...${NC}"
apt install -y certbot python3-certbot-nginx

# Get SSL certificate (non-interactive)
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN --redirect
print_success "SSL certificate installed"

# Set up automatic renewal
crontab -l 2>/dev/null | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | crontab -
print_success "SSL auto-renewal configured"

print_header "SECURITY SETUP"

# Install and configure fail2ban
echo -e "${YELLOW}🛡️  Setting up security...${NC}"
apt install -y fail2ban

cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
port = http,https
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
filter = nginx-limit-req
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 10
EOF

systemctl enable fail2ban
systemctl restart fail2ban
print_success "Security configured with fail2ban"

print_header "MONITORING SETUP"

# Create monitoring script
cat > /usr/local/bin/monitor-app.sh << 'EOF'
#!/bin/bash

DOMAIN="programmirovanie-dlya-detej-online.ru"
LOG_FILE="/var/log/app-monitor.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $LOG_FILE
}

# Check if application is running
if ! pm2 status | grep -q "programmirovanie-dlya-detej"; then
    log "ERROR: Application is not running, attempting restart"
    pm2 restart programmirovanie-dlya-detej
    log "Application restart attempted"
fi

# Check if Nginx is running
if ! systemctl is-active --quiet nginx; then
    log "ERROR: Nginx is not running, attempting restart"
    systemctl restart nginx
    log "Nginx restart attempted"
fi

# Check disk space
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 85 ]; then
    log "WARNING: Disk usage is at ${DISK_USAGE}%"
fi

# Check memory usage
MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEM_USAGE -gt 85 ]; then
    log "WARNING: Memory usage is at ${MEM_USAGE}%"
fi

# Check if domain is accessible
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN || echo "000")
if [ "$HTTP_STATUS" != "200" ]; then
    log "ERROR: Domain $DOMAIN returned status $HTTP_STATUS"
fi

log "Monitoring check completed"
EOF

chmod +x /usr/local/bin/monitor-app.sh

# Setup monitoring cron job
(crontab -l 2>/dev/null; echo "*/5 * * * * /usr/local/bin/monitor-app.sh") | crontab -
print_success "Monitoring configured"

print_header "DEPLOYMENT COMPLETED"

# Final status check
echo -e "${YELLOW}🔍 Checking final status...${NC}"
pm2 status
systemctl status nginx --no-pager -l

print_success "Node.js $(node --version) installed"
print_success "Nginx configured and running"
print_success "PM2 process manager running"
print_success "SSL certificate installed"
print_success "Security configured"
print_success "Monitoring enabled"

echo ""
echo -e "${GREEN}🎉 SSR DEPLOYMENT COMPLETED SUCCESSFULLY! 🎉${NC}"
echo ""
echo -e "${BLUE}🌐 Your website is now available at:${NC}"
echo -e "${GREEN}   https://$DOMAIN${NC}"
echo -e "${GREEN}   https://www.$DOMAIN${NC}"
echo ""
echo -e "${BLUE}📊 Management commands:${NC}"
echo "   pm2 status           # Check application status"
echo "   pm2 logs             # View application logs"
echo "   pm2 restart all      # Restart application"
echo "   systemctl status nginx  # Check Nginx status"
echo "   certbot certificates    # Check SSL certificates"
echo ""
echo -e "${BLUE}📈 Features enabled:${NC}"
echo "   ✅ Server-Side Rendering (SSR)"
echo "   ✅ HTTPS with automatic renewal"
echo "   ✅ Gzip compression"
echo "   ✅ Security headers"
echo "   ✅ Process clustering"
echo "   ✅ Automatic monitoring"
echo "   ✅ Fail2ban protection"
echo ""
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. Customize the content in /var/www/$DOMAIN/src/app/"
echo "2. Add your Google Analytics and Yandex Metrica codes"
echo "3. Update verification codes in layout.tsx"
echo "4. Add your actual school data and reviews"
echo ""
print_success "Setup completed! Your SSR website is ready!"