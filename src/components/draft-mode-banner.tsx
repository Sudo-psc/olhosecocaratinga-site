'use client'

import Link from 'next/link'

/**
 * Banner exibido quando o modo de preview está ativo
 */
export default function DraftModeBanner() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500 px-4 py-2 text-center text-sm font-medium text-amber-950">
            <span className="mr-2">⚠️ Modo Preview ativo - Você está vendo conteúdo em rascunho</span>
            <Link
                href="/api/draft/disable"
                className="ml-2 rounded bg-amber-700 px-3 py-1 text-white transition-colors hover:bg-amber-800"
                prefetch={false}
            >
                Sair do Preview
            </Link>
        </div>
    )
}
