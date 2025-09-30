#!/bin/bash

# Script to transfer all deployment files to VPS
# Run this script from your local machine

set -e

VPS_IP="195.133.49.159"
VPS_USER="root"
VPS_PASSWORD="VsHJwxM9uc"
LOCAL_DIR="."
REMOTE_DIR="/root/deployment"

echo "📤 Transferring deployment files to VPS..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📋 Transfer Configuration:${NC}"
echo "VPS IP: $VPS_IP"
echo "VPS User: $VPS_USER"
echo "Local Directory: $LOCAL_DIR"
echo "Remote Directory: $REMOTE_DIR"
echo ""

# Function to transfer files using scp
transfer_files() {
    echo -e "${YELLOW}📁 Creating remote directory...${NC}"
    sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "mkdir -p $REMOTE_DIR"
    
    echo -e "${YELLOW}📤 Transferring deployment scripts...${NC}"
    sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no \
        deploy-existing-react.sh \
        ssl-setup.sh \
        monitoring-setup.sh \
        migrate-existing-react.sh \
        README-SSR-Setup.md \
        $VPS_USER@$VPS_IP:$REMOTE_DIR/
    
    echo -e "${YELLOW}📤 Transferring application files...${NC}"
    # Create a temporary archive to transfer the entire application
    tar -czf app-transfer.tar.gz \
        --exclude=node_modules \
        --exclude=dist \
        --exclude=.git \
        --exclude=*.log \
        --exclude=.vite \
        --exclude=.next \
        src/ public/ package.json package-lock.json \
        tsconfig.json tailwind.config.ts vite.config.ts \
        postcss.config.js index.html components.json eslint.config.js \
        bun.lockb README.md
    
    sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no app-transfer.tar.gz $VPS_USER@$VPS_IP:$REMOTE_DIR/
    
    # Clean up local archive
    rm app-transfer.tar.gz
    
    echo -e "${YELLOW}📦 Extracting files on VPS...${NC}"
    sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "
        cd $REMOTE_DIR
        tar -xzf app-transfer.tar.gz
        rm app-transfer.tar.gz
        chmod +x *.sh
    "
}

# Function to run deployment
run_deployment() {
    echo -e "${YELLOW}🚀 Running deployment on VPS...${NC}"
    sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "
        cd $REMOTE_DIR
        ./deploy-existing-react.sh
    "
}

# Check if sshpass is installed
if ! command -v sshpass &> /dev/null; then
    echo "❌ sshpass is required but not installed."
    echo "Please install it:"
    echo "  Ubuntu/Debian: sudo apt install sshpass"
    echo "  macOS: brew install sshpass"
    echo "  CentOS/RHEL: sudo yum install sshpass"
    exit 1
fi

# Transfer files
transfer_files

echo -e "${GREEN}✅ Files transferred successfully!${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Connect to your VPS:"
echo "   ssh $VPS_USER@$VPS_IP"
echo ""
echo "2. Navigate to deployment directory:"
echo "   cd $REMOTE_DIR"
echo ""
echo "3. Run the deployment script:"
echo "   ./deploy-existing-react.sh"
echo ""
echo "4. After deployment, set up SSL:"
echo "   ./ssl-setup.sh"
echo ""
echo "5. Set up monitoring:"
echo "   ./monitoring-setup.sh"
echo ""
echo -e "${YELLOW}🔧 Or run deployment automatically:${NC}"
read -p "Do you want to run the deployment now? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    run_deployment
    echo -e "${GREEN}✅ Deployment completed!${NC}"
    echo "Your website should now be available at: http://programmirovanie-dlya-detej-online.ru"
fi