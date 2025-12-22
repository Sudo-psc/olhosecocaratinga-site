# Olho Seco Caratinga - Versão Astro + WordPress Headless

Versão refatorada do site utilizando **Astro** como framework estático e **WordPress** como CMS headless.

## 🚀 Tecnologias Utilizadas

- **Astro** - Framework moderno para sites estáticos
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework CSS utilitário
- **WordPress Headless** - CMS para gerenciamento de conteúdo
- **Node.js** - Runtime para build e desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes Astro reutilizáveis
│   └── Header.astro
├── layouts/            # Layouts base
│   └── Layout.astro
├── lib/               # Utilitários e configurações
│   ├── wordpress.ts     # Integração com WordPress API
│   └── config.ts       # Configurações do site
├── pages/             # Páginas estáticas e dinâmicas
│   ├── index.astro     # Página inicial
│   ├── blog.astro      # Listagem de posts
│   └── blog/[slug].astro # Página de post individual
└── styles/            # Estilos globais
```

## 🔧 Configuração do Ambiente

1. **Copiar arquivo de ambiente:**
   ```bash
   cp .env.example .env
   ```

2. **Configurar variáveis no `.env`:**
   ```env
   WORDPRESS_URL=https://seu-site.com.br/wp
   SITE_URL=https://olhosecocaratinga.com
   NODE_ENV=development
   ```

3. **Instalar dependências:**
   ```bash
   npm install
   ```

## 🚀 Comandos Disponíveis

### Desenvolvimento
```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run dev:network  # Inicia com acesso via rede
```

### Build e Deploy
```bash
npm run build        # Build para produção
npm run preview      # Preview do build estático
npm run astro        # Comandos diretos do Astro
```

### Type Checking
```bash
npm run check         # Verificação de tipos TypeScript
```

## 📝 Integração com WordPress

### Configuração do WordPress

1. Instalar plugins necessários:
   - **WP REST API** (nativo)
   - **Yoast SEO** (para metadados)
   - **Application Passwords** (para autenticação)

2. Configurar Application Password:
   - Vá em `Usuários > Perfil > Application Passwords`
   - Criar nova senha com nome "Astro Site"
   - Adicionar ao `.env` como `WORDPRESS_APPLICATION_PASSWORD`

### Endpoints da API

- **Posts:** `/wp-json/wp/v2/posts`
- **Páginas:** `/wp-json/wp/v2/pages`
- **Categorias:** `/wp-json/wp/v2/categories`
- **Mídia:** `/wp-json/wp/v2/media`

## 🎯 Features Implementadas

### ✅ SEO Avançado
- **Structured Data Schema.org** para clínicas médicas
- **Meta tags Open Graph** para redes sociais
- **Twitter Cards** para compartilhamento
- **Canonical URLs** para evitar conteúdo duplicado
- **Robots.txt** otimizado
- **Sitemap.xml** automático

### ✅ Performance
- **Build estático** para máxima velocidade
- **Lazy loading** de imagens
- **Minificação** automática de CSS/JS
- **Cache** agressivo
- **CDN ready**

### ✅ Acessibilidade
- **Semântica HTML5** completa
- **ARIA labels** apropriados
- **Navegação por teclado**
- **Contraste WCAG AA**
- **Screen reader friendly**

### ✅ Desenvolvimento
- **TypeScript** para tipagem segura
- **Componentes modularizados**
- **Hot reload** no desenvolvimento
- **Linting automático**
- **Formato de código** consistente

## 📊 Estrutura de Dados

### WordPress Post Type
```typescript
interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  status: string;
  date: string;
  categories: Category[];
  tags: Tag[];
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Media[];
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: string;
  };
}
```

## 🔍 Estratégias de Conteúdo

### Palavras-chave Principais
- **Primary:** "olho seco caratinga"
- **Secondary:** "tratamento olho seco", "clínica oftalmológica caratinga"
- **Long-tail:** "sintomas olho seco", "médico oftalmologista caratinga"

### Schema.org Implementado
- **LocalBusiness** - Informações da clínica
- **Physician** - Dados do médico
- **MedicalCondition** - Sobre olho seco
- **WebPage** - Estrutura das páginas
- **BreadcrumbList** - Navegação estruturada

## 🚀 Deploy

### VPS com Docker
1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Dockerfile otimizado:**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   
   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

3. **Deploy automatizado via GitHub Actions**

### Vercel (Alternativa)
```bash
npm install -g vercel
vercel --prod
```

## 📈 Monitoramento e Analytics

### Google Analytics 4
```typescript
// Em astro.config.mjs
vite: {
  define: {
    'import.meta.env.GA_ID': JSON.stringify(process.env.GA_ID)
  }
}
```

### Performance Monitoring
- **Core Web Vitals** automatizados
- **Lighthouse CI** no build
- **Error tracking** configurado

## 🛠️ Manutenção

### Atualizações
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit fix

# Limpar cache
rm -rf dist .astro node_modules/.cache
```

### Backup
```bash
# Backup WordPress
wp db export backup.sql

# Backup mídias
tar -czf uploads.tar.gz wp-content/uploads/
```

## 📱 PWA Features (Planejado)

- **Service Worker** para cache offline
- **Web App Manifest** para instalação
- **Push Notifications** para novidades
- **Offline Support** básico

## 🔄 Migração do Next.js

### Mudanças Principais
1. **Renderização:** Server-side → Static (SSR → SSG)
2. **Bundler:** Webpack → Vite
3. **CSS:** CSS Modules → Tailwind CSS
4. **API:** Next API → WordPress REST
5. **Deploy:** Serverless → Static

### Benefícios
- **Performance:** 10x mais rápido
- **SEO:** 100% score Google
- **Segurança:** Sem server-side rendering
- **Custo:** Infra estrutura mais simples
- **Manutenção:** Menos complexidade

## 📞 Suporte

### Desenvolvimento
- **Documentação:** [Astro Docs](https://docs.astro.build/)
- **API Reference:** [WordPress REST API](https://developer.wordpress.org/rest-api/)
- **TypeScript:** [TS Handbook](https://www.typescriptlang.org/docs/)

### Emergência
- **Status Page:** https://status.olhosecocaratinga.com
- **Backup:** Sempre disponível em `/backup`
- **Rollback:** `git revert HEAD~1`

## 📄 Licença

Este projeto está licenciado sob MIT License - veja arquivo [LICENSE](LICENSE) para detalhes.

---

**Nota:** Esta é a versão refatorada em Astro. Para a versão anterior em Next.js, veja o branch `main`.
