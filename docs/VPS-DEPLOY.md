# 🚀 Deploy em VPS - olhosecocaratinga.com.br

Guia completo para deploy do site em um VPS (Virtual Private Server).

## 📋 Requisitos do Servidor

- **OS**: Ubuntu 22.04 LTS (recomendado)
- **RAM**: Mínimo 2GB (recomendado 4GB)
- **CPU**: Mínimo 1 vCPU (recomendado 2 vCPUs)
- **Disco**: Mínimo 20GB SSD
- **Domínio**: DNS apontando para o IP do servidor

### Provedores Recomendados
- DigitalOcean
- Vultr
- Linode
- Hostinger VPS
- Locaweb VPS

---

## 🔧 Configuração Inicial do VPS

### 1. Acesse o servidor via SSH

```bash
ssh root@SEU_IP_DO_SERVIDOR
```

### 2. Copie os arquivos do projeto

```bash
# Clonar repositório (se usando Git)
cd /opt
git clone https://github.com/seu-usuario/olhosecocaratinga.git

# OU copiar via SCP do seu computador
scp -r /caminho/local/olhosecocaratinga root@SEU_IP:/opt/
```

### 3. Execute o script de setup

```bash
cd /opt/olhosecocaratinga
chmod +x scripts/setup-vps.sh
sudo ./scripts/setup-vps.sh
```

Este script irá:
- ✅ Atualizar o sistema
- ✅ Instalar Docker e Docker Compose
- ✅ Configurar Firewall (UFW)
- ✅ Instalar e configurar Fail2Ban
- ✅ Criar estrutura de diretórios
- ✅ Criar usuário `deploy`
- ✅ Configurar swap

---

## 🔑 Configuração do DNS

No painel do seu provedor de domínio, configure:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | SEU_IP_VPS | 3600 |
| A | www | SEU_IP_VPS | 3600 |
| CNAME | www | olhosecocaratinga.com.br | 3600 |

**Aguarde a propagação do DNS (pode levar até 24h)**

Para verificar:
```bash
dig olhosecocaratinga.com.br +short
dig www.olhosecocaratinga.com.br +short
```

---

## ⚙️ Configuração de Variáveis de Ambiente

### 1. Copie o arquivo de exemplo

```bash
cp .env.production.example .env
```

### 2. Edite as variáveis

```bash
nano .env
```

Configure:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=seu_token_de_leitura
SANITY_REVALIDATE_SECRET=gere_um_secret_aleatorio
NEXT_PUBLIC_SITE_URL=https://olhosecocaratinga.com.br
NODE_ENV=production
```

### Gerar secrets aleatórios:
```bash
openssl rand -base64 32
```

---

## 🚀 Deploy

### 1. Dar permissão aos scripts

```bash
chmod +x scripts/deploy.sh
chmod +x scripts/quick-deploy.sh
```

### 2. Executar deploy

```bash
./scripts/deploy.sh
```

### Opções do menu de deploy:

1. **Deploy completo** - Primeira instalação
2. **Atualizar aplicação** - Updates subsequentes
3. **Obter certificado SSL** - Configurar HTTPS
4. **Renovar certificado SSL** - Renovar Let's Encrypt
5. **Ver logs** - Visualizar logs dos containers
6. **Reiniciar serviços** - Restart dos containers
7. **Parar serviços** - Parar tudo
8. **Status dos containers** - Ver status e uso de recursos
9. **Backup** - Criar backup

---

## 🔐 Configuração SSL (HTTPS)

### Passo a passo:

1. **Execute o deploy inicial** (opção 1)
2. **Aguarde o DNS propagar**
3. **Execute obter certificado SSL** (opção 3)

O script automaticamente:
- Obtém certificado Let's Encrypt
- Configura redirect HTTP → HTTPS
- Configura renovação automática

### Renovação automática

O Certbot é executado em um container que verifica e renova certificados automaticamente a cada 12 horas.

---

## 📊 Monitoramento

### Ver logs em tempo real:

```bash
# Todos os logs
docker compose -f docker-compose.prod.yml logs -f

