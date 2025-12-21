import { groq } from 'next-sanity'
import { sanityFetch } from './client'
import type {
  Post,
  PostSummary,
  Video,
  VideoSummary,
  SiteSettings,
  Category,
  Tag,
  Author,
} from './types'

// ========================================
// GROQ Queries
// ========================================

// ==== POSTS ====

const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    postType,
    featured,
    readingTime,
    "author": author->{
      name,
      slug,
      photo
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    }
  }
`

const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...5] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    postType,
    featured,
    readingTime,
    "author": author->{
      name,
      slug,
      photo
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
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
    readingTime,
    faq,
    publishedAt,
    updatedAt,
    postType,
    featured,
    seo,
    medicalCompliance {
      reviewedByMedical,
      "medicalReviewer": medicalReviewer->{
        _id,
        name,
        slug,
        photo,
        credentials
      },
      medicalReviewDate,
      disclaimerType,
      customDisclaimer
    },
    "author": author->{
      _id,
      name,
      slug,
      photo,
      bio,
      role,
      credentials,
      isMedicalProfessional
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      description,
      color
    },
    "tags": tags[]->{
      _id,
      title,
      slug,
      color
    },
    "relatedPosts": relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      "author": author->{ name, slug }
    }[0...3],
    "relatedVideos": relatedVideos[]->{
      _id,
      title,
      slug,
      youtubeUrl,
      duration,
      thumbnail
    }[0...3],
    references
  }
`

const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    postType,
    featured,
    readingTime,
    "author": author->{
      name,
      slug,
      photo
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    }
  }
`

const postsByTagQuery = groq`
  *[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    postType,
    featured,
    readingTime,
    "author": author->{
      name,
      slug,
      photo
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    }
  }
`

// ==== VIDEOS ====

const videosQuery = groq`
  *[_type == "video"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    youtubeUrl,
    duration,
    thumbnail,
    publishedAt,
    videoType,
    featured,
    "author": author->{
      name,
      slug
    }
  }
`

const featuredVideosQuery = groq`
  *[_type == "video" && featured == true] | order(publishedAt desc)[0...5] {
    _id,
    _type,
    title,
    slug,
    youtubeUrl,
    duration,
    thumbnail,
    publishedAt,
    videoType,
    featured,
    "author": author->{
      name,
      slug
    }
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
    timestamps,
    thumbnail,
    publishedAt,
    updatedAt,
    videoType,
    featured,
    seo,
    medicalCompliance {
      reviewedByMedical,
      "medicalReviewer": medicalReviewer->{
        _id,
        name,
        slug,
        photo,
        credentials
      },
      medicalReviewDate,
      disclaimerType
    },
    "author": author->{
      _id,
      name,
      slug,
      photo,
      bio,
      role,
      credentials,
      isMedicalProfessional
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    },
    "tags": tags[]->{
      _id,
      title,
      slug,
      color
    },
    "relatedPosts": relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt
    }[0...3],
    "relatedVideos": relatedVideos[]->{
      _id,
      title,
      slug,
      youtubeUrl,
      duration,
      thumbnail
    }[0...3]
  }
`

// ==== CATEGORIES ====

const categoriesQuery = groq`
  *[_type == "category"] | order(order asc, title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    icon,
    color,
    image,
    "parent": parent->{
      _id,
      title,
      slug
    },
    order,
    seo
  }
`

const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    description,
    icon,
    color,
    image,
    "parent": parent->{
      _id,
      title,
      slug
    },
    order,
    seo
  }
`

// ==== TAGS ====

const tagsQuery = groq`
  *[_type == "tag"] | order(title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    color
  }
`

// ==== AUTHORS ====

const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    _type,
    name,
    slug,
    role,
    photo,
    bio,
    credentials,
    socialLinks,
    email,
    isMedicalProfessional
  }
`

const authorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    role,
    photo,
    bio,
    credentials,
    socialLinks,
    email,
    isMedicalProfessional
  }
`

// ==== SITE SETTINGS ====

const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    siteTitle,
    siteDescription,
    logo,
    favicon,
    clinic,
    medicalDirector,
    businessHours,
    contact,
    socialLinks,
    defaultSeo,
    localSeo,
    medicalDisclaimers,
    privacyPolicyUrl,
    termsOfUseUrl
  }
`

// ========================================
// Fetch Functions
// ========================================

// ==== POSTS ====

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
 * Busca posts em destaque
 */
export async function getFeaturedPosts(preview = false): Promise<PostSummary[]> {
  return sanityFetch<PostSummary[]>({
    query: featuredPostsQuery,
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
 * Busca posts por categoria
 */
export async function getPostsByCategory(
  categorySlug: string,
  preview = false
): Promise<PostSummary[]> {
  return sanityFetch<PostSummary[]>({
    query: postsByCategoryQuery,
    params: { categorySlug },
    tags: ['posts', `category:${categorySlug}`],
    preview,
  })
}

/**
 * Busca posts por tag
 */
export async function getPostsByTag(tagSlug: string, preview = false): Promise<PostSummary[]> {
  return sanityFetch<PostSummary[]>({
    query: postsByTagQuery,
    params: { tagSlug },
    tags: ['posts', `tag:${tagSlug}`],
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

// ==== VIDEOS ====

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
 * Busca videos em destaque
 */
export async function getFeaturedVideos(preview = false): Promise<VideoSummary[]> {
  return sanityFetch<VideoSummary[]>({
    query: featuredVideosQuery,
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

// ==== CATEGORIES ====

/**
 * Busca todas as categorias
 */
export async function getCategories(preview = false): Promise<Category[]> {
  return sanityFetch<Category[]>({
    query: categoriesQuery,
    tags: ['categories'],
    preview,
  })
}

/**
 * Busca uma categoria pelo slug
 */
export async function getCategoryBySlug(
  slug: string,
  preview = false
): Promise<Category | null> {
  return sanityFetch<Category | null>({
    query: categoryBySlugQuery,
    params: { slug },
    tags: ['categories', `category:${slug}`],
    preview,
  })
}

/**
 * Busca todos os slugs de categorias
 */
export async function getAllCategorySlugs(): Promise<{ slug: string }[]> {
  const categories = await sanityFetch<{ slug: { current: string } }[]>({
    query: groq`*[_type == "category" && defined(slug.current)]{ slug }`,
    tags: ['categories'],
  })

  return categories.map((cat) => ({ slug: cat.slug.current }))
}

// ==== TAGS ====

/**
 * Busca todas as tags
 */
export async function getTags(preview = false): Promise<Tag[]> {
  return sanityFetch<Tag[]>({
    query: tagsQuery,
    tags: ['tags'],
    preview,
  })
}

// ==== AUTHORS ====

/**
 * Busca todos os autores
 */
export async function getAuthors(preview = false): Promise<Author[]> {
  return sanityFetch<Author[]>({
    query: authorsQuery,
    tags: ['authors'],
    preview,
  })
}

/**
 * Busca um autor pelo slug
 */
export async function getAuthorBySlug(slug: string, preview = false): Promise<Author | null> {
  return sanityFetch<Author | null>({
    query: authorBySlugQuery,
    params: { slug },
    tags: ['authors', `author:${slug}`],
    preview,
  })
}

// ==== SITE SETTINGS ====

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
