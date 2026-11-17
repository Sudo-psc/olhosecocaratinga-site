---
version: alpha
name: Olho Seco Caratinga
description: Sistema de design de olhosecocaratinga.com.br — azul #003D7A, ciano de acento e neutros slate, com Inter e Outfit, extraído de src/layouts/Layout.astro e conferido no HTML/CSS públicos de 17/11/2026.
colors:
  primary: "#003D7A"
  on-primary: "#ffffff"
  secondary: "#64748b"
  tertiary: "#22d3ee"
  primary-deep: "#002855"
  primary-light: "#22d3ee"
  accent: "#ecfeff"
  cyan-600: "#06b6d4"
  blue-500: "#3b82f6"
  text-main: "#1e293b"
  text-muted: "#475569"
  bg-body: "#f8fafc"
  bg-alt: "#ffffff"
  border: "#e2e8f0"
  surface: "#f8fafc"
  on-surface: "#1e293b"
  skip-bg: "#0f172a"
typography:
  headline-display:
    fontFamily: Outfit
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.25
  headline-lg:
    fontFamily: Outfit
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.25
  headline-md:
    fontFamily: Outfit
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.25
  headline-sm:
    fontFamily: Outfit
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.625
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.25
rounded:
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1rem
  "2xl": 1rem
spacing:
  4: 1rem
  6: 1.5rem
  8: 2rem
  10: 2.5rem
components:
  button-premium-primary:
    backgroundColor: "{colors.cyan-600}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: 0.75rem
  button-premium-secondary:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: 0.75rem
  skip-link:
    backgroundColor: "{colors.skip-bg}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 0.5rem
---

# DESIGN.md — Olho Seco Caratinga

Tokens do `:root` em `src/layouts/Layout.astro` (branch `master`, tip `656f1c8`). Conferidos no HTML público em 17/11/2026 (America/Sao_Paulo), onde o mesmo `:root` aparece inline (`--primary: #003D7A`, raios `.5rem` / `.75rem` / `1rem`). A home no ar usa `/fonts/fonts.css` (Inter + Outfit) e `/_astro/_slug_.BKcMkLwE.css`. O deploy no KVM2 documenta o SHA `7f8d129`; o `master` atual está dois commits à frente (remoção de agendamento), sem mudança desses tokens.

O `tailwind.config.mjs` ainda declara uma escala `primary` azul padrão do Tailwind (`#3b82f6` etc.) e uma pilha de sistema em `fontFamily.sans`. **Essa escala não é a identidade do site.** A marca real é `#003D7A`, e as fontes reais são Inter e Outfit, declaradas no layout e em `public/fonts/fonts.css`. Não copie o `theme.extend.colors.primary` desse config.

Títulos de seção e chaves YAML em inglês (spec). Prosa em português. `version: alpha` é o formato DESIGN.md.

## Overview

Site local de olho seco em Caratinga: direto, clínico e de captação, com azul institucional forte, acentos ciano e fundos slate-50. Títulos em **Outfit** (pesos 400–700 self-hosted) e corpo em **Inter** (300–600 self-hosted). O fundo global tem um radial ciano suave (`rgba(34, 211, 238, 0.08)` no topo). A linguagem é mais utilitária que a do portal olhossecos.com.br.

## Colors

Do `:root` do layout (iguais no HTML no ar):

- `--primary: #003D7A` — títulos e identidade (comentário no fonte: “Deep Blue retained for strong contrast/headings”). Também aparece como `#002855` em um ponto da home; tratar `#003D7A` como canônico e `#002855` como variação pontual, não como token de paleta formal.
- `--primary-light: #22d3ee` — acento e hover (Cyan-400)
- `--secondary: #64748b` — texto secundário (Slate-500)
- `--accent: #ecfeff` — fundos de destaque (Cyan-50)
- `--text-main: #1e293b` / `--text-muted: #475569`
- `--bg-body: #f8fafc` / `--bg-alt: #ffffff` / `--border: #e2e8f0`

