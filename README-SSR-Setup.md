# SSR Setup Guide for programmirovanie-dlya-detej-online.ru

This guide will help you set up Server-Side Rendering (SSR) for your React website on your VPS.

## 📋 Prerequisites

- VPS with Ubuntu/Debian
- Domain name configured to point to your VPS IP
- SSH access to your server

## 🚀 Quick Setup

### Step 1: Connect to your VPS
```bash
ssh root@195.133.49.159
```

### Step 2: Upload and run the deployment script
```bash
# Download the deployment script
wget https://raw.githubusercontent.com/your-repo/deploy-ssr.sh
# Or copy the script content manually

chmod +x deploy-ssr.sh
./deploy-ssr.sh
```

## 📁 Files Included

### 1. `deploy-ssr.sh` - Main Deployment Script
- Installs Node.js, Nginx, PM2
- Sets up Next.js application with SSR
- Configures reverse proxy
- Sets up process management

### 2. `ssl-setup.sh` - SSL Certificate Setup
- Installs and configures Let's Encrypt SSL
- Updates Nginx for HTTPS redirect
- Sets up automatic renewal

### 3. `migrate-existing-react.sh` - React Migration
- Migrates existing React app to Next.js
- Creates backup of existing files
- Sets up Next.js configuration

### 4. `monitoring-setup.sh` - Monitoring & Maintenance
- Sets up application monitoring
- Configures log rotation
- Creates backup scripts
- Installs security tools

## 🔧 Manual Setup Steps

If you prefer manual setup, follow these steps:

### 1. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
```

### 2. Install PM2 and Nginx
```bash
npm install -g pm2
apt install -y nginx
```

### 3. Create Application Directory
```bash
mkdir -p /var/www/programmirovanie-dlya-detej-online.ru
cd /var/www/programmirovanie-dlya-detej-online.ru
```

### 4. Set up Next.js Application
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 5. Configure PM2
Create `ecosystem.config.js`:
```javascript
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
    }
  }]
};
```

### 6. Configure Nginx
Create `/etc/nginx/sites-available/programmirovanie-dlya-detej-online.ru`:
```nginx
server {
    listen 80;
    server_name programmirovanie-dlya-detej-online.ru www.programmirovanie-dlya-detej-online.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Enable Site and Start Services
```bash
ln -s /etc/nginx/sites-available/programmirovanie-dlya-detej-online.ru /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🔒 SSL Setup

After basic setup, run the SSL script:
```bash
chmod +x ssl-setup.sh
./ssl-setup.sh
```

## 📊 Monitoring

Set up monitoring and maintenance:
```bash
chmod +x monitoring-setup.sh
./monitoring-setup.sh
```

## 🛠️ Useful Commands

### PM2 Management
```bash
pm2 status                 # Check application status
pm2 logs                   # View logs
pm2 restart all            # Restart application
pm2 reload all             # Reload application (zero downtime)
pm2 stop all               # Stop application
```

### Nginx Management
```bash
nginx -t                   # Test configuration
systemctl status nginx     # Check Nginx status
systemctl restart nginx    # Restart Nginx
systemctl reload nginx     # Reload Nginx configuration
```

### Application Updates
```bash
cd /var/www/programmirovanie-dlya-detej-online.ru
npm ci --production        # Install dependencies
npm run build             # Build application
pm2 restart programmirovanie-dlya-detej  # Restart app
```

## 🔍 Troubleshooting

### Check Application Logs
```bash
pm2 logs programmirovanie-dlya-detej
```

### Check Nginx Logs
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Check System Resources
```bash
htop                      # CPU and memory usage
df -h                     # Disk usage
```

### Test Domain Accessibility
```bash
curl -I http://programmirovanie-dlya-detej-online.ru
```

## 📈 Performance Optimization

### Enable Gzip Compression
Already configured in Nginx configuration.

### Static File Caching
Configured for Next.js static files and images.

### Process Clustering
PM2 runs in cluster mode for better performance.

## 🔐 Security Features

- fail2ban protection against brute force attacks
- Security headers in Nginx configuration
- SSL/TLS encryption with Let's Encrypt
- Regular security updates through monitoring script

## 📞 Support

If you encounter any issues:
1. Check the logs using the commands above
2. Verify all services are running
3. Check domain DNS configuration
4. Ensure firewall allows HTTP/HTTPS traffic

## 🎯 Next Steps After Setup

1. **Customize Your Application**: Modify the Next.js application in `/var/www/programmirovanie-dlya-detej-online.ru/src/`
2. **Add Content**: Create pages for your programming courses
3. **SEO Optimization**: Configure meta tags and structured data
4. **Analytics**: Add Google Analytics or similar tracking
5. **Performance Monitoring**: Set up application performance monitoring
6. **Backup Strategy**: Ensure regular backups are working
7. **Content Management**: Consider adding a CMS if needed