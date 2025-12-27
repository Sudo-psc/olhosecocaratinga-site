# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro 4 website for "Olhos Secos Caratinga" (Dry Eye Clinic) with Sanity CMS integration. The site features a blog, video library, and informational pages about dry eye treatment.

## Technology Stack

- **Framework**: Astro 4.16 (File-based routing with hybrid rendering)
- **CMS**: Sanity v7 (Headless CMS)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.9
- **Package Manager**: pnpm 9.15

## Development Commands

```bash
# Development server (runs on http://localhost:4321)
pnpm dev

# Production build (includes type checking)
pnpm build

# Preview production build
pnpm preview

# Linting
pnpm lint

# Code formatting
pnpm format
```

## Architecture

### Directory Structure

```
src/
├── pages/                  # Astro file-based routing
│   ├── index.astro        # Homepage
│   ├── olho-seco.astro    # Dry eye information page
│   ├── sobre.astro        # About page
│   ├── contato.astro      # Contact page
│   ├── tratamentos.astro  # Treatments page
│   ├── exames.astro       # Exams page
│   ├── blog/              # Blog routes
│   │   ├── index.astro    # Blog listing
│   │   └── [slug].astro   # Dynamic blog post routes
│   └── videos/            # Video routes
│       ├── index.astro    # Video listing
│       └── [slug].astro   # Dynamic video routes
├── components/            # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   └── VideoCard.astro
├── layouts/               # Layout components
│   └── Layout.astro       # Base layout with SEO
└── lib/                   # Utilities and configuration
    ├── sanity.ts          # Sanity client and helpers
    └── config.ts          # Site configuration
```

### Sanity Client Architecture

The codebase uses a single Sanity client for fetching content:

- **`client`** (src/lib/sanity.ts:4) - Standard client for published content, uses CDN

**Helper Functions**:
- `urlFor(source)` (src/lib/sanity.ts:13) - Image URL builder for Sanity images

### Data Fetching Pattern

Use the Sanity client with GROQ queries:

```typescript
import { client } from '../lib/sanity';
import groq from 'groq';

const posts = await client.fetch(groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt
}`);
```

### Content Types

The project uses these Sanity schemas:

1. **Post** - Blog articles with Portable Text body
2. **Video** - Educational videos with transcripts
3. **Author** - Content authors
4. **Category** - Post categories
5. **pageOlhoSeco** - CMS-managed content for the dry eye page

### Image Handling

For Sanity images, use the `urlFor()` helper (src/lib/sanity.ts:13):

```astro
---
import { urlFor } from '../lib/sanity';
---
{post.mainImage && (
  <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} />
)}
```

### Environment Variables

Required environment variables (see .env.example):

```bash
# Sanity Configuration (REQUIRED)
PUBLIC_SANITY_PROJECT_ID=      # From sanity.io/manage
PUBLIC_SANITY_DATASET=         # Usually "production"
PUBLIC_SANITY_API_VERSION=     # Format: YYYY-MM-DD (e.g., "2024-01-01")

# Site Configuration
SITE_URL=                      # Base URL (for OpenGraph, etc.)
SITE_NAME=                     # Site name
```

**Important**: Variables prefixed with `PUBLIC_` are exposed to the browser. Never prefix sensitive tokens with `PUBLIC_`.

### Path Aliases

Use `@/` for imports when needed, but relative imports are common in Astro:

```typescript
// Relative imports (preferred in Astro)
import Layout from '../layouts/Layout.astro';
import { client } from '../lib/sanity';
```

### Rendering Modes

The project uses hybrid rendering (`output: 'hybrid'` in astro.config.mjs):

- **SSG** (Static Site Generation) by default
- **SSR** (Server Side Rendering) for pages with `export const prerender = false`

Example SSR page:
```astro
---
export const prerender = false;
import Layout from '../layouts/Layout.astro';
---
<Layout title="Dynamic Page">
  <!-- Content -->
</Layout>
```

### Styling Conventions

- Tailwind CSS utility classes
- Mobile-first responsive design
- Color palette: Custom blues (#003D7A primary), slate (grays), white
- Utility classes defined in tailwind.config.mjs

## Content Management

### Sanity CMS

Content is managed through Sanity Studio:

1. Access at [sanity.io/manage](https://www.sanity.io/manage)
2. Content types are defined in Sanity schemas (managed separately)
3. Content is fetched via GROQ queries using the Sanity client

### Fallback Content

Pages with Sanity integration include fallback static content when CMS is not configured:

```astro
---
let cmsData = null;
try {
  if (import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    cmsData = await client.fetch(query);
  }
} catch (e) {
  console.warn("Sanity fetch failed, using fallback content");
}
---
{cmsData?.body ? (
  <PortableText value={cmsData.body} />
) : (
  <!-- Static fallback content -->
)}
```

## Adding New Features

When adding new pages or features:

1. Create `.astro` files in `src/pages/` for new routes
2. Use GROQ queries to fetch Sanity content if needed
3. Add TypeScript types in component/page frontmatter
4. Update `src/lib/config.ts` for navigation or site settings
5. Use Tailwind CSS for styling

## Site Configuration

Global site configuration is in `src/lib/config.ts`:

- Business information
- Doctor information
- Social media links
- Navigation menus
- SEO defaults
- Structured data helpers

Use these helpers for structured data:
- `getClinicStructuredData()`
- `getDoctorStructuredData()`
- `getBreadcrumbStructuredData(items)`
- `getFAQStructuredData(faqs)`
- `getArticleStructuredData(article)`

## Important Notes

- Always wrap Astro component logic in frontmatter delimiters (`---`)
- Use `export const prerender = false` for server-side rendering
- Sanity images should use `urlFor()` helper
- Portable Text content uses `astro-portabletext` component
- The deprecated `imageUrlBuilder` warning can be ignored (library issue)

## Best Practices

1. **Frontmatter**: Always include opening and closing `---` delimiters
2. **Type Safety**: Define TypeScript interfaces for Sanity content
3. **Error Handling**: Wrap Sanity fetches in try-catch with fallbacks
4. **Image Optimization**: Use `urlFor()` with width/height parameters
5. **SEO**: Use the Layout component and pass title/description props
6. **Performance**: Prefer SSG over SSR when possible
