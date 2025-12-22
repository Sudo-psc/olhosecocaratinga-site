#!/usr/bin/env ts-node

/**
 * Script de Seed - Publicações sobre Olho Seco
 *
 * Este script popula o Sanity CMS com conteúdo inicial sobre olho seco.
 * Cria: 1 autor, 5 categorias e 15 artigos otimizados para SEO.
 *
 * Uso:
 *   pnpm seed:posts
 *
 * Requisitos:
 *   - SANITY_API_WRITE_TOKEN configurado em .env.local
 *   - Dataset "production" ou "development" configurado
 */

import { writeClient } from '../src/sanity/client'
import { seedData } from './seed-data'

interface SeedResult {
    author: string
    categories: string[]
    posts: string[]
    errors: string[]
}

async function seed(): Promise<SeedResult> {
    const result: SeedResult = {
        author: '',
        categories: [],
        posts: [],
        errors: [],
    }

    console.log('🌱 Iniciando seed do Sanity CMS...\n')

    try {
        // 1. Criar autor
        console.log('👤 Criando autor...')
        const author = await writeClient.create({
            _type: 'author',
            ...seedData.author,
        })
        result.author = author._id
        console.log(`✅ Autor criado: ${author.name} (${author._id})\n`)

        // 2. Criar categorias
        console.log('📁 Criando categorias...')
        for (const category of seedData.categories) {
            try {
                const created = await writeClient.create({
                    _type: 'category',
                    ...category,
                })
                result.categories.push(created._id)
                console.log(`✅ Categoria criada: ${created.title}`)
            } catch (error) {
                const message = `Erro ao criar categoria ${category.title}: ${error}`
                result.errors.push(message)
                console.error(`❌ ${message}`)
            }
        }
        console.log('')

        // 3. Criar posts
        console.log('📝 Criando posts...')
        for (const post of seedData.posts) {
            try {
                const created = await writeClient.create({
                    _type: 'post',
                    ...post,
                    author: {
                        _type: 'reference',
                        _ref: author._id,
                    },
                    categories: post.categoryRefs.map((ref) => ({
                        _type: 'reference',
                        _ref: result.categories[ref],
                        _key: `cat-${ref}`,
                    })),
                    publishedAt: new Date().toISOString(),
                })
                result.posts.push(created._id)
                console.log(`✅ Post criado: ${created.title}`)
            } catch (error) {
                const message = `Erro ao criar post ${post.title}: ${error}`
                result.errors.push(message)
                console.error(`❌ ${message}`)
            }
        }

        console.log('\n✨ Seed concluído com sucesso!')
        console.log(`\n📊 Resumo:`)
        console.log(`   - 1 autor criado`)
        console.log(`   - ${result.categories.length} categorias criadas`)
        console.log(`   - ${result.posts.length} posts criados`)

        if (result.errors.length > 0) {
            console.log(`\n⚠️  ${result.errors.length} erros encontrados:`)
            result.errors.forEach((err) => console.log(`   - ${err}`))
        }
    } catch (error) {
        console.error('\n❌ Erro fatal durante seed:', error)
        result.errors.push(String(error))
    }

    return result
}

// Executar seed se for chamado diretamente
if (require.main === module) {
    seed()
        .then(() => {
            console.log('\n✅ Processo finalizado')
            process.exit(0)
        })
        .catch((error) => {
            console.error('\n❌ Processo falhou:', error)
            process.exit(1)
        })
}

export { seed }
