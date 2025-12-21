#!/bin/bash
# ============================================
# Script de Deploy Rápido (CI/CD)
# Site: olhosecocaratinga.com.br
# ============================================

set -e

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}=== Deploy Rápido ===${NC}"

cd "$APP_DIR"

# Verificar .env
if [ ! -f ".env" ]; then
    echo -e "${RED}Erro: .env não encontrado${NC}"
    exit 1
fi

# Pull das mudanças
if [ -d ".git" ]; then
    echo -e "${YELLOW}Baixando atualizações...${NC}"
    git pull origin main
fi

# Build
echo -e "${YELLOW}Construindo imagem...${NC}"
docker compose -f docker-compose.prod.yml build app

# Deploy com zero downtime
echo -e "${YELLOW}Atualizando containers...${NC}"
docker compose -f docker-compose.prod.yml up -d --force-recreate --no-deps app

# Limpeza
echo -e "${YELLOW}Limpando imagens antigas...${NC}"
docker image prune -f

# Health check
echo -e "${YELLOW}Verificando saúde da aplicação...${NC}"
sleep 5

HEALTH=$(docker compose -f docker-compose.prod.yml exec -T app wget -qO- http://localhost:3000/api/health 2>/dev/null || echo "error")

if [[ "$HEALTH" == *"ok"* ]]; then
    echo -e "${GREEN}✓ Deploy concluído com sucesso!${NC}"
else
    echo -e "${RED}⚠ Aplicação pode não estar saudável. Verifique os logs.${NC}"
    docker compose -f docker-compose.prod.yml logs --tail=50 app
fi
