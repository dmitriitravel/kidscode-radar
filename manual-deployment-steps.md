# Manual Deployment Steps for programmirovanie-dlya-detej-online.ru

If you prefer to deploy manually or the automated scripts don't work, follow these step-by-step instructions.

## 📋 Prerequisites

1. SSH access to your VPS: `ssh root@195.133.49.159`
2. Your React application files ready for upload

## 🚀 Step-by-Step Deployment

### Step 1: Connect to VPS and Update System

```bash
ssh root@195.133.49.159
apt update && apt upgrade -y
```

### Step 2: Install Node.js 18

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
node --version  # Should show v18.x.x
npm --version
```

### Step 3: Install Nginx and PM2

```bash
apt install -y nginx
npm install -g pm2
systemctl enable nginx
systemctl start nginx
```

### Step 4: Create Application Directory

```bash
mkdir -p /var/www/programmirovanie-dlya-detej-online.ru
cd /var/www/programmirovanie-dlya-detej-online.ru
```

### Step 5: Upload Your Application Files

You can use one of these methods:

#### Method A: Using SCP (from your local machine)
```bash
# From your local project directory
scp -r src/ public/ package.json package-lock.json tsconfig.json tailwind.config.ts vite.config.ts postcss.config.js index.html components.json eslint.config.js README.md root@195.133.49.159:/var/www/programmirovanie-dlya-detej-online.ru/
```

#### Method B: Using Git (if your code is in a repository)
```bash
git clone https://github.com/your-username/your-repo.git .
```

#### Method C: Upload via File Manager or FTP
Upload all your project files to `/var/www/programmirovanie-dlya-detej-online.ru/`

### Step 6: Install Dependencies and Build

```bash
cd /var/www/programmirovanie-dlya-detej-online.ru
npm ci
npm run build
```

### Step 7: Install Static File Server

```bash
npm install -g serve
```

### Step 8: Create PM2 Configuration

Create file `ecosystem.config.js`:

```bash
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
```

### Step 9: Create Log Directory

```bash
mkdir -p /var/log/pm2
```

### Step 10: Configure Nginx

Create Nginx configuration:

```bash
cat > /etc/nginx/sites-available/programmirovanie-dlya-detej-online.ru << 'EOF'
server {
    listen 80;
    server_name programmirovanie-dlya-detej-online.ru www.programmirovanie-dlya-detej-online.ru;
    root /var/www/programmirovanie-dlya-detej-online.ru/dist;
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
        try_files $uri $uri/ @fallback;
    }

    # Fallback to serve app
    location @fallback {
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
EOF
```

### Step 11: Enable Site and Test Configuration

```bash
# Enable the site
ln -sf /etc/nginx/sites-available/programmirovanie-dlya-detej-online.ru /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
```

### Step 12: Start Application with PM2

```bash
cd /var/www/programmirovanie-dlya-detej-online.ru
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 13: Verify Deployment

Check if everything is running:

```bash
# Check PM2 status
pm2 status

# Check Nginx status
systemctl status nginx

# Check if site is accessible
curl -I http://programmirovanie-dlya-detej-online.ru
```

### Step 14: Set Up SSL Certificate

```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
certbot --nginx -d programmirovanie-dlya-detej-online.ru -d www.programmirovanie-dlya-detej-online.ru

# Set up automatic renewal
crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | crontab -
```

## 🔧 Useful Commands for Management

### PM2 Commands
```bash
pm2 status                          # Check app status
pm2 logs programmirovanie-dlya-detej # View logs
pm2 restart programmirovanie-dlya-detej # Restart app
pm2 stop programmirovanie-dlya-detej    # Stop app
pm2 delete programmirovanie-dlya-detej  # Remove app from PM2
```

### Nginx Commands
```bash
nginx -t                    # Test configuration
systemctl status nginx      # Check status
systemctl restart nginx     # Restart Nginx
systemctl reload nginx      # Reload configuration
```

### Application Updates
```bash
cd /var/www/programmirovanie-dlya-detej-online.ru
git pull                    # If using Git
npm ci                      # Install dependencies
npm run build              # Build application
pm2 restart programmirovanie-dlya-detej # Restart app
```

## 🔍 Troubleshooting

### Check Logs
```bash
# PM2 logs
pm2 logs

# Nginx error log
tail -f /var/log/nginx/error.log

# Nginx access log
tail -f /var/log/nginx/access.log
```

### Common Issues

1. **Port 3000 already in use**
   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

2. **Nginx configuration test fails**
   ```bash
   nginx -t
   # Fix the errors shown and test again
   ```

3. **Application not accessible**
   - Check if PM2 app is running: `pm2 status`
   - Check if Nginx is running: `systemctl status nginx`
   - Check firewall: `ufw status`

4. **SSL certificate issues**
   ```bash
   certbot certificates
   certbot renew --dry-run
   ```

## 🎯 Performance Optimization

1. **Enable Gzip** (already configured in Nginx)
2. **Set up caching** (already configured)
3. **Optimize images** - Use WebP format where possible
4. **Monitor resources** - Use `htop` and `iotop`

## 📊 Monitoring Setup

For comprehensive monitoring, you can also run the monitoring script:

```bash
# Download and run monitoring setup
wget https://raw.githubusercontent.com/your-repo/monitoring-setup.sh
chmod +x monitoring-setup.sh
./monitoring-setup.sh
```

Your website should now be fully deployed and accessible at `https://programmirovanie-dlya-detej-online.ru`!