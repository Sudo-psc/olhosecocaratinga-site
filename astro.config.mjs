import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
    site: 'https://olhosecocaratinga.com.br',
    output: 'hybrid',
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
        domains: ['olhosecocaratinga.com.br'],
        remotePatterns: [{ protocol: 'https' }],
    },
    compressHTML: true,
    prefetch: {
        prefetchAll: true
    }
});
