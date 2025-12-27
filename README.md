# Olhos Secos Caratinga

Site informativo especializado em tratamento de olho seco em Caratinga/MG, desenvolvido pela Clínica Saraiva Vision.

## 🎯 Visão Geral

Este projeto utiliza **Astro 4** como framework frontend de alta performance e **Sanity CMS** como sistema de gerenciamento de conteúdo headless. O objetivo é garantir velocidade extrema (Core Web Vitals), excelente SEO e facilidade de edição de conteúdo.

## 🚀 Tecnologias

- **Framework**: [Astro](https://astro.build) v4.16
- **CMS**: [Sanity](https://www.sanity.io) v7 (Headless CMS)
- **Styling**: Tailwind CSS v3.4
- **Package Manager**: pnpm v9.15
- **Deploy**: Cloudflare Pages / Vercel / Netlify (Suporte SSR/Hybrid)

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- pnpm 9.x ou superior (recomendado) ou npm
- Conta no [Sanity.io](https://www.sanity.io) para gerenciar o conteúdo

## 🛠️ Instalação

### 1. Clonar o Repositório

```bash
git clone <repository-url>
cd olhosecocaratinga-site
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as variáveis do Sanity:

```env
PUBLIC_SANITY_PROJECT_ID=seu_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

> **Nota**: Obtenha o `PROJECT_ID` em [sanity.io/manage](https://www.sanity.io/manage)

### 4. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:4321](http://localhost:4321) no navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── pages/              # Rotas do site (Astro file-based routing)
│   ├── index.astro    # Página inicial
│   ├── olho-seco.astro # Página sobre olho seco
│   ├── blog/          # Blog e posts
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── videos/        # Vídeos educativos
├── components/        # Componentes reutilizáveis
│   ├── Header.astro
│   ├── Footer.astro
│   └── VideoCard.astro
├── layouts/           # Layouts principais
│   └── Layout.astro   # Layout base com SEO
└── lib/              # Utilitários e configurações
    ├── sanity.ts     # Cliente Sanity e helpers
    └── config.ts     # Configurações do site
```

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Gera o build de produção (com verificação de tipos)
- `pnpm preview` - Visualiza o build localmente
- `pnpm lint` - Executa o linter ESLint
- `pnpm format` - Formata o código com Prettier

## 🎨 Sanity CMS

### Schemas Disponíveis

O projeto utiliza os seguintes content types no Sanity:

- **Post** - Artigos do blog com Portable Text
- **Video** - Vídeos educativos com transcrição
- **Author** - Autores do conteúdo
- **Category** - Categorias para posts
- **Site Settings** - Configurações globais do site

### Acessar o Sanity Studio

Para gerenciar o conteúdo, você pode:

1. Acessar diretamente em [sanity.io/manage](https://www.sanity.io/manage)
2. Ou configurar o Studio localmente (consulte a documentação do Sanity)

## 🌐 Deploy

### Opção 1: Vercel

```bash
vercel deploy
```

### Opção 2: Cloudflare Pages

1. Conecte seu repositório no Cloudflare Pages
2. Configure o comando de build: `pnpm build`
3. Configure o diretório de output: `dist`

### Opção 3: Netlify

```bash
netlify deploy --prod
```

## 🔧 Configuração Avançada

### Modo Híbrido (SSR + SSG)

O projeto está configurado para `output: 'hybrid'`, permitindo:

- **SSG** (Static Site Generation) por padrão
- **SSR** (Server Side Rendering) em rotas específicas com `export const prerender = false`

### Otimização de Imagens

O Astro otimiza automaticamente as imagens. Para imagens do Sanity, use o helper `urlFor()`:

```astro
---
import { urlFor } from '../lib/sanity';
---
<img src={urlFor(image).width(800).url()} alt="Descrição" />
```

## 📊 Performance

O projeto é otimizado para alcançar:

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Excelente
- **Bundle Size**: Mínimo (islands architecture)

## 📄 Licença

Propriedade da **Saraiva Vision Care LTDA**.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato:

- **Email**: contato@saraivavision.com.br
- **Telefone**: (33) 99860-1427
- **Endereço**: Rua Catarina Maria Passos, 97 - Santa Zita, Caratinga/MG