# Apenas aplicação
docker compose -f docker-compose.prod.yml logs -f app

# Apenas Nginx
docker compose -f docker-compose.prod.yml logs -f nginx
```

### Status dos containers:

```bash
docker compose -f docker-compose.prod.yml ps
```

### Uso de recursos:

```bash
docker stats
```

### Health check:

```bash
curl https://olhosecocaratinga.com.br/api/health
```

---

## 🔄 Atualizações

### Deploy rápido (CI/CD)

```bash
./scripts/quick-deploy.sh
```

### Deploy manual

```bash
./scripts/deploy.sh
# Escolha opção 2 - Atualizar aplicação
```

---

## 🔧 Comandos Úteis

```bash
# Entrar no container da aplicação
docker compose -f docker-compose.prod.yml exec app sh

# Ver últimos logs
docker compose -f docker-compose.prod.yml logs --tail=100

# Rebuild forçado
docker compose -f docker-compose.prod.yml build --no-cache

# Limpar recursos não utilizados
docker system prune -a

# Ver uso de disco do Docker
docker system df
```

---

## 🆘 Troubleshooting

### Erro: "Address already in use"

```bash
# Ver processos usando a porta
sudo lsof -i :80
sudo lsof -i :443

# Parar processo
sudo kill -9 PID
```

### Erro: Certificado SSL

```bash
# Verificar logs do certbot
docker compose -f docker-compose.prod.yml logs certbot

# Forçar renovação
docker compose -f docker-compose.prod.yml run --rm certbot renew --force-renewal
```

### Container não inicia

```bash
# Ver logs detalhados
docker compose -f docker-compose.prod.yml logs app

# Verificar saúde
docker inspect olhosecocaratinga-app | grep -A 20 "Health"
```

### Aplicação lenta

```bash
# Verificar recursos
htop
docker stats

# Verificar logs de erro do Nginx
docker compose -f docker-compose.prod.yml exec nginx cat /var/log/nginx/error.log
```

---

## 📁 Estrutura de Arquivos no VPS

```
/opt/olhosecocaratinga/
├── .env                    # Variáveis de ambiente
├── docker-compose.prod.yml # Configuração Docker
├── Dockerfile             
├── nginx/
│   ├── nginx.conf          # Configuração principal
│   └── conf.d/
│       ├── default.conf    # Server block
│       └── ssl-params.conf # Parâmetros SSL
├── certbot/
│   ├── www/                # Challenge ACME
│   └── conf/               # Certificados SSL
├── scripts/
│   ├── setup-vps.sh        # Setup inicial
│   ├── deploy.sh           # Menu de deploy
│   └── quick-deploy.sh     # Deploy rápido
├── backups/                # Backups
└── logs/                   # Logs da aplicação
```

---

## 🔒 Segurança

### Firewall ativo (UFW)
- Porta 22 (SSH)
- Porta 80 (HTTP)
- Porta 443 (HTTPS)

### Fail2Ban configurado
- Proteção contra brute-force SSH
- Proteção contra ataques ao Nginx

### Headers de segurança
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security (HSTS)
- Content-Security-Policy

---

## 📞 Suporte

Em caso de problemas:
1. Verifique os logs
2. Verifique o status dos containers
3. Verifique a conectividade de rede
4. Entre em contato com o suporte técnico

---

## Checklist Pós-Deploy

- [ ] Site acessível via HTTPS
- [ ] Redirect HTTP → HTTPS funcionando
- [ ] Redirect www → non-www funcionando
- [ ] Health check respondendo
- [ ] Sanity Studio acessível em /studio
- [ ] Certificado SSL válido
- [ ] Logs sendo gerados corretamente
- [ ] Backups configurados
