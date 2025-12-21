'use client'

/**
 * Sanity Studio Configuration
 *
 * Este arquivo configura o Sanity Studio que será embutido no Next.js.
 * É importado pela rota /app/studio/[[...tool]]/page.tsx
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemas'
import { apiVersion, dataset, projectId } from '@/sanity/config'

export default defineConfig({
    name: 'olhos-secos-caratinga-studio',
    title: 'Olhos Secos Caratinga - CMS',

    projectId,
    dataset,

    // Base path para o Studio (deve coincidir com a rota do Next.js)
    basePath: '/studio',

    plugins: [
        // Ferramenta de estrutura para gerenciar documentos
        structureTool(),
        // Vision tool para testar queries GROQ
        visionTool({ defaultApiVersion: apiVersion }),
    ],

    schema: {
        types: schemaTypes,
    },

    // Configurações de documento
    document: {
        // Ações disponíveis nos documentos
        productionUrl: async (prev, context) => {
            const { document } = context

            if (document._type === 'post') {
                const slug = (document.slug as { current?: string })?.current
                if (slug) {
                    return `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${slug}`
                }
            }

            if (document._type === 'video') {
                const slug = (document.slug as { current?: string })?.current
                if (slug) {
                    return `${process.env.NEXT_PUBLIC_SITE_URL || ''}/videos/${slug}`
                }
            }

            return prev
        },
    },
})