O botão `.btn-premium-primary` no fonte usa um **gradiente** `linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)` com texto branco e sombra ciano. A spec não tem tipo “gradiente” para `backgroundColor`; o token YAML usa o sólido de partida `#06b6d4`. Implementar o gradiente literal do CSS, não um botão chapado só com o token.

Outros hex pontuais no repositório (calculadora, vídeos, e-mails, WhatsApp `#25D366`) não entram na paleta de marca; não foram generalizados.

## Typography

`body`: Inter, 16px, `line-height: 1.6`, cor `--text-main`. Headings e `.font-heading`: Outfit, `font-weight: 700`, `line-height: 1.2` no seletor do layout (as classes da home também usam `leading-tight`, que no Tailwind 3.4 é `1.25`). O `fontSize` dos tokens de título usa o maior degrau observado nas classes da home, porque a spec não aceita a escala responsiva do Tailwind como dimensão única:

- h1 da home: `text-4xl md:text-6xl lg:text-7xl` → 2.25rem / 3.75rem / **4.5rem** (escala padrão do Tailwind 3.4.10; `theme.fontSize` não é sobrescrito)
- h2 de seção: com frequência `text-3xl md:text-5xl` → 1.875rem / **3rem**
- h3: `text-2xl` → **1.5rem**
- lead da home: `text-lg md:text-xl` + `leading-relaxed` + `font-medium` → 1.125rem / **1.25rem**, peso 500, `line-height: 1.625`

Botão `.btn-premium`: `0.875rem` / peso 600; a partir de 640px, `1rem` e `padding: 0.875rem 2rem`.

## Layout

Não há escala de espaço própria no `:root`. O ritmo vem da escala padrão do Tailwind 3.4 (0.25rem em diante). Os tokens YAML `4/6/8/10` registam apenas degraus claramente usados em paddings de botão e blocos (`1rem`, `1.5rem`, `2rem`, `2.5rem`). TODO: inventariar um espaço canônico se o projeto ganhar tokens próprios. Não há `max-width` de página declarado no `:root`.

## Elevation & Depth

Sombras do `:root`:

- `--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`

O primário ainda adiciona sombra ciano `0 10px 15px -3px rgba(6, 182, 212, 0.3)` (hover ainda maior). Fundo da página: slate-50 + radial ciano, não sombra.

## Shapes

`--radius-sm: 0.5rem`, `--radius-md: 0.75rem`, `--radius-lg: 1rem`. Botões premium usam `--radius-md`. A home também usa utilitários Tailwind (`rounded-xl`, `rounded-2xl`); esses valores são da escala padrão (0.75rem e 1rem) e coincidem com `md`/`lg` do `:root` no caso de `rounded-xl` / `rounded-2xl`.

## Components

`.btn-premium-primary`: gradiente ciano→azul, texto branco, `padding: 0.75rem 1.5rem` (maior no breakpoint `sm`), peso 600. Hover: `translateY(-2px)`, sombra maior, `filter: brightness(1.1)`. `.btn-premium-secondary`: fundo branco, texto `--primary`, borda `--border`. O YAML `padding: 0.75rem` é só o eixo vertical da versão base; o CSS real é `0.75rem 1.5rem`.

## Do's and Don'ts

- Faça usar `#003D7A` como azul de marca, não a escala `primary` do `tailwind.config.mjs`.
- Não troque Outfit por Inter nos títulos, nem Inter por Outfit no corpo.
- Faça implementar o botão primário como gradiente `#06b6d4` → `#3b82f6`, não como chapado, ainda que o token YAML seja sólido.
- Não eleve à paleta de marca cores de terceiros (WhatsApp `#25D366`) nem hexes avulsos de páginas isoladas sem evidência de reuso.
- Faça manter Inter e Outfit self-hosted em `/fonts`.
