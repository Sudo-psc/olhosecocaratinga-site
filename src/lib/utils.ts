/**
 * Utilitário para combinar classes CSS
 * Filtra valores falsy e junta com espaço
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
    return inputs.filter(Boolean).join(' ')
}/**
 * Formata uma data para exibição em português
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
    const defaultOptions: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }

    return new Date(date).toLocaleDateString('pt-BR', options || defaultOptions)
}

/**
 * Trunca um texto para um número máximo de caracteres
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
}

/**
 * Gera um slug a partir de uma string
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/--+/g, '-') // Remove hífens duplicados
        .trim()
}

/**
 * Aguarda um tempo especificado (útil para debounce)
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
