import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Olhos Secos Caratinga | Dr. Philipe Saraiva',
        short_name: 'Olhos Secos',
        description:
            'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0284c7', // sky-600
        orientation: 'portrait',
        scope: '/',
        lang: 'pt-BR',
        categories: ['health', 'medical', 'education'],
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    }
}
