# Olhos Secos Caratinga

Site informativo especializado em tratamento de olho seco em Caratinga/MG, desenvolvido pela Clínica Saraiva Vision.

## 🎯 Visão Geral

Site Next.js 15 com Sanity CMS integrado, focado em SEO local, educação médica e autoridade (E-E-A-T) para pacientes com síndrome do olho seco.

## 🚀 Tecnologias

- **Framework**: Next.js 15.1.3 (App Router)
- **React**: 19.0.0
- **CMS**: Sanity 3.72.1
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.7.2
- **Package Manager**: pnpm 9.15.2
- **Testing**: Jest + React Testing Library + Playwright

## 📋 Pré-requisitos

- Node.js 20.x ou superior
- pnpm 9.x (recomendado) ou npm/yarn
- Conta Sanity.io (para CMS)

## 🛠️ Instalação

### 1. Clonar o Repositório

\`\`\`bash
git clone <repository-url>
cd olhosecocaratinga.com
\`\`\`

### 2. Instalar Dependências

\`\`\`bash
pnpm install
\`\`\`

### 3. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo e preencha as variáveis:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edite \`.env.local\` com suas credenciais Sanity.

### 4. Iniciar Servidor de Desenvolvimento

\`\`\`bash
pnpm dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Scripts Disponíveis

### Desenvolvimento

\`\`\`bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm start        # Inicia servidor de produção
\`\`\`

### Qualidade de Código

\`\`\`bash
pnpm lint         # Verifica problemas ESLint
pnpm lint:fix     # Corrige problemas ESLint automaticamente
pnpm format       # Formata código com Prettier
pnpm format:check # Verifica formatação
\`\`\`

### Testes

\`\`\`bash
pnpm test              # Executa testes unitários
pnpm test:watch        # Modo watch (desenvolvimento)
pnpm test:coverage     # Testes com relatório de cobertura
pnpm test:e2e          # Testes E2E com Playwright
pnpm test:e2e:ui       # Testes E2E em modo UI
pnpm test:all          # Todos os testes (unit + E2E)
\`\`\`

### Sanity CMS

\`\`\`bash
pnpm seed:posts        # Importa conteúdo inicial (6 artigos sobre olho seco)
\`\`\`

## 🧪 Testes

Consulte [TESTING.md](./TESTING.md) para documentação completa.

### Cobertura de Testes Atual

- **Componentes**: PostCard, VideoCard
- **API Routes**: Revalidation webhook
- **E2E**: Homepage, Blog, Videos, SEO, Accessibility

## 📚 Documentação Adicional

- [TESTING.md](./TESTING.md) - Documentação de testes
- [SANITY_INTEGRATION.md](./docs/SANITY_INTEGRATION.md) - Integração Sanity CMS e importação de conteúdo
- [CLAUDE.md](./CLAUDE.md) - Guia para Claude Code

## 📄 Licença

Este projeto é propriedade da **Saraiva Vision Care LTDA** (CNPJ: 53.864.119/0001-79).

---

**Dr. Philipe Saraiva Cruz**
CRM-MG 69.870 | Médico Oftalmologista
