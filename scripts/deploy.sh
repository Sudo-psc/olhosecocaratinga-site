#!/bin/bash
# ============================================
# Script de Deploy - olhosecocaratinga.com.br
# ============================================

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variáveis
DOMAIN="olhosecocaratinga.com.br"
EMAIL="contato@saraivavision.com.br"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Deploy - olhosecocaratinga.com.br${NC}"
echo -e "${BLUE}============================================${NC}"

# ============================================
# Funções auxiliares
# ============================================
check_env() {
    if [ ! -f "$APP_DIR/.env" ]; then
        echo -e "${RED}Erro: Arquivo .env não encontrado!${NC}"
        echo -e "Copie .env.example para .env e configure as variáveis"
        exit 1
    fi
}

# ============================================
# Menu principal
# ============================================
show_menu() {
    echo -e "\n${YELLOW}Escolha uma opção:${NC}"
    echo "1) Deploy completo (primeira vez)"
    echo "2) Atualizar aplicação"
    echo "3) Obter certificado SSL"
    echo "4) Renovar certificado SSL"
    echo "5) Ver logs"
    echo "6) Reiniciar serviços"
    echo "7) Parar serviços"
    echo "8) Status dos containers"
    echo "9) Backup"
    echo "0) Sair"
    echo ""
    read -p "Opção: " option
}

# ============================================
# 1. Deploy completo (primeira vez)
# ============================================
deploy_full() {
    echo -e "\n${YELLOW}[Deploy Completo]${NC}"
    check_env
    
    cd "$APP_DIR"
    
    # Usar configuração HTTP inicial (sem SSL)
    echo -e "${BLUE}Configurando Nginx (HTTP)...${NC}"
    cp nginx/conf.d/default.conf.initial nginx/conf.d/default.conf
    
    # Build e start
    echo -e "${BLUE}Construindo e iniciando containers...${NC}"
    docker compose -f docker-compose.prod.yml build --no-cache
    docker compose -f docker-compose.prod.yml up -d app nginx
    
    # Aguardar app iniciar
    echo -e "${BLUE}Aguardando aplicação iniciar...${NC}"
    sleep 10
    
    echo -e "${GREEN}Deploy inicial concluído!${NC}"
    echo -e "${YELLOW}Próximo passo: Execute opção 3 para obter certificado SSL${NC}"
}

# ============================================
# 2. Atualizar aplicação
# ============================================
update_app() {
    echo -e "\n${YELLOW}[Atualizando Aplicação]${NC}"
    check_env
    
    cd "$APP_DIR"
    
    # Pull últimas mudanças (se usando git)
    if [ -d ".git" ]; then
        echo -e "${BLUE}Baixando últimas alterações...${NC}"
        git pull origin main
    fi
    
    # Rebuild e restart
    echo -e "${BLUE}Reconstruindo aplicação...${NC}"
    docker compose -f docker-compose.prod.yml build app
    
    echo -e "${BLUE}Reiniciando containers...${NC}"
    docker compose -f docker-compose.prod.yml up -d --force-recreate app
    
    echo -e "${GREEN}Aplicação atualizada!${NC}"
}

# ============================================
# 3. Obter certificado SSL
# ============================================
get_ssl() {
    echo -e "\n${YELLOW}[Obtendo Certificado SSL]${NC}"
    
    cd "$APP_DIR"
    
    # Verificar se já existe certificado
    if [ -d "certbot/conf/live/$DOMAIN" ]; then
        echo -e "${YELLOW}Certificado já existe. Use opção 4 para renovar.${NC}"
        return
    fi
    
    # Executar certbot
    echo -e "${BLUE}Executando Certbot...${NC}"
    docker compose -f docker-compose.prod.yml run --rm certbot certonly \
        --webroot \
        --webroot-path=/var/www/certbot \
        --email $EMAIL \
        --agree-tos \
        --no-eff-email \
        -d $DOMAIN \
        -d www.$DOMAIN
    
    # Verificar se certificado foi criado
    if [ -d "certbot/conf/live/$DOMAIN" ]; then
        echo -e "${GREEN}Certificado obtido com sucesso!${NC}"
        
        # Atualizar configuração do Nginx para HTTPS
        echo -e "${BLUE}Atualizando Nginx para HTTPS...${NC}"
        
        # Restaurar configuração com SSL
        cat > nginx/conf.d/default.conf << 'NGINXEOF'
# ============================================
# Server Block para olhosecocaratinga.com.br
# ============================================

upstream nextjs_upstream {
    server app:3000;
    keepalive 64;
}

# Redirect HTTP para HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name olhosecocaratinga.com.br www.olhosecocaratinga.com.br;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://olhosecocaratinga.com.br$request_uri;
    }
}

