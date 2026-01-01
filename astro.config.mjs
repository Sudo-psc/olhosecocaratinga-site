import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
    site: 'https://olhosecocaratinga.com.br',
    output: 'static',
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [
        tailwind(),
        sitemap({
            filter: (page) => !page.includes('/studio/'),
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
    vite: {
        define: {
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        },
        ssr: {
            noExternal: ['html-entities', 'sanitize-html']
        }
    },
    build: {
        format: 'directory',
        inlineStylesheets: 'auto'
    },
    image: {
        // Restrict to specific trusted domains only
        domains: ['olhosecocaratinga.com.br', 'cdn.sanity.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'olhosecocaratinga.com.br',
            },
            {
                protocol: 'https',
                hostname: 'olhosecocaratinga.com',
            }
        ],
    },
    compressHTML: true,
    prefetch: {
        prefetchAll: true
    }
});
