// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: function MockImage(props: any) {
        const { fill, ...rest } = props
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return React.createElement('img', rest)
    },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
            pathname: '/',
            query: {},
        }
    },
    useSearchParams() {
        return new URLSearchParams()
    },
    usePathname() {
        return '/'
    },
}))

// Mock environment variables
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'test-project-id'
process.env.NEXT_PUBLIC_SANITY_DATASET = 'test'
process.env.NEXT_PUBLIC_SANITY_API_VERSION = '2025-01-01'
process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000'
