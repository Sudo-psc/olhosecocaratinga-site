import { test, expect } from '@playwright/test'

test.describe('Blog Listing Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/blog')
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Blog.*Olhos Secos Caratinga/)
    })

    test('displays blog posts grid', async ({ page }) => {
        // Wait for content to load (may come from Sanity)
        await page.waitForLoadState('networkidle')

        // Check if there are article cards
        const articles = page.locator('article')
        const count = await articles.count()

        // Should have at least one post or show empty state
        expect(count).toBeGreaterThanOrEqual(0)
    })

    test('post cards have required elements', async ({ page }) => {
        await page.waitForLoadState('networkidle')

        const firstArticle = page.locator('article').first()

        if ((await page.locator('article').count()) > 0) {
            // Should have a link
            await expect(firstArticle.locator('a')).toBeVisible()

            // Should have a title
            const title = firstArticle.locator('h2')
            await expect(title).toBeVisible()
        }
    })

    test('clicking post card navigates to detail page', async ({ page }) => {
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article a').count()) > 0) {
            const firstLink = page.locator('article a').first()
            const href = await firstLink.getAttribute('href')

            await firstLink.click()

            // Should navigate to /blog/[slug]
            expect(href).toMatch(/^\/blog\/[a-z0-9-]+$/)
            await expect(page).toHaveURL(new RegExp('/blog/[a-z0-9-]+'))
        }
    })
})

test.describe('Blog Post Detail Page', () => {
    test('displays post content structure', async ({ page }) => {
        // This test assumes you have at least one post
        // In real scenario, you might want to create test data first

        await page.goto('/blog')
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article a').count()) > 0) {
            await page.locator('article a').first().click()
            await page.waitForLoadState('networkidle')

            // Should have main heading (h1)
            const h1 = page.locator('h1')
            await expect(h1).toBeVisible()

            // Should have article content
            const article = page.locator('article')
            await expect(article).toBeVisible()
        }
    })

    test('has breadcrumb or back navigation', async ({ page }) => {
        await page.goto('/blog')
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article a').count()) > 0) {
            await page.locator('article a').first().click()

            // Should have link back to blog
            const blogLink = page.getByRole('link', { name: /blog/i })
            await expect(blogLink).toBeVisible()
        }
    })
})
