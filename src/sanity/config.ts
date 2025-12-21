/**
 * Configuração do Sanity
 *
 * Valores centralizados para uso em toda a aplicação.
 * Variáveis públicas são expostas ao cliente.
 */

// Assertivas de variáveis de ambiente obrigatórias
function assertEnvVar(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não está definida`)
  }
  return value
}

// Variáveis públicas (seguras para o cliente)
export const projectId = assertEnvVar(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const dataset = assertEnvVar(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'NEXT_PUBLIC_SANITY_DATASET'
)

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

// URL base do site
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

/**
 * useCdn: Controla se deve usar o CDN do Sanity
 * - `false` se você quer sempre garantir dados frescos
 * - `true` para melhor performance (dados podem ter até 60s de delay)
 */
export const useCdn = process.env.NODE_ENV === 'production'
