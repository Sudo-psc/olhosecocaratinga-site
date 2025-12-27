# Olho Seco Caratinga

Site informativo especializado em tratamento de olho seco em Caratinga/MG, desenvolvido pela Clínica Saraiva Vision.

## 🎯 Visão Geral

Este projeto utiliza **Astro** como framework frontend de alta performance e **Sanity.io** como sistema de gerenciamento de conteúdo (CMS Headless). O objetivo é garantir velocidade extrema (Core Web Vitals), excelente SEO e flexibilidade de conteúdo.

## 🚀 Tecnologias

- **Framework**: [Astro](https://astro.build) (v4)
- **CMS**: [Sanity.io](https://www.sanity.io) (Headless)
- **Styling**: Tailwind CSS
- **Deploy**: Vercel / Netlify / Cloudflare Pages

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Acesso ao projeto no Sanity.io (Project ID e Dataset)

## 🛠️ Instalação

### 1. Clonar o Repositório

```bash
git clone <repository-url>
cd olhosecocaratinga.com
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as credenciais do Sanity:

```env
PUBLIC_SANITY_PROJECT_ID=seu_project_id
PUBLIC_SANITY_DATASET=production
# PUBLIC_SANITY_API_VERSION=2024-01-01 (Opcional, padrão no código)
```

> **Nota:** Você pode encontrar o `Project ID` no dashboard do Sanity em gerenciamento do projeto.

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:4321](http://localhost:4321) no navegador.

## 🏗️ Estrutura do Projeto

- `src/pages`: Rotas do site (Início, Blog, Páginas de conteúdo).
- `src/components`: Componentes reutilizáveis (Header, Footer, Cards).
- `src/layouts`: Layouts base (HTML structure, SEO tags).
- `src/lib/sanity.ts`: Cliente de conexão com a API do Sanity.

## 📝 Scripts

- `npm run dev`: Inicia o servidor local.
- `npm run build`: Gera o build de produção (Static/SSR).
- `npm run preview`: Visualiza o build localmente.
- `npm run astro`: CLI do Astro.

## 🔌 Sanity Integration

O conteúdo dinâmico (como o Blog e textos da página 'Olho Seco') é gerenciado pelo Sanity.

- **Schemas**: Os tipos de conteúdo (schemas) geralmente ficam no diretório do Studio (se monorepo) ou em um repositório separado, dependendo da configuração. Neste projeto, o cliente consome os dados via GROQ.
- **Fetching**: Veja `src/lib/sanity.ts` para configuração do cliente e exemplos de queries em `src/pages/blog/[slug].astro`.

## 📄 Licença

Propriedade da **Saraiva Vision Care LTDA**.
