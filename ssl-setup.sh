#!/bin/bash

# SSL Setup Script for programmirovanie-dlya-detej-online.ru
# Run this after the main deployment script

set -e

DOMAIN="programmirovanie-dlya-detej-online.ru"

echo "🔒 Setting up SSL certificate for $DOMAIN"

# Install Certbot
echo "📦 Installing Certbot..."
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
echo "🔐 Obtaining SSL certificate..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Update Nginx configuration to redirect HTTP to HTTPS
echo "🌐 Updating Nginx configuration..."
sed -i 's/# return 301 https/return 301 https/' /etc/nginx/sites-available/$DOMAIN

# Test and reload Nginx
nginx -t
systemctl reload nginx

# Set up automatic renewal
echo "🔄 Setting up automatic certificate renewal..."
crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | crontab -

echo "✅ SSL setup completed!"
echo "Your site is now available at: https://$DOMAIN"