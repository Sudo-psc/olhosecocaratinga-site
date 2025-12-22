# Olhos Secos Caratinga

Site informativo especializado em tratamento de olho seco em Caratinga/MG, desenvolvido pela Clínica Saraiva Vision.

## 🎯 Visão Geral

Este projeto foi refatorado para utilizar **Astro** como framework frontend de alta performance e **WordPress Headless** como sistema de gerenciamento de conteúdo (CMS). O objetivo é garantir velocidade extrema (Core Web Vitals), excelente SEO e facilidade de edição de conteúdo.

## 🚀 Tecnologias

- **Framework**: [Astro](https://astro.build) (v4)
- **CMS**: WordPress (Headless via REST API)
- **Styling**: Tailwind CSS
- **Deploy**: Cloudflare Pages / Vercel / Netlify (Suporte a SSR/Hybrid)

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Instância WordPress (pode ser local, hospedada ou WordPress.com)

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

Edite o arquivo `.env` e defina a URL da sua API WordPress:

```env
WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
```

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:4321](http://localhost:4321) no navegador.

## 🏗️ Estrutura do Projeto

- `src/pages`: Rotas do site (Início, Blog, Postagem única).
- `src/components`: Componentes reutilizáveis (Header, Cards).
- `src/layouts`: Layout principal (HTML structure, SEO tags).
- `src/lib/wordpress.ts`: Cliente de conexão com a API do WordPress.

## 📝 Scripts

- `npm run dev`: Inicia o servidor local.
- `npm run build`: Gera o build de produção (SSR/Hybrid).
- `npm run preview`: Visualiza o build localmente.

## 📄 Licença

Propriedade da **Saraiva Vision Care LTDA**.
