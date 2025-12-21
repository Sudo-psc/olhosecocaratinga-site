import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

/**
 * Endpoint para desabilitar o modo de preview/draft
 *
 * Uso: GET /api/draft/disable
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const redirectTo = searchParams.get('redirect') || '/'

  // Desabilita o draft mode
  const draft = await draftMode()
  draft.disable()

  // Redireciona para a página solicitada (ou home)
  redirect(redirectTo)
}
