import { render, screen } from '@testing-library/react'
import VideoCard from '../video-card'
import type { VideoSummary } from '@/sanity/types'

// Mock do getYouTubeThumbnail
jest.mock('@/sanity/client', () => ({
    getYouTubeThumbnail: jest.fn(() => 'https://img.youtube.com/vi/test-id/hqdefault.jpg'),
    urlFor: jest.fn((_source) => ({
        width: jest.fn().mockReturnThis(),
        height: jest.fn().mockReturnThis(),
        url: jest.fn(() => 'https://cdn.sanity.io/images/test.jpg'),
    })),
}))

describe('VideoCard', () => {
    const mockVideo: VideoSummary = {
        _id: '1',
        _type: 'video',
        title: 'O Que é Olho Seco? Entenda em 2 Minutos',
        slug: { _type: 'slug', current: 'o-que-e-olho-seco' },
        youtubeUrl: 'https://www.youtube.com/watch?v=test-id',
        duration: 120,
        publishedAt: '2025-01-15T10:00:00Z',
        thumbnail: {
            _type: 'image',
            asset: {
                _ref: 'image-thumb',
                _type: 'reference',
            },
        },
    }

    it('renders video title', () => {
        render(<VideoCard video={mockVideo} />)
        expect(screen.getByText('O Que é Olho Seco? Entenda em 2 Minutos')).toBeInTheDocument()
    })

    it('renders duration', () => {
        render(<VideoCard video={mockVideo} />)
        // Duration is displayed as-is (not formatted)
        expect(screen.getByText('120')).toBeInTheDocument()
    })

    it('renders link to video detail page', () => {
        render(<VideoCard video={mockVideo} />)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/videos/o-que-e-olho-seco')
    })

    it('renders long duration', () => {
        const longVideo = { ...mockVideo, duration: 3665 } // 1h 1min 5s
        render(<VideoCard video={longVideo} />)
        expect(screen.getByText('3665')).toBeInTheDocument()
    })

    it('renders any duration value', () => {
        const video = { ...mockVideo, duration: 65 } // 1min 5s
        render(<VideoCard video={video} />)
        expect(screen.getByText('65')).toBeInTheDocument()
    })

    it('renders without crashing when duration is missing', () => {
        const videoWithoutDuration = { ...mockVideo, duration: undefined }
        render(<VideoCard video={videoWithoutDuration} />)
        expect(screen.getByText('O Que é Olho Seco? Entenda em 2 Minutos')).toBeInTheDocument()
    })

    it('uses YouTube thumbnail when no custom thumbnail', () => {
        const videoWithoutThumb = { ...mockVideo, thumbnail: undefined }
        const { container } = render(<VideoCard video={videoWithoutThumb} />)
        const img = container.querySelector('img')
        expect(img).toHaveAttribute('src', 'https://img.youtube.com/vi/test-id/hqdefault.jpg')
    })
})
