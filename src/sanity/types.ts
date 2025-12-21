import type { PortableTextBlock } from '@portabletext/types'

/**
 * Tipos para documentos do Sanity
 * Atualizados para suportar SEO, compliance médico e Local SEO
 */

// ===== TIPOS BASE =====

// Tipo base para imagens do Sanity
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  credit?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

// Tipo para slugs
export interface SanitySlug {
  _type: 'slug'
  current: string
}

// ===== TIPOS SEO =====

// Campos SEO reutilizáveis
export interface SeoFields {
  title?: string
  description?: string
  seoTitle?: string
  seoDescription?: string
  ogImage?: SanityImage
  canonicalUrl?: string
  noindex?: boolean
  focusKeyword?: string
}

// ===== TIPOS COMPLIANCE MÉDICO =====

export type DisclaimerType = 'standard' | 'educational' | 'consultation' | 'none'

export interface MedicalCompliance {
  reviewedByMedical?: boolean
  medicalReviewer?: Author
  medicalReviewDate?: string
  disclaimerType?: DisclaimerType
  customDisclaimer?: string
}

// ===== TIPOS FAQ =====

export interface FaqItem {
  _key: string
  question: string
  answer: PortableTextBlock[]
}

// ===== AUTHOR =====

export interface AuthorCredentials {
  crm?: string
  specialty?: string
  rqe?: string
}

export interface SocialLink {
  _key: string
  platform: 'instagram' | 'linkedin' | 'twitter' | 'facebook' | 'youtube' | 'website'
  url: string
}

export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug: SanitySlug
  role?: string
  photo?: SanityImage
  bio?: PortableTextBlock[]
  credentials?: AuthorCredentials
  socialLinks?: SocialLink[]
  email?: string
  isMedicalProfessional?: boolean
}

// Author resumido para referências
export interface AuthorReference {
  _id: string
  name: string
  slug: SanitySlug
  photo?: SanityImage
  role?: string
  credentials?: AuthorCredentials
  isMedicalProfessional?: boolean
}

// ===== CATEGORY =====

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: SanitySlug
  description?: string
  icon?: string
  color?: string
  image?: SanityImage
  parent?: Category
  order?: number
  seo?: {
    seoTitle?: string
    seoDescription?: string
  }
}

// Category resumida para referências
export interface CategoryReference {
  _id: string
  title: string
  slug: SanitySlug
  icon?: string
  color?: string
}

// ===== TAG =====

export interface Tag {
  _id: string
  _type: 'tag'
  title: string
  slug: SanitySlug
  description?: string
  color?: string
}

// Tag resumida para referências
export interface TagReference {
  _id: string
  title: string
  slug: SanitySlug
  color?: string
}

// ===== POST =====

export type PostType = 'standard' | 'pillar' | 'news' | 'listicle' | 'faq'

export interface ReadingTime {
  minutes?: number
  autoCalculate?: boolean
}

export interface Reference {
  _key: string
  title?: string
  url?: string
  source?: string
  year?: number
}

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
  readingTime?: ReadingTime
  faq?: FaqItem[]
  seo?: SeoFields
  canonicalUrl?: string
  author?: AuthorReference
  categories?: CategoryReference[]
  tags?: TagReference[]
  publishedAt?: string
  updatedAt?: string
  postType?: PostType
  featured?: boolean
  medicalCompliance?: MedicalCompliance
  relatedPosts?: PostSummary[]
  relatedVideos?: VideoSummary[]
  references?: Reference[]
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
    _id: string
    title: string
    slug: SanitySlug
    color?: string
  }[]
  publishedAt?: string
  postType?: PostType
  featured?: boolean
  readingTime?: ReadingTime
}

// ===== VIDEO =====

export type VideoType = 'standard' | 'tutorial' | 'interview' | 'qa' | 'short' | 'live'

export interface Timestamp {
  _key: string
  time: string
  label: string
}

export interface Video {
  _id: string
  _type: 'video'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  youtubeUrl: string
  duration?: string
  thumbnail?: SanityImage
  description?: PortableTextBlock[]
  transcript?: PortableTextBlock[]
  timestamps?: Timestamp[]
  seo?: SeoFields
  author?: AuthorReference
  categories?: CategoryReference[]
  tags?: TagReference[]
  publishedAt?: string
  updatedAt?: string
  videoType?: VideoType
  featured?: boolean
  medicalCompliance?: MedicalCompliance
  relatedPosts?: PostSummary[]
  relatedVideos?: VideoSummary[]
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
  videoType?: VideoType
  featured?: boolean
  author?: {
    name: string
    slug: SanitySlug
  }
}

// ===== SITE SETTINGS =====

export interface Address {
  street?: string
  number?: string
  complement?: string
  neighborhood?: string
  city: string
  state: string
  postalCode?: string
  country?: string
}

export interface GeoCoordinates {
  latitude?: number
  longitude?: number
}

export interface ClinicInfo {
  name: string
  cnpj?: string
  legalName?: string
  address?: Address
  geo?: GeoCoordinates
  googleMapsUrl?: string
  googlePlaceId?: string
}

export interface MedicalDirector {
  name?: string
  crm: string
  specialty?: string
  rqe?: string
}

export interface BusinessHours {
  _key: string
  days: string
  openTime?: string
  closeTime?: string
}

export interface WhatsAppContact {
  number?: string
  url?: string
  defaultMessage?: string
}

export interface ContactInfo {
  email?: string
  phone?: string
  whatsapp?: WhatsAppContact
  appointmentUrl?: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  youtube?: string
  linkedin?: string
  twitter?: string
  tiktok?: string
}

export interface DefaultSeo {
  titleTemplate?: string
  defaultTitle?: string
  defaultDescription?: string
  defaultOgImage?: SanityImage
  keywords?: string[]
}

export interface LocalSeo {
  primaryCity?: string
  primaryRegion?: string
  serviceArea?: string[]
  businessType?: 'MedicalClinic' | 'Physician' | 'Hospital' | 'HealthAndBeautyBusiness'
}

export interface MedicalDisclaimers {
  standardDisclaimer?: string
  educationalDisclaimer?: string
  consultationDisclaimer?: string
  showDisclaimerOnAllPosts?: boolean
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  siteTitle?: string
  siteDescription?: string
  logo?: SanityImage
  favicon?: SanityImage
  clinic?: ClinicInfo
  medicalDirector?: MedicalDirector
  businessHours?: BusinessHours[]
  contact?: ContactInfo
  socialLinks?: SocialLinks
  defaultSeo?: DefaultSeo
  localSeo?: LocalSeo
  medicalDisclaimers?: MedicalDisclaimers
  privacyPolicyUrl?: string
  termsOfUseUrl?: string
}

// ===== HELPERS =====

// Helper para extrair YouTube Video ID
export function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : null
}

// Helper para gerar URL de thumbnail do YouTube
export function getYouTubeThumbnail(
  url: string,
  quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'
): string | null {
  const videoId = getYouTubeVideoId(url)
  if (!videoId) return null

  const qualityMap = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault',
    standard: 'sddefault',
    maxres: 'maxresdefault',
  }

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`
}
