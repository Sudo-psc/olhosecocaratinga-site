#!/bin/bash
# ============================================
# Script de Configuração Inicial do VPS
# Site: olhosecocaratinga.com.br
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
APP_DIR="/opt/olhosecocaratinga"

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Setup VPS - olhosecocaratinga.com.br${NC}"
echo -e "${BLUE}============================================${NC}"

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}Por favor, execute como root (sudo)${NC}"
    exit 1
fi

# Função para verificar se comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# ============================================
# 1. Atualizar Sistema
# ============================================
echo -e "\n${YELLOW}[1/8] Atualizando sistema...${NC}"
apt update && apt upgrade -y

# ============================================
# 2. Instalar dependências básicas
# ============================================
echo -e "\n${YELLOW}[2/8] Instalando dependências...${NC}"
apt install -y \
    curl \
    wget \
    git \
    vim \
    htop \
    ufw \
    fail2ban \
    unzip \
    ca-certificates \
    gnupg \
    lsb-release

# ============================================
# 3. Instalar Docker
# ============================================
echo -e "\n${YELLOW}[3/8] Instalando Docker...${NC}"
if command_exists docker; then
    echo -e "${GREEN}Docker já está instalado${NC}"
else
    # Adicionar repositório oficial do Docker
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg

    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      tee /etc/apt/sources.list.d/docker.list > /dev/null

    apt update
    apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    # Iniciar e habilitar Docker
    systemctl start docker
    systemctl enable docker

    echo -e "${GREEN}Docker instalado com sucesso!${NC}"
fi

# Verificar versão
docker --version
docker compose version

# ============================================
# 4. Configurar Firewall (UFW)
# ============================================
echo -e "\n${YELLOW}[4/8] Configurando firewall...${NC}"
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status

# ============================================
# 5. Configurar Fail2Ban
# ============================================
echo -e "\n${YELLOW}[5/8] Configurando Fail2Ban...${NC}"
cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/*error.log

[nginx-botsearch]
enabled = true
port = http,https
logpath = /var/log/nginx/*access.log
EOF

systemctl restart fail2ban
systemctl enable fail2ban

# ============================================
# 6. Criar estrutura de diretórios
# ============================================
echo -e "\n${YELLOW}[6/8] Criando estrutura de diretórios...${NC}"
mkdir -p $APP_DIR
mkdir -p $APP_DIR/certbot/www
mkdir -p $APP_DIR/certbot/conf
mkdir -p $APP_DIR/nginx/conf.d
mkdir -p $APP_DIR/backups
mkdir -p $APP_DIR/logs

# ============================================
# 7. Criar usuário para deploy
# ============================================
echo -e "\n${YELLOW}[7/8] Configurando usuário deploy...${NC}"
if id "deploy" &>/dev/null; then
    echo -e "${GREEN}Usuário deploy já existe${NC}"
else
    useradd -m -s /bin/bash deploy
    usermod -aG docker deploy
    echo -e "${GREEN}Usuário deploy criado e adicionado ao grupo docker${NC}"
fi

# Dar permissões
chown -R deploy:deploy $APP_DIR

# ============================================
# 8. Configurar swap (se não existir)
# ============================================
echo -e "\n${YELLOW}[8/8] Configurando swap...${NC}"
if [ ! -f /swapfile ]; then
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
    echo -e "${GREEN}Swap de 2GB criado${NC}"
else
    echo -e "${GREEN}Swap já existe${NC}"
fi

# ============================================
# Resumo
# ============================================
echo -e "\n${GREEN}============================================${NC}"
echo -e "${GREEN}  Setup VPS Concluído!${NC}"
echo -e "${GREEN}============================================${NC}"
echo -e ""
echo -e "${BLUE}Próximos passos:${NC}"
echo -e "1. Copiar o código para: ${YELLOW}$APP_DIR${NC}"
echo -e "2. Configurar variáveis de ambiente: ${YELLOW}$APP_DIR/.env${NC}"
echo -e "3. Executar: ${YELLOW}./scripts/deploy.sh${NC}"
echo -e ""
echo -e "${BLUE}Informações úteis:${NC}"
echo -e "  - Diretório da aplicação: $APP_DIR"
echo -e "  - Usuário de deploy: deploy"
echo -e "  - Logs: $APP_DIR/logs"
echo -e "  - Backups: $APP_DIR/backups"
echo -e ""
