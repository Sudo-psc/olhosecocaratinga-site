import { MetadataRoute } from 'next'
import { getAllPostSlugs, getAllVideoSlugs, getAllCategorySlugs } from '@/sanity/queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Páginas estáticas
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${SITE_URL}/olho-seco`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/videos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/sobre-a-clinica`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contato`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ]

    // Buscar slugs dinamicamente
    const [postSlugs, videoSlugs, categorySlugs] = await Promise.all([
        getAllPostSlugs(),
        getAllVideoSlugs(),
        getAllCategorySlugs(),
    ])

    // Páginas de posts
    const postPages: MetadataRoute.Sitemap = postSlugs.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Páginas de vídeos
    const videoPages: MetadataRoute.Sitemap = videoSlugs.map((video) => ({
        url: `${SITE_URL}/videos/${video.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Páginas de categorias
    const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((category) => ({
        url: `${SITE_URL}/blog/categoria/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...postPages, ...videoPages, ...categoryPages]
}
