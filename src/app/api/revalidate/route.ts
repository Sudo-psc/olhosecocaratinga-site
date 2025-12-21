import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

// Secret configurado no Sanity para validar webhooks
const secret = process.env.SANITY_REVALIDATE_SECRET

export async function POST(request: NextRequest) {
    try {
        // Verifica se o secret está configurado
        if (!secret) {
            return NextResponse.json(
                { message: 'SANITY_REVALIDATE_SECRET não configurado' },
                { status: 500 }
            )
        }

        // Parse e valida o webhook do Sanity
        const { isValidSignature, body } = await parseBody<{
            _type: string
            slug?: { current: string }
        }>(request, secret)

        // Verifica assinatura
        if (!isValidSignature) {
            return NextResponse.json({ message: 'Assinatura inválida' }, { status: 401 })
        }

        // Se não tiver body, retorna erro
        if (!body) {
            return NextResponse.json({ message: 'Body vazio' }, { status: 400 })
        }

        const { _type, slug } = body

        // Revalida tags baseado no tipo de documento
        const revalidatedTags: string[] = []

        switch (_type) {
            case 'post':
                revalidatedTags.push('posts')
                if (slug?.current) {
                    revalidatedTags.push(`post:${slug.current}`)
                }
                break

            case 'video':
                revalidatedTags.push('videos')
                if (slug?.current) {
                    revalidatedTags.push(`video:${slug.current}`)
                }
                break

            case 'author':
                // Revalida posts quando um autor é atualizado
                revalidatedTags.push('posts')
                break

            case 'category':
                // Revalida posts quando uma categoria é atualizada
                revalidatedTags.push('posts')
                break

            case 'siteSettings':
                revalidatedTags.push('siteSettings')
                break

            default:
                // Tipo desconhecido, não faz nada
                return NextResponse.json({
                    message: `Tipo "${_type}" não configurado para revalidação`,
                    revalidated: false,
                })
        }

        // Executa revalidação das tags
        for (const tag of revalidatedTags) {
            revalidateTag(tag)
        }

        return NextResponse.json({
            message: 'Revalidação concluída',
            revalidated: true,
            tags: revalidatedTags,
        })
    } catch (error) {
        console.error('Erro no webhook de revalidação:', error)
        return NextResponse.json(
            {
                message: 'Erro ao processar webhook',
                error: error instanceof Error ? error.message : 'Erro desconhecido',
            },
            { status: 500 }
        )
    }
}

// Permite requisições GET para testar se o endpoint está funcionando
export async function GET() {
    return NextResponse.json({
        message: 'Endpoint de revalidação ativo',
        usage: 'POST com webhook do Sanity',
    })
}
