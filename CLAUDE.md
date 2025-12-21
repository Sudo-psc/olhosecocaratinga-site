# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 website for "Olhos Secos Caratinga" (Dry Eye Clinic) with Sanity CMS integration. The site features a blog, video library, and embedded Sanity Studio for content management.

## Technology Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **React**: 19.0.0
- **CMS**: Sanity 3.72.1 with next-sanity integration
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.7.2
- **Package Manager**: pnpm 9.15.2

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Linting
pnpm lint         # Check for issues
pnpm lint:fix     # Auto-fix issues

# Code formatting
pnpm format       # Format all files
pnpm format:check # Check formatting without changes
```

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── draft/         # Draft mode enable/disable
│   │   └── revalidate/    # Webhook for cache revalidation
│   ├── blog/              # Blog listing and posts
│   │   └── [slug]/        # Dynamic blog post routes
│   ├── videos/            # Video listing and pages
│   │   └── [slug]/        # Dynamic video routes
│   ├── studio/            # Embedded Sanity Studio
│   │   └── [[...tool]]/   # Studio catch-all route
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # React components (inline in app dir)
│   ├── draft-mode-banner.tsx
│   ├── portable-text.tsx
│   ├── post-card.tsx
│   └── video-card.tsx
└── sanity/                # Sanity configuration
    ├── client.ts          # Sanity clients (client, previewClient, writeClient)
    ├── config.ts          # Environment configuration
    ├── queries.ts         # GROQ queries
    ├── types.ts           # TypeScript types
    └── schemas/           # Content schemas
        ├── author.ts
        ├── category.ts
        ├── post.ts
        ├── video.ts
        └── site-settings.ts
```

### Sanity Client Architecture

The codebase uses three distinct Sanity clients with different purposes:

1. **`client`** (src/sanity/client.ts:12) - Standard client for published content, uses CDN in production
2. **`previewClient`** (src/sanity/client.ts:40) - For draft/preview mode, bypasses CDN
3. **`writeClient`** (src/sanity/client.ts:28) - Authenticated client for mutations (never exposed to browser)

**Critical**: Never expose `writeClient` or any client with tokens to the browser. Use `getClient(preview)` helper for automatic client selection.

### Data Fetching Pattern

Use the `sanityFetch()` helper (src/sanity/client.ts:59) instead of calling client.fetch() directly:

```typescript
// GOOD - Uses cache tags and Next.js revalidation
const posts = await sanityFetch<PostSummary[]>({
  query: postsQuery,
  tags: ['posts'],
  revalidate: 3600,
  preview: false
})

// AVOID - No cache tag support
const posts = await client.fetch(postsQuery)
```

**Cache Tags**: All content types have associated tags for granular revalidation:
- Posts: `'posts'`, `'post:${slug}'`
- Videos: `'videos'`, `'video:${slug}'`
- Authors/Categories: `'posts'` (they affect posts)
- Site Settings: `'siteSettings'`

### Revalidation System

The `/api/revalidate` webhook (src/app/api/revalidate/route.ts) receives Sanity webhooks and revalidates Next.js cache tags based on document type.

**Setup in Sanity**:
1. Create webhook at sanity.io/manage → API → Webhooks
2. URL: `https://yourdomain.com/api/revalidate`
3. Secret: Match `SANITY_REVALIDATE_SECRET` env var
4. Dataset: Your dataset (usually "production")
5. Trigger on: Create, Update, Delete

### Draft/Preview Mode

Draft mode allows previewing unpublished content:

- **Enable**: `/api/draft/enable?slug=<slug>&type=<post|video>`
- **Disable**: `/api/draft/disable`
- **Client Selection**: Automatically uses `previewClient` when draft mode is active

### Image Handling

For Sanity images, use the `urlFor()` helper (src/sanity/client.ts:87):

```typescript
import { urlFor } from '@/sanity/client'

const imageUrl = urlFor(image)
  .width(800)
  .height(600)
  .format('webp')
  .url()
```

For YouTube thumbnails, use `getYouTubeThumbnail()` (src/sanity/client.ts:94).

### Environment Variables

Required environment variables (see .env.example):

```bash
# Sanity Configuration (REQUIRED)
NEXT_PUBLIC_SANITY_PROJECT_ID=     # From sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=        # Usually "production"
NEXT_PUBLIC_SANITY_API_VERSION=    # Format: YYYY-MM-DD

# Tokens (REQUIRED for preview/webhooks)
SANITY_API_READ_TOKEN=             # For preview mode
SANITY_API_WRITE_TOKEN=            # For mutations/webhooks
SANITY_REVALIDATE_SECRET=          # Webhook validation

# URLs
NEXT_PUBLIC_SITE_URL=              # Base URL (for OpenGraph, etc.)
```

**Critical**: Token environment variables must NEVER be prefixed with `NEXT_PUBLIC_` as this exposes them to the browser.

### Path Aliases

Use `@/` for imports (configured in tsconfig.json):

```typescript
// GOOD
import { client } from '@/sanity/client'
import { Post } from '@/sanity/types'

// AVOID
import { client } from '../../../sanity/client'
```

### Sanity Studio

The Studio is embedded at `/studio` route (src/app/studio/[[...tool]]/page.tsx). It uses the configuration from `sanity.config.ts` which includes:

- Structure tool for document management
- Vision tool for GROQ query testing
- Production URL preview for posts and videos

### Styling Conventions

- Tailwind CSS utility classes
- Dark mode support via `dark:` prefix
- Mobile-first responsive design
- Color palette: slate (grays), white, and theme colors
- Fonts: Inter (loaded via next/font/google)

## Content Types

1. **Post** - Blog articles with Portable Text body, categories, author, SEO
2. **Video** - YouTube videos with transcript, thumbnail, duration
3. **Author** - Content authors with photo, bio, social links
4. **Category** - Post categorization
5. **Site Settings** - Global site configuration (singleton)

## Adding New Features

When adding new content types:

1. Create schema in `src/sanity/schemas/`
2. Add to `schemaTypes` array in `src/sanity/schemas/index.ts`
3. Add GROQ queries to `src/sanity/queries.ts`
4. Add TypeScript types to `src/sanity/types.ts`
5. Update revalidation logic in `src/app/api/revalidate/route.ts`
6. Create App Router pages if needed

## kluster.ai Verification

This project uses kluster.ai for automated code review. The workflow (configured in .agent/rules/kluster-code-verify.md) is:

1. `kluster_open_snapshot_session` - Before any code changes
2. Make code changes
3. `kluster_code_review_auto` - After all changes
4. Complete any items from `agent_todo_list`
5. Re-verify if needed

**Never skip verification** - even for small changes.
