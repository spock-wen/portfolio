#!/bin/bash

# 遇到错误时退出
set -e

# 配置
SERVER_USER="root"
SERVER_IP="223.109.200.65"
DEPLOY_PATH="~/portfolio"
TEMP_ARCHIVE="deploy.tar.gz"
DOMAIN="person.wenspock.site"

# 颜色设置
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

# 确保我们在脚本所在的目录下
cd "$(dirname "$0")"

echo -e "${GREEN}正在通过 SCP/TAR (兼容模式) 部署到 $SERVER_IP...${NC}"

# 1. 检查是否设置了 SERVER_IP
if [ -z "$SERVER_IP" ]; then
    read -p "请输入服务器 IP: " SERVER_IP
fi

if [ -z "$SERVER_USER" ]; then
    read -p "请输入服务器用户名 (例如: root): " SERVER_USER
fi

# 询问邮箱用于 SSL 证书 (如果是第一次)
if [ -z "$SSL_EMAIL" ]; then
    read -p "请输入用于申请 SSL 证书的邮箱 (用于过期通知): " SSL_EMAIL
fi

# 2. 创建本地压缩包 (排除较大/不必要的文件夹)
echo -e "${GREEN}正在创建本地压缩包...${NC}"
# 使用临时目录存放压缩包，以避免“文件在读取时发生更改”的错误
TEMP_ARCHIVE_PATH="/tmp/$TEMP_ARCHIVE"
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    TEMP_ARCHIVE_PATH="./$TEMP_ARCHIVE"
fi

# 我们忽略 tar 的退出代码 1 (文件在读取时发生更改)，这在 Windows 上很常见
tar -czf "$TEMP_ARCHIVE" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='.env.local' \
    --exclude="$TEMP_ARCHIVE" \
    . || [ $? -eq 1 ]

# 3. 上传压缩包到服务器
echo -e "${GREEN}正在上传压缩包...${NC}"
scp "$TEMP_ARCHIVE" "$SERVER_USER@$SERVER_IP:/tmp/"

# 4. 在服务器上解压并部署
echo -e "${GREEN}正在服务器上解压并配置环境...${NC}"
ssh "$SERVER_USER@$SERVER_IP" "
    mkdir -p $DEPLOY_PATH && \
    tar -xzf /tmp/$TEMP_ARCHIVE -C $DEPLOY_PATH && \
    rm /tmp/$TEMP_ARCHIVE && \
    cd $DEPLOY_PATH && \
    docker-compose up -d --build && \
    
    echo -e \"${GREEN}正在配置 SSL...${NC}\" && \
    
    # 检查证书是否存在
    if [ ! -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem ]; then
        echo '证书未找到，正在准备初始申请...'
        
        # 1. 先使用临时的 HTTP 配置以通过验证
        cat > /etc/nginx/conf.d/portfolio.conf <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}
EOF
        nginx -t && nginx -s reload
        
        # 2. 申请证书 (使用 certbot certonly)
        echo '正在申请证书...'
        certbot certonly --nginx -d $DOMAIN --non-interactive --agree-tos -m $SSL_EMAIL
    fi && \

    # 部署最终的 HTTPS 配置
    echo -e \"${GREEN}正在更新最终 Nginx 配置...${NC}\" && \
    cp nginx.conf /etc/nginx/conf.d/portfolio.conf && \
    nginx -t && \
    nginx -s reload
"

# 5. 清理本地压缩包
rm "$TEMP_ARCHIVE"

echo -e "${GREEN}部署完成!${NC}"
echo -e "请访问 https://$DOMAIN 查看您的站点。"
