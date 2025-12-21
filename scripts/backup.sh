#!/bin/bash
# ============================================
# Script de Backup Automático
# Executar via crontab
# ============================================

set -e

# Configuração
APP_DIR="/opt/olhosecocaratinga"
BACKUP_DIR="$APP_DIR/backups"
REMOTE_BACKUP="" # Opcional: s3://bucket/path ou user@host:/path
RETENTION_DAYS=7
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_$DATE.tar.gz"

# Criar diretório de backup se não existir
mkdir -p "$BACKUP_DIR"

# Criar backup
echo "Criando backup: $BACKUP_FILE"
cd "$APP_DIR"

tar -czvf "$BACKUP_DIR/$BACKUP_FILE" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='backups' \
    --exclude='.git' \
    .env \
    certbot/conf \
    nginx

# Enviar para destino remoto (opcional)
if [ -n "$REMOTE_BACKUP" ]; then
    echo "Enviando para $REMOTE_BACKUP"
    
    if [[ "$REMOTE_BACKUP" == s3://* ]]; then
        # AWS S3
        aws s3 cp "$BACKUP_DIR/$BACKUP_FILE" "$REMOTE_BACKUP/"
    else
        # SCP/RSYNC
        rsync -avz "$BACKUP_DIR/$BACKUP_FILE" "$REMOTE_BACKUP/"
    fi
fi

# Limpar backups antigos
echo "Removendo backups com mais de $RETENTION_DAYS dias"
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete

# Listar backups existentes
echo "Backups disponíveis:"
ls -lh "$BACKUP_DIR"

echo "Backup concluído: $BACKUP_FILE"
