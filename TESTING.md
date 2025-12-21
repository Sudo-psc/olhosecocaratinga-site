# Documentação de Testes - Olhosecocaratinga.com.br

Documentação completa da estratégia e implementação de testes para o site Olhos Secos Caratinga.

## Índice

1. [Visão Geral](#visão-geral)
2. [Configuração Inicial](#configuração-inicial)
3. [Tipos de Testes](#tipos-de-testes)
4. [Executando Testes](#executando-testes)
5. [Estrutura de Arquivos](#estrutura-de-arquivos)
6. [Cobertura de Testes](#cobertura-de-testes)
7. [Boas Práticas](#boas-práticas)
8. [CI/CD](#cicd)

---

## Visão Geral

O projeto utiliza uma estratégia de testes em três camadas:

1. **Testes Unitários** - Jest + React Testing Library
2. **Testes de Integração** - Jest para API routes
3. **Testes E2E** - Playwright para fluxos completos

### Objetivos

- Garantir qualidade do código
- Prevenir regressões
- Validar SEO e acessibilidade
- Documentar comportamento esperado
- Facilitar refatorações seguras

---

## Configuração Inicial

### 1. Instalar Dependências

```bash
pnpm install
```

Isso instalará todas as dependências de teste automaticamente:
- `@testing-library/react` - Testes de componentes React
- `@testing-library/jest-dom` - Matchers customizados para DOM
- `@testing-library/user-event` - Simulação de interações de usuário
- `jest` - Framework de testes
- `jest-environment-jsdom` - Ambiente DOM para Jest
- `@playwright/test` - Testes E2E
- `@types/jest` - Tipagens TypeScript

### 2. Configurar Playwright (primeira vez)

```bash
pnpm exec playwright install
```

Isso instalará os navegadores necessários (Chromium, Firefox, WebKit).

---

## Tipos de Testes

### 1. Testes Unitários

**Propósito**: Testar componentes e funções isoladamente

**Localização**: `src/components/__tests__/`

**Exemplo**:
```typescript
// src/components/__tests__/post-card.test.tsx
import { render, screen } from '@testing-library/react'
import PostCard from '../post-card'

test('renders post title', () => {
  render(<PostCard post={mockPost} />)
  expect(screen.getByText('Título do Post')).toBeInTheDocument()
})
```

**O que testar**:
- ✅ Renderização de componentes
- ✅ Props e estados
- ✅ Interações básicas
- ✅ Formatação de dados (datas, durações)
- ✅ Tratamento de dados ausentes

**O que NÃO testar**:
- ❌ Detalhes de implementação
- ❌ Estilos CSS (use visual regression separadamente)
- ❌ Lógica de terceiros (Next.js, Sanity)

### 2. Testes de Integração

**Propósito**: Testar API routes e integrações

**Localização**: `src/app/api/**/__tests__/`

**Status Atual**: ⚠️ API route tests requerem configuração avançada

**Nota**: Testar API routes do Next.js 15 com App Router requer configuração adicional para mockar `Request`/`Response` do Web Standards e `NextRequest`/`NextResponse`. Considere usar testes E2E com Playwright para validar endpoints de API em ambiente real.

**Exemplo (estrutura futura)**:
```typescript
// src/app/api/revalidate/__tests__/route.test.ts
test('revalidates posts tags when post is updated', async () => {
  const response = await POST(request)
  expect(response.status).toBe(200)
  expect(revalidateTag).toHaveBeenCalledWith('posts')
})
```

**O que testar**:
- ✅ Status HTTP corretos
- ✅ Validação de entrada
- ✅ Tratamento de erros
- ✅ Autenticação/autorização
- ✅ Side effects (revalidation, webhooks)

### 3. Testes E2E (End-to-End)

**Propósito**: Testar fluxos completos do usuário

**Localização**: `e2e/`

**Exemplo**:
```typescript
// e2e/homepage.spec.ts
test('navigates to blog page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Blog' }).click()
  await expect(page).toHaveURL('/blog')
})
```

**O que testar**:
- ✅ Navegação entre páginas
- ✅ Formulários e CTAs
- ✅ SEO (meta tags, structured data)
- ✅ Acessibilidade (WCAG)
- ✅ Responsividade
- ✅ Performance (Core Web Vitals)

---

## Executando Testes

### Testes Unitários e de Integração

```bash
# Executar todos os testes
pnpm test

# Modo watch (desenvolvimento)
pnpm test:watch

# Com cobertura
pnpm test:coverage
```

### Testes E2E

```bash
# Executar todos os testes E2E
pnpm test:e2e

# Modo UI (visualizar execução)
pnpm test:e2e:ui

# Modo headed (ver navegador)
pnpm test:e2e:headed

# Teste específico
pnpm test:e2e e2e/homepage.spec.ts

# Apenas um navegador
pnpm test:e2e --project=chromium
```

### Executar Tudo

```bash
# Todos os testes (unit + E2E)
pnpm test:all
```

---

## Estrutura de Arquivos

```
olhosecocaratinga.com/
├── e2e/                              # Testes E2E (Playwright)
│   ├── accessibility.spec.ts         # Testes de acessibilidade
│   ├── blog.spec.ts                  # Fluxo de blog
│   ├── homepage.spec.ts              # Homepage
│   ├── seo.spec.ts                   # SEO e metadados
│   └── videos.spec.ts                # Fluxo de vídeos
├── src/
│   ├── app/
│   │   └── api/
│   │       └── revalidate/
│   │           └── __tests__/
│   │               └── route.test.ts # Testes de API
│   └── components/
│       └── __tests__/
│           ├── post-card.test.tsx    # Testes de componente
│           └── video-card.test.tsx   # Testes de componente
├── jest.config.ts                    # Configuração Jest
├── jest.setup.ts                     # Setup global Jest
├── playwright.config.ts              # Configuração Playwright
└── TESTING.md                        # Esta documentação
```

---

## Cobertura de Testes

### Metas de Cobertura

```javascript
// jest.config.ts
coverageThresholds: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70,
  },
}
```

### Verificar Cobertura

```bash
pnpm test:coverage
```

Relatório gerado em: `coverage/lcov-report/index.html`

### Arquivos Excluídos

- `**/*.d.ts` - Declarações de tipo
- `**/*.stories.{js,jsx,ts,tsx}` - Storybook
- `**/__tests__/**` - Próprios testes
- `**/layout.tsx` - Layouts Next.js
- `**/not-found.tsx` - Páginas de erro

---

## Boas Práticas

### 1. Nomenclatura de Testes

```typescript
// ✅ BOM - Descritivo e específico
test('displays error message when email is invalid', () => {})

// ❌ RUIM - Vago e genérico
test('validates email', () => {})
```

### 2. Arrange-Act-Assert (AAA)

```typescript
test('formats duration correctly', () => {
  // Arrange
  const video = { duration: 125 }

  // Act
  render(<VideoCard video={video} />)

  // Assert
  expect(screen.getByText('2:05')).toBeInTheDocument()
})
```

### 3. Use Data-Testid com Moderação

```typescript
// ✅ MELHOR - Use roles semânticos
screen.getByRole('button', { name: 'Agendar Consulta' })

// 🟡 OK - Quando role não é suficiente
screen.getByTestId('cta-whatsapp')

// ❌ EVITE - Testa implementação, não comportamento
screen.getByClassName('btn-primary')
```

### 4. Mock Apenas o Necessário

```typescript
// ✅ BOM - Mock específico
jest.mock('@/sanity/client', () => ({
  urlFor: jest.fn(() => ({ url: jest.fn() }))
}))

// ❌ RUIM - Mock excessivo
jest.mock('next/image')
jest.mock('next/link')
jest.mock('@/sanity/client')
jest.mock('@/sanity/queries')
```

### 5. Testes Assíncronos

```typescript
// ✅ BOM - await
test('loads posts', async () => {
  render(<BlogPage />)
  const posts = await screen.findByRole('article')
  expect(posts).toBeInTheDocument()
})

// ❌ RUIM - sem await
test('loads posts', () => {
  render(<BlogPage />)
  const posts = screen.getByRole('article') // Pode falhar
})
```

### 6. Testes Independentes

```typescript
// ✅ BOM - Cada teste é isolado
describe('PostCard', () => {
  test('renders title', () => {
    const post = createMockPost()
    render(<PostCard post={post} />)
    expect(screen.getByText(post.title)).toBeInTheDocument()
  })

  test('renders excerpt', () => {
    const post = createMockPost()
    render(<PostCard post={post} />)
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
  })
})

// ❌ RUIM - Testes dependentes
let post
beforeAll(() => {
  post = createMockPost()
  render(<PostCard post={post} />)
})

test('renders title', () => {
  expect(screen.getByText(post.title)).toBeInTheDocument()
})
```

---

## Estratégia de Testes por Tipo de Conteúdo

### Componentes de UI

**Prioridade**: Alta

**O que testar**:
- Renderização com diferentes props
- Estados visuais (loading, error, empty)
- Interações do usuário
- Acessibilidade básica

**Exemplo**: `PostCard`, `VideoCard`, `Header`, `Footer`

### API Routes

**Prioridade**: Alta

**O que testar**:
- Autenticação/autorização
- Validação de entrada
- Status codes
- Error handling
- Side effects (cache, webhooks)

**Exemplo**: `/api/revalidate`, `/api/draft/*`

### Páginas (E2E)

**Prioridade**: Média-Alta

**O que testar**:
- Navegação
- SEO (meta tags)
- Carregamento de conteúdo
- Formulários
- CTAs

**Exemplo**: Homepage, Blog, Videos

### Utilidades e Helpers

**Prioridade**: Média

**O que testar**:
- Funções puras
- Formatadores (data, duração)
- Validadores

**Exemplo**: `urlFor`, `extractYouTubeId`, `formatDate`

---

## CI/CD

### GitHub Actions (Exemplo)

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Run unit tests
        run: pnpm test:coverage

      - name: Run E2E tests
        run: pnpm test:e2e

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### Pre-commit Hook (Opcional)

```bash
# .husky/pre-commit
#!/bin/sh
pnpm test --bail --findRelatedTests
```

---

## Troubleshooting

### Erro: "Cannot find module '@/...'"

**Solução**: Verificar `moduleNameMapper` em `jest.config.ts`

```typescript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
}
```

### Erro: "ReferenceError: document is not defined"

**Solução**: Verificar `testEnvironment` em `jest.config.ts`

```typescript
testEnvironment: 'jsdom',
```

### Playwright: "Timeout waiting for selector"

**Solução**: Adicionar `waitForLoadState` ou aumentar timeout

```typescript
await page.waitForLoadState('networkidle')
// ou
await page.getByRole('button').click({ timeout: 10000 })
```

### Testes lentos

**Soluções**:
1. Usar `test.concurrent` para paralelizar
2. Mockar chamadas de rede
3. Reduzir escopo de testes E2E
4. Usar `--maxWorkers` para controlar paralelismo

---

## Próximos Passos

### Melhorias Futuras

- [ ] Visual regression testing (Percy, Chromatic)
- [ ] Performance testing (Lighthouse CI)
- [ ] Testes de carga (k6, Artillery)
- [ ] Testes de contrato (API com Sanity)
- [ ] Mutation testing (Stryker)
- [ ] Testes de segurança (OWASP ZAP)

### Extensões

- [ ] Testes de formulários de contato
- [ ] Testes de newsletter signup
- [ ] Testes de busca/filtros
- [ ] Testes de comentários (se implementado)
- [ ] Testes de analytics tracking

---

## Recursos Adicionais

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)
- [Web Accessibility Testing](https://www.w3.org/WAI/test-evaluate/)

---

## Suporte

Para questões sobre testes:

1. Verificar esta documentação
2. Consultar exemplos em `__tests__/` e `e2e/`
3. Revisar mensagens de erro com atenção
4. Pesquisar na documentação oficial das ferramentas

**Última atualização**: 21/12/2024
