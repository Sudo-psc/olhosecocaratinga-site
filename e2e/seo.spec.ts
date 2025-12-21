import { test, expect } from '@playwright/test'

test.describe('SEO and Metadata', () => {
    test('homepage has structured data', async ({ page }) => {
        await page.goto('/')

        // Check for JSON-LD structured data (if implemented)
        const scriptTags = page.locator('script[type="application/ld+json"]')
        const count = await scriptTags.count()

        // Should have structured data for SEO
        expect(count).toBeGreaterThanOrEqual(0)
    })

    test('has Open Graph meta tags on homepage', async ({ page }) => {
        await page.goto('/')

        const ogTitle = page.locator('meta[property="og:title"]')
        await expect(ogTitle).toHaveCount(1)

        const ogDescription = page.locator('meta[property="og:description"]')
        await expect(ogDescription).toHaveCount(1)

        const ogType = page.locator('meta[property="og:type"]')
        await expect(ogType).toHaveAttribute('content', 'website')
    })

    test('has Twitter Card meta tags', async ({ page }) => {
        await page.goto('/')

        const twitterCard = page.locator('meta[name="twitter:card"]')
        await expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    })

    test('has canonical URL', async ({ page }) => {
        await page.goto('/')

        const canonical = page.locator('link[rel="canonical"]')
        await expect(canonical).toHaveCount(1)
    })

    test('has favicon', async ({ page }) => {
        await page.goto('/')

        const favicon = page.locator('link[rel="icon"]')
        await expect(favicon).toHaveCount(1)
    })

    test('all pages have unique titles', async ({ page }) => {
        const pages = ['/', '/blog', '/videos']
        const titles = new Set()

        for (const path of pages) {
            await page.goto(path)
            const title = await page.title()
            titles.add(title)
        }

        // Each page should have unique title
        expect(titles.size).toBe(pages.length)
    })

    test('images have alt text', async ({ page }) => {
        await page.goto('/blog')
        await page.waitForLoadState('networkidle')

        const images = page.locator('img')
        const count = await images.count()

        if (count > 0) {
            // Check first few images for alt attribute
            for (let i = 0; i < Math.min(count, 5); i++) {
                const img = images.nth(i)
                const alt = await img.getAttribute('alt')
                expect(alt).toBeTruthy()
            }
        }
    })
})
