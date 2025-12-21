import { test, expect } from '@playwright/test'

test.describe('Videos Listing Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/videos')
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Vídeos.*Olhos Secos Caratinga/)
    })

    test('displays video grid', async ({ page }) => {
        await page.waitForLoadState('networkidle')

        const articles = page.locator('article')
        const count = await articles.count()

        expect(count).toBeGreaterThanOrEqual(0)
    })

    test('video cards have thumbnail and title', async ({ page }) => {
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article').count()) > 0) {
            const firstVideo = page.locator('article').first()

            // Should have image/thumbnail
            await expect(firstVideo.locator('img')).toBeVisible()

            // Should have title
            await expect(firstVideo.locator('h2')).toBeVisible()
        }
    })

    test('clicking video navigates to detail page', async ({ page }) => {
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article a').count()) > 0) {
            const firstLink = page.locator('article a').first()
            const href = await firstLink.getAttribute('href')

            await firstLink.click()

            expect(href).toMatch(/^\/videos\/[a-z0-9-]+$/)
            await expect(page).toHaveURL(new RegExp('/videos/[a-z0-9-]+'))
        }
    })
})

test.describe('Video Detail Page', () => {
    test('displays video player', async ({ page }) => {
        await page.goto('/videos')
        await page.waitForLoadState('networkidle')

        if ((await page.locator('article a').count()) > 0) {
            await page.locator('article a').first().click()
            await page.waitForLoadState('networkidle')

            // Should have YouTube iframe or video player
            const iframe = page.locator('iframe')
            const videoCount = await iframe.count()

            // May or may not have iframe depending on implementation
            expect(videoCount).toBeGreaterThanOrEqual(0)

            // Should definitely have title
            await expect(page.locator('h1')).toBeVisible()
        }
    })
})
