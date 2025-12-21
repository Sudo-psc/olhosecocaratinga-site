import { createClient, type QueryParams } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { apiVersion, dataset, projectId, useCdn } from './config'

/**
 * Cliente Sanity para uso no servidor
 *
 * Este cliente NUNCA deve ser exposto ao navegador quando
 * configurado com token, pois isso exporia credenciais.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  // Não incluímos token aqui para uso geral
  // Token é adicionado apenas quando necessário via .withConfig()
  perspective: 'published',
})

/**
 * Cliente com token para operações que requerem autenticação
 * (preview mode, webhooks, etc.)
 *
 * NUNCA exponha este cliente ao navegador!
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
  perspective: 'published',
})

/**
 * Cliente para preview/draft mode
 */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
  perspective: 'previewDrafts',
})

/**
 * Retorna o cliente apropriado baseado no modo de preview
 */
export function getClient(preview = false) {
  return preview ? previewClient : client
}

/**
 * Helper para fazer queries com suporte a cache tags do Next.js
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate,
  preview = false,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
  preview?: boolean
}): Promise<T> {
  const selectedClient = getClient(preview)

  return selectedClient.fetch<T>(query, params, {
    next: {
      revalidate: preview ? 0 : revalidate,
      tags: preview ? [] : tags,
    },
  })
}

/**
 * Builder de URL para imagens do Sanity
 */
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Helper para gerar URL de thumbnail do YouTube
 */
export function getYouTubeThumbnail(url: string, quality: 'default' | 'hq' | 'maxres' = 'hq') {
  const videoId = extractYouTubeId(url)
  if (!videoId) return null

  const qualityMap = {
    default: 'default',
    hq: 'hqdefault',
    maxres: 'maxresdefault',
  }

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`
}

/**
 * Extrai o ID do vídeo de uma URL do YouTube
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // ID direto
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}
