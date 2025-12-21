import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

/**
 * Endpoint para habilitar o modo de preview/draft
 *
 * Uso: GET /api/draft/enable?secret=SEU_SECRET&slug=/caminho/para/pagina
 *
 * O Sanity pode configurar este URL no Studio para permitir
 * preview de documentos em draft.
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)

    // Parâmetros esperados
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug') || '/'

    // Valida o secret
    if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
        return new Response('Secret inválido', { status: 401 })
    }

    // Habilita o draft mode
    const draft = await draftMode()
    draft.enable()

    // Redireciona para a página solicitada
    redirect(slug)
}
