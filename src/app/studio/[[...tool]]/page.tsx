'use client'

/**
 * Esta página renderiza o Sanity Studio embutido no Next.js
 * Rota: /studio e /studio/[...tool]
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
