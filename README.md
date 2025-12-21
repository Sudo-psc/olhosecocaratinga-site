# Olho Seco Caratinga

Site oficial da Olho Seco Caratinga - Clínica oftalmológica especializada no diagnóstico e tratamento de olho seco e outras doenças oculares.

## 🏥 Sobre a Clínica

A Olho Seco Caratinga é uma clínica especializada que oferece tratamento avançado para pacientes com olho seco, síndrome dos olhos secos e outras condições oculares relacionadas. Nossa equipe de oftalmologistas especializados está comprometida em proporcionar o melhor cuidado e qualidade de vida aos nossos pacientes.

## 🌐 Tecnologias Utilizadas

Este site foi desenvolvido com tecnologias modernas e performáticas:

- **[Next.js](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para melhor desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Sanity CMS](https://www.sanity.io/)** - Headless CMS para gestão de conteúdo
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para interfaces

## 🚀 Funcionalidades

- **Design Responsivo**: Experiência otimizada para desktop, tablet e mobile
- **Sistema de Blog**: Conteúdo educativo sobre saúde ocular
- **Galeria de Vídeos**: Vídeos informativos e tutoriais
- **Gestão de Conteúdo**: Painel administrativo via Sanity CMS
- **SEO Otimizado**: Estrutura semântica e meta tags adequadas
- **Performance**: Otimizações para carregamento rápido

## 📁 Estrutura do Projeto

```
olhosecocaratinga-site/
├── src/
│   ├── app/                 # Páginas e rotas da aplicação
│   │   ├── blog/           # Páginas do blog
│   │   ├── videos/         # Páginas de vídeos
│   │   ├── api/            # Rotas da API
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página inicial
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── post-card.tsx   # Card de posts do blog
│   │   ├── video-card.tsx  # Card de vídeos
│   │   └── portable-text.tsx # Renderizador de texto rico
│   ├── sanity/             # Configurações e tipos do Sanity
│   │   ├── schemas/        # Schemas de conteúdo
│   │   ├── client.ts       # Cliente Sanity
│   │   └── types.ts        # Tipos TypeScript
│   └── lib/                # Utilitários e funções auxiliares
├── public/                 # Arquivos estáticos
├── sanity.config.ts        # Configuração do Sanity
├── next.config.ts          # Configuração do Next.js
├── tailwind.config.ts      # Configuração do Tailwind
└── tsconfig.json           # Configuração do TypeScript
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta Sanity (para gestão de conteúdo)

### Passos para instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Sudo-psc/olhosecocaratinga-site.git
   cd olhosecocaratinga-site
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env.local
   ```
   
   Preencha as variáveis de ambiente com suas credenciais do Sanity e outras configurações.

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse o site:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Gestão de Conteúdo

O conteúdo do site é gerenciado através do [Sanity CMS](https://www.sanity.io/). Para acessar o painel administrativo:

1. Configure seu projeto Sanity
2. Execute `npm run sanity` para iniciar o studio local
3. Acesse [http://localhost:3333](http://localhost:3333)

### Tipos de Conteúdo

- **Posts**: Artigos do blog sobre saúde ocular
- **Vídeos**: Conteúdo em vídeo educativo
- **Autores**: Informações sobre os autores dos posts
- **Categorias**: Classificação dos conteúdos
- **Configurações do Site**: Informações gerais da clínica

## 🚀 Deploy

### Deploy Automático (Vercel)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático será feito a cada push para a branch principal

### Deploy Manual

```bash
# Build para produção
npm run build

# Inicie servidor de produção
npm start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Clínica Olho Seco Caratinga**
- Website: [www.olhosecocaratinga.com.br](https://www.olhosecocaratinga.com.br)
- GitHub Issues: [Reporte um problema](https://github.com/Sudo-psc/olhosecocaratinga-site/issues)

## 👨‍⚕️ Equipe

Este projeto foi desenvolvido para a equipe da Olho Seco Caratinga, visando proporcionar a melhor experiência digital para nossos pacientes.

---

**Nota**: Este é um projeto comercial desenvolvido para fins específicos da clínica. Para dúvidas técnicas, utilize os issues do GitHub.
