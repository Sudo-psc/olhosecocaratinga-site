import type { PortableTextBlock } from '@portabletext/types'

/**
 * Tipos para documentos do Sanity
 */

// Tipo base para imagens do Sanity
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// Tipo para slugs
export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Tipo para SEO
export interface SeoFields {
  title?: string
  description?: string
}

// Author
export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug: SanitySlug
  photo?: SanityImage
  bio?: PortableTextBlock[]
}

// Category
export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: SanitySlug
  description?: string
}

// Tag (inline em posts/videos)
export interface Tag {
  _key: string
  value: string
}

// Post
export interface Post {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  excerpt?: string
  coverImage?: SanityImage
  body?: PortableTextBlock[]
  author?: Author
  categories?: Category[]
  tags?: string[]
  publishedAt?: string
  seo?: SeoFields
  canonicalUrl?: string
}

// Post resumido para listagens
export interface PostSummary {
  _id: string
  _type: 'post'
  title: string
  slug: SanitySlug
  excerpt?: string
  coverImage?: SanityImage
  author?: {
    name: string
    slug: SanitySlug
    photo?: SanityImage
  }
  categories?: {
    title: string
    slug: SanitySlug
  }[]
  publishedAt?: string
}

// Video
export interface Video {
  _id: string
  _type: 'video'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  description?: PortableTextBlock[]
  youtubeUrl: string
  duration?: string
  transcript?: PortableTextBlock[]
  thumbnail?: SanityImage
  publishedAt?: string
  tags?: string[]
  seo?: SeoFields
}

// Video resumido para listagens
export interface VideoSummary {
  _id: string
  _type: 'video'
  title: string
  slug: SanitySlug
  youtubeUrl: string
  duration?: string
  thumbnail?: SanityImage
  publishedAt?: string
}

// Site Settings
export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  siteTitle?: string
  siteDescription?: string
  defaultSeo?: SeoFields
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
    linkedin?: string
  }
  logo?: SanityImage
  favicon?: SanityImage
}
