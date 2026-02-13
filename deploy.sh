#!/bin/bash

# Exit on error
set -e

# Configuration
SERVER_USER="root"
SERVER_IP="223.109.200.65"
DEPLOY_PATH="~/portfolio"
TEMP_ARCHIVE="deploy.tar.gz"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Ensure we are in the script's directory
cd "$(dirname "$0")"

echo -e "${GREEN}Deploying to $SERVER_IP using SCP/TAR (Compatibility Mode)...${NC}"

# 1. Check if SERVER_IP is set
if [ -z "$SERVER_IP" ]; then
    read -p "Enter Server IP: " SERVER_IP
fi

if [ -z "$SERVER_USER" ]; then
    read -p "Enter Server User (e.g., root): " SERVER_USER
fi

# 2. Create a local archive (excluding heavy/unnecessary folders)
echo -e "${GREEN}Creating local archive...${NC}"
# Use a temporary directory for the archive to avoid "file changed as we read it" error
TEMP_ARCHIVE_PATH="/tmp/$TEMP_ARCHIVE"
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    TEMP_ARCHIVE_PATH="./$TEMP_ARCHIVE"
fi

# We ignore exit code 1 from tar (file changed as we read it) which is common on Windows
tar -czf "$TEMP_ARCHIVE" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='.env.local' \
    --exclude="$TEMP_ARCHIVE" \
    . || [ $? -eq 1 ]

# 3. Upload archive to server
echo -e "${GREEN}Uploading archive...${NC}"
scp "$TEMP_ARCHIVE" "$SERVER_USER@$SERVER_IP:/tmp/"

# 4. Extract and Deploy on server
echo -e "${GREEN}Extracting and starting container on server...${NC}"
ssh "$SERVER_USER@$SERVER_IP" "
    mkdir -p $DEPLOY_PATH && \
    tar -xzf /tmp/$TEMP_ARCHIVE -C $DEPLOY_PATH && \
    rm /tmp/$TEMP_ARCHIVE && \
    cd $DEPLOY_PATH && \
    docker-compose up -d --build
"

# 5. Cleanup local archive
rm "$TEMP_ARCHIVE"

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "Visit http://$SERVER_IP:3000 to see your site."
