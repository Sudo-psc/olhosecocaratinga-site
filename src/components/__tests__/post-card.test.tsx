import { render, screen } from '@testing-library/react'
import PostCard from '../post-card'
import type { PostSummary } from '@/sanity/types'

// Mock do urlFor
jest.mock('@/sanity/client', () => ({
    urlFor: jest.fn((_source) => ({
        width: jest.fn().mockReturnThis(),
        height: jest.fn().mockReturnThis(),
        url: jest.fn(() => 'https://cdn.sanity.io/images/test.jpg'),
    })),
}))

describe('PostCard', () => {
    const mockPost: PostSummary = {
        _id: '1',
        _type: 'post',
        title: 'Olho Seco no Ar-Condicionado',
        slug: { _type: 'slug', current: 'olho-seco-ar-condicionado' },
        excerpt: 'Entenda por que o ar-condicionado pode causar olho seco',
        publishedAt: '2025-01-15T10:00:00Z',
        author: {
            name: 'Dr. Philipe Saraiva',
            slug: { _type: 'slug', current: 'dr-philipe-saraiva' },
            photo: {
                _type: 'image',
                asset: {
                    _ref: 'image-test',
                    _type: 'reference',
                },
            },
        },
        categories: [
            {
                _id: 'cat-1',
                title: 'Prevenção',
                slug: { _type: 'slug', current: 'prevencao' },
                color: { value: '#3b82f6' },
            },
        ],
        coverImage: {
            _type: 'image',
            asset: {
                _ref: 'image-cover',
                _type: 'reference',
            },
            alt: 'Ar-condicionado',
        },
    }

    it('renders post title', () => {
        render(<PostCard post={mockPost} />)
        expect(screen.getByText('Olho Seco no Ar-Condicionado')).toBeInTheDocument()
    })

    it('renders post excerpt', () => {
        render(<PostCard post={mockPost} />)
        expect(
            screen.getByText('Entenda por que o ar-condicionado pode causar olho seco')
        ).toBeInTheDocument()
    })

    it('renders author name', () => {
        render(<PostCard post={mockPost} />)
        expect(screen.getByText('Dr. Philipe Saraiva')).toBeInTheDocument()
    })

    it('renders category badge', () => {
        render(<PostCard post={mockPost} />)
        expect(screen.getByText('Prevenção')).toBeInTheDocument()
    })

    it('formats publish date in pt-BR', () => {
        render(<PostCard post={mockPost} />)
        // Date: 2025-01-15 should be formatted as "15 de jan. de 2025" or similar
        const dateElement = screen.getByText(/jan/i)
        expect(dateElement).toBeInTheDocument()
    })

    it('renders link to post detail page', () => {
        render(<PostCard post={mockPost} />)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/blog/olho-seco-ar-condicionado')
    })

    it('renders placeholder when no cover image', () => {
        const postWithoutImage = { ...mockPost, coverImage: undefined }
        const { container } = render(<PostCard post={postWithoutImage} />)
        // SVG placeholder should be present
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })

    it('renders without author gracefully', () => {
        const postWithoutAuthor = { ...mockPost, author: undefined }
        render(<PostCard post={postWithoutAuthor} />)
        // Should not crash, title should still be there
        expect(screen.getByText('Olho Seco no Ar-Condicionado')).toBeInTheDocument()
    })

    it('limits categories display to 2', () => {
        const postWithManyCategories = {
            ...mockPost,
            categories: [
                {
                    _id: 'cat-1',
                    title: 'Categoria 1',
                    slug: { _type: 'slug' as const, current: 'cat-1' },
                    color: { value: '#3b82f6' },
                },
                {
                    _id: 'cat-2',
                    title: 'Categoria 2',
                    slug: { _type: 'slug' as const, current: 'cat-2' },
                    color: { value: '#3b82f6' },
                },
                {
                    _id: 'cat-3',
                    title: 'Categoria 3',
                    slug: { _type: 'slug' as const, current: 'cat-3' },
                    color: { value: '#3b82f6' },
                },
            ],
        }
        render(<PostCard post={postWithManyCategories} />)
        expect(screen.getByText('Categoria 1')).toBeInTheDocument()
        expect(screen.getByText('Categoria 2')).toBeInTheDocument()
        expect(screen.queryByText('Categoria 3')).not.toBeInTheDocument()
    })
})
