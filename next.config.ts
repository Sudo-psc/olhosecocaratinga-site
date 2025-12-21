import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Output standalone para Docker
    output: 'standalone',

    // Configuração de domínios permitidos
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ]
    },

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
    // Ignora erros de TypeScript durante build em dev
    typescript: {
        ignoreBuildErrors: false,
    },
}

export default nextConfig