# Redirect www para non-www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.olhosecocaratinga.com.br;

    ssl_certificate /etc/letsencrypt/live/olhosecocaratinga.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/olhosecocaratinga.com.br/privkey.pem;
    include /etc/nginx/conf.d/ssl-params.conf;

    return 301 https://olhosecocaratinga.com.br$request_uri;
}

# Main HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name olhosecocaratinga.com.br;

    ssl_certificate /etc/letsencrypt/live/olhosecocaratinga.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/olhosecocaratinga.com.br/privkey.pem;
    include /etc/nginx/conf.d/ssl-params.conf;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    client_max_body_size 10M;

    location ~* \.(ico|css|js|gif|jpeg|jpg|png|woff|woff2|ttf|svg|eot|webp|avif)$ {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /_next/static {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    location /studio {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINXEOF

        # Reiniciar Nginx
        docker compose -f docker-compose.prod.yml restart nginx
        
        # Iniciar certbot para renovação automática
        docker compose -f docker-compose.prod.yml up -d certbot
        
        echo -e "${GREEN}HTTPS configurado com sucesso!${NC}"
    else
        echo -e "${RED}Erro ao obter certificado${NC}"
    fi
}

# ============================================
# 4. Renovar certificado SSL
# ============================================
renew_ssl() {
    echo -e "\n${YELLOW}[Renovando Certificado SSL]${NC}"
    
    cd "$APP_DIR"
    
    docker compose -f docker-compose.prod.yml run --rm certbot renew
    docker compose -f docker-compose.prod.yml restart nginx
    
    echo -e "${GREEN}Certificado renovado!${NC}"
}

# ============================================
# 5. Ver logs
# ============================================
view_logs() {
    echo -e "\n${YELLOW}[Logs]${NC}"
    echo "1) Logs da aplicação"
    echo "2) Logs do Nginx"
    echo "3) Todos os logs"
    read -p "Opção: " log_option
    
    cd "$APP_DIR"
    
    case $log_option in
        1)
            docker compose -f docker-compose.prod.yml logs -f app
            ;;
        2)
            docker compose -f docker-compose.prod.yml logs -f nginx
            ;;
        3)
            docker compose -f docker-compose.prod.yml logs -f
            ;;
        *)
            echo -e "${RED}Opção inválida${NC}"
            ;;
    esac
}

# ============================================
# 6. Reiniciar serviços
# ============================================
restart_services() {
    echo -e "\n${YELLOW}[Reiniciando Serviços]${NC}"
    
    cd "$APP_DIR"
    docker compose -f docker-compose.prod.yml restart
    
    echo -e "${GREEN}Serviços reiniciados!${NC}"
}

# ============================================
# 7. Parar serviços
# ============================================
stop_services() {
    echo -e "\n${YELLOW}[Parando Serviços]${NC}"
    
    cd "$APP_DIR"
    docker compose -f docker-compose.prod.yml down
    
    echo -e "${GREEN}Serviços parados!${NC}"
}

# ============================================
# 8. Status dos containers
# ============================================
show_status() {
    echo -e "\n${YELLOW}[Status dos Containers]${NC}"
    
    cd "$APP_DIR"
    docker compose -f docker-compose.prod.yml ps
    
    echo -e "\n${BLUE}Uso de recursos:${NC}"
    docker stats --no-stream
}

# ============================================
# 9. Backup
# ============================================
backup() {
    echo -e "\n${YELLOW}[Backup]${NC}"
    
    BACKUP_DIR="$APP_DIR/backups"
    BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
    
    cd "$APP_DIR"
    
    # Backup dos certificados e configurações
    tar -czvf "$BACKUP_DIR/$BACKUP_FILE" \
        --exclude='node_modules' \
        --exclude='.next' \
        --exclude='backups' \
        .
    
    echo -e "${GREEN}Backup criado: $BACKUP_DIR/$BACKUP_FILE${NC}"
    
    # Manter apenas últimos 5 backups
    ls -t $BACKUP_DIR/backup_*.tar.gz | tail -n +6 | xargs -r rm
}

# ============================================
# Loop principal
# ============================================
main() {
    while true; do
        show_menu
        case $option in
            1) deploy_full ;;
            2) update_app ;;
            3) get_ssl ;;
            4) renew_ssl ;;
            5) view_logs ;;
            6) restart_services ;;
            7) stop_services ;;
            8) show_status ;;
            9) backup ;;
            0) 
                echo -e "${GREEN}Até logo!${NC}"
                exit 0 
                ;;
            *)
                echo -e "${RED}Opção inválida${NC}"
                ;;
        esac
    done
}

# Executar
main
