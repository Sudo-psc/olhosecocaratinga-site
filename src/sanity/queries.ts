import { groq } from 'next-sanity'
import { sanityFetch } from './client'
import type { Post, PostSummary, Video, VideoSummary, SiteSettings } from './types'

// ========================================
// GROQ Queries
// ========================================

// Posts
const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{
      name,
      slug,
      photo
    },
    "categories": categories[]->{
      title,
      slug
    }
  }
`

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    publishedAt,
    tags,
    seo,
    canonicalUrl,
    "author": author->{
      _id,
      name,
      slug,
      photo,
      bio
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      description
    }
  }
`

// Videos
const videosQuery = groq`
  *[_type == "video"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    youtubeUrl,
    duration,
    thumbnail,
    publishedAt
  }
`

const videoBySlugQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    youtubeUrl,
    duration,
    transcript,
    thumbnail,
    publishedAt,
    tags,
    seo
  }
`

// Site Settings
const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    siteTitle,
    siteDescription,
    defaultSeo,
    socialLinks,
    logo,
    favicon
  }
`

// ========================================
// Fetch Functions
// ========================================

/**
 * Busca todos os posts (resumidos)
 */
export async function getPosts(preview = false): Promise<PostSummary[]> {
  return sanityFetch<PostSummary[]>({
    query: postsQuery,
    tags: ['posts'],
    preview,
  })
}

/**
 * Busca um post pelo slug
 */
export async function getPostBySlug(slug: string, preview = false): Promise<Post | null> {
  return sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ['posts', `post:${slug}`],
    preview,
  })
}

/**
 * Busca todos os slugs de posts (para generateStaticParams)
 */
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await sanityFetch<{ slug: { current: string } }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{ slug }`,
    tags: ['posts'],
  })

  return posts.map((post) => ({ slug: post.slug.current }))
}

/**
 * Busca todos os videos (resumidos)
 */
export async function getVideos(preview = false): Promise<VideoSummary[]> {
  return sanityFetch<VideoSummary[]>({
    query: videosQuery,
    tags: ['videos'],
    preview,
  })
}

/**
 * Busca um video pelo slug
 */
export async function getVideoBySlug(slug: string, preview = false): Promise<Video | null> {
  return sanityFetch<Video | null>({
    query: videoBySlugQuery,
    params: { slug },
    tags: ['videos', `video:${slug}`],
    preview,
  })
}

/**
 * Busca todos os slugs de videos (para generateStaticParams)
 */
export async function getAllVideoSlugs(): Promise<{ slug: string }[]> {
  const videos = await sanityFetch<{ slug: { current: string } }[]>({
    query: groq`*[_type == "video" && defined(slug.current)]{ slug }`,
    tags: ['videos'],
  })

  return videos.map((video) => ({ slug: video.slug.current }))
}

/**
 * Busca configurações do site
 */
export async function getSiteSettings(preview = false): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings | null>({
    query: siteSettingsQuery,
    tags: ['siteSettings'],
    preview,
  })
}
