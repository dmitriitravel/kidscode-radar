#!/bin/bash

# Monitoring and maintenance setup for SSR application

set -e

DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"

echo "📊 Setting up monitoring and maintenance tools"

# Install monitoring tools
apt install -y htop iotop nethogs

# Setup log rotation for PM2 logs
echo "🔄 Setting up log rotation..."
cat > /etc/logrotate.d/pm2 << 'EOF'
/var/log/pm2/*.log {
    daily
    missingok
    rotate 30
    compress
    notifempty
    create 0640 root root
    postrotate
        pm2 reloadLogs
    endscript
}
EOF

# Create monitoring script
cat > /usr/local/bin/monitor-app.sh << 'EOF'
#!/bin/bash

# Application monitoring script
DOMAIN="programmirovanie-dlya-detej-online.ru"
LOG_FILE="/var/log/app-monitor.log"

# Function to log with timestamp
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
if ! curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN | grep -q "200\|301\|302"; then
    log "ERROR: Domain $DOMAIN is not accessible"
fi

log "Monitoring check completed"
EOF

chmod +x /usr/local/bin/monitor-app.sh

# Setup cron job for monitoring
echo "⏰ Setting up monitoring cron job..."
(crontab -l 2>/dev/null; echo "*/5 * * * * /usr/local/bin/monitor-app.sh") | crontab -

# Create backup script
cat > /usr/local/bin/backup-app.sh << 'EOF'
#!/bin/bash

# Application backup script
DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"
BACKUP_DIR="/var/backups/app-backups"
DATE=$(date +%Y%m%d-%H%M%S)

mkdir -p $BACKUP_DIR

# Create application backup
tar -czf "$BACKUP_DIR/app-$DATE.tar.gz" -C "$APP_DIR" .

# Keep only last 7 backups
find $BACKUP_DIR -name "app-*.tar.gz" -mtime +7 -delete

echo "$(date '+%Y-%m-%d %H:%M:%S') - Backup created: app-$DATE.tar.gz" >> /var/log/backup.log
EOF

chmod +x /usr/local/bin/backup-app.sh

# Setup daily backup
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-app.sh") | crontab -

# Create update script
cat > /usr/local/bin/update-app.sh << 'EOF'
#!/bin/bash

# Application update script
DOMAIN="programmirovanie-dlya-detej-online.ru"
APP_DIR="/var/www/$DOMAIN"

cd $APP_DIR

echo "🔄 Updating application..."

# Pull latest changes (if using git)
if [ -d ".git" ]; then
    git pull
fi

# Install/update dependencies
npm ci --production

# Build application
npm run build

# Restart application
pm2 restart programmirovanie-dlya-detej

echo "✅ Application updated successfully"
EOF

chmod +x /usr/local/bin/update-app.sh

# Install fail2ban for security
echo "🔒 Installing fail2ban for security..."
apt install -y fail2ban

# Configure fail2ban
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

echo "✅ Monitoring and maintenance setup completed!"
echo ""
echo "📋 Available commands:"
echo "  /usr/local/bin/monitor-app.sh    - Manual monitoring check"
echo "  /usr/local/bin/backup-app.sh     - Manual backup"
echo "  /usr/local/bin/update-app.sh     - Update application"
echo ""
echo "📊 Monitoring:"
echo "  - Application monitoring every 5 minutes"
echo "  - Daily backups at 2 AM"
echo "  - Log rotation for PM2 logs"
echo "  - fail2ban protection enabled"