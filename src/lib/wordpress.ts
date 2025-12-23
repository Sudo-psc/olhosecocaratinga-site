// Configuração do WordPress Headless CMS
export interface WordPressPost {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    slug: string;
    status: string;
    date: string;
    modified: string;
    author?: number;
    categories: number[];
    tags: number[];
    featured_media?: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                width: number;
                height: number;
            };
        }>;
        'author'?: Array<{
            id: number;
            name: string;
            avatar_urls?: Record<string, string>;
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
        }>>;
    };
    yoast_head_json?: {
        title?: string;
        description?: string;
        og_image?: Array<{ url: string }>;
    };
}

export interface WordPressPage {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    slug: string;
    status: string;
    date: string;
    modified: string;
    yoast_head_json?: {
        title?: string;
        description?: string;
        og_image?: string;
    };
}

export interface WordPressMedia {
    id: number;
    source_url: string;
    alt_text: string;
    media_details: {
        width: number;
        height: number;
    };
    caption: {
        rendered: string;
    };
}

export interface WordPressCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
}

export interface WordPressTag {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
}

// Configuração da API WordPress
const API_URL = import.meta.env.WORDPRESS_API_URL || 'https://olhosecocaratinga.com/wp-json/wp/v2';

// Função para fazer requisições à API
async function fetchWordPressAPI<T>(endpoint: string, params: Record<string, string> = {}): Promise<T[]> {
    const url = new URL(`${API_URL}${endpoint}`);

    // Adicionar parâmetros à URL
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    try {
        const response = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`WordPress API error: ${response.status} ${response.statusText}`);
            // Return empty array instead of throwing to prevent page crash
            return [] as unknown as T[];
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching from WordPress API:', error);
        // Fail gracefully by returning empty array
        return [] as unknown as T[];
    }
}

// Função para buscar um único item
async function fetchWordPressSingle<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

// Posts
export async function getPosts(params: {
    per_page?: number;
    page?: number;
    category?: number;
    tag?: number;
    search?: string;
    status?: string;
} = {}): Promise<WordPressPost[]> {
    const searchParams: Record<string, string> = {
        per_page: String(params.per_page || 10),
        page: String(params.page || 1),
        _embed: 'wp:featuredmedia',
        status: params.status || 'publish',
    };

    if (params.category) {
        searchParams.categories = String(params.category);
    }

    if (params.tag) {
        searchParams.tags = String(params.tag);
    }

    if (params.search) {
        searchParams.search = params.search;
    }

    return fetchWordPressAPI<WordPressPost>('/posts', searchParams);
}

export async function getPost(slug: string): Promise<WordPressPost> {
    const posts = await fetchWordPressAPI<WordPressPost>('/posts', {
        slug,
        _embed: 'wp:featuredmedia',
        status: 'publish',
    });

    if (posts.length === 0) {
        throw new Error(`Post not found: ${slug}`);
    }

    return posts[0];
}

// Alias para compatibilidade
export const getPostBySlug = getPost;

export async function getPostById(id: number): Promise<WordPressPost> {
    return fetchWordPressSingle<WordPressPost>(`/posts/${id}?_embed=wp:featuredmedia`);
}

// Páginas
export async function getPages(): Promise<WordPressPage[]> {
    return fetchWordPressAPI<WordPressPage>('/pages', {
        per_page: '100',
        status: 'publish',
    });
}

export async function getPage(slug: string): Promise<WordPressPage> {
    const pages = await fetchWordPressAPI<WordPressPage>('/pages', {
        slug,
        status: 'publish',
    });

    if (pages.length === 0) {
        throw new Error(`Page not found: ${slug}`);
    }

    return pages[0];
}

export async function getPageById(id: number): Promise<WordPressPage> {
    return fetchWordPressSingle<WordPressPage>(`/pages/${id}`);
}

// Categorias
export async function getCategories(): Promise<WordPressCategory[]> {
    return fetchWordPressAPI<WordPressCategory>('/categories', {
        per_page: '100',
    });
}

export async function getCategory(slug: string): Promise<WordPressCategory> {
    const categories = await fetchWordPressAPI<WordPressCategory>('/categories', {
        slug,
    });

    if (categories.length === 0) {
        throw new Error(`Category not found: ${slug}`);
    }

    return categories[0];
}

// Tags
export async function getTags(): Promise<WordPressTag[]> {
    return fetchWordPressAPI<WordPressTag>('/tags', {
        per_page: '100',
    });
}

export async function getTag(slug: string): Promise<WordPressTag> {
    const tags = await fetchWordPressAPI<WordPressTag>('/tags', {
        slug,
    });

    if (tags.length === 0) {
        throw new Error(`Tag not found: ${slug}`);
    }

    return tags[0];
}

// Mídia
export async function getMedia(id: number): Promise<WordPressMedia> {
    return fetchWordPressSingle<WordPressMedia>(`/media/${id}`);
}

// Utilitários
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export function getSEOImage(post: WordPressPost): string {
    // Prioridade: Yoast OG Image > Featured Media > Default
    if (post.yoast_head_json?.og_image && post.yoast_head_json.og_image.length > 0) {
        return post.yoast_head_json.og_image[0].url;
    }

    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        return post._embedded['wp:featuredmedia'][0].source_url;
    }

    return '/og-image.jpg';
}

export function getSEOTitle(post: WordPressPost | WordPressPage): string {
    if (post.yoast_head_json?.title) {
        return post.yoast_head_json.title;
    }

    return post.title.rendered.replace(/<[^>]*>/g, '');
}

export function getSEODescription(post: WordPressPost | WordPressPage): string {
    if (post.yoast_head_json?.description) {
        return post.yoast_head_json.description;
    }

    if ('excerpt' in post) {
        return stripHtml(post.excerpt.rendered);
    }

    return truncateText(stripHtml(post.content.rendered), 160);
}
