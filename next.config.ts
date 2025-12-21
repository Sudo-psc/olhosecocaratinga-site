import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                pathname: '/vi/**',
            },
        ],
    },
    // Necessário para styled-components (Sanity Studio)
    compiler: {
        styledComponents: true,
    },
    // Ignora erros de ESLint durante build (opcional)
    eslint: {
        ignoreDuringBuilds: false,
    },
    // Configuração experimental para Server Actions
    experimental: {
        // Habilitado por padrão no Next.js 15
    },
}

export default nextConfig
