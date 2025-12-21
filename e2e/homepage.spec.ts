import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('has correct title and meta description', async ({ page }) => {
        await expect(page).toHaveTitle(/Tratamento de Olho Seco em Caratinga/)

        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute(
            'content',
            /Especialista em tratamento de olho seco em Caratinga/
        )
    })

    test('displays header with navigation', async ({ page }) => {
        const header = page.locator('header')
        await expect(header).toBeVisible()

        // Check logo/brand
        await expect(header.getByText('Olhos Secos Caratinga')).toBeVisible()

        // Check navigation links
        await expect(header.getByRole('link', { name: 'Blog' })).toBeVisible()
        await expect(header.getByRole('link', { name: 'Vídeos' })).toBeVisible()
    })

    test('displays footer with copyright', async ({ page }) => {
        const footer = page.locator('footer')
        await expect(footer).toBeVisible()

        const currentYear = new Date().getFullYear()
        await expect(footer).toContainText(`© ${currentYear}`)
        await expect(footer).toContainText('Olhos Secos Caratinga')
    })

    test('navigates to blog page', async ({ page }) => {
        await page.getByRole('link', { name: 'Blog' }).click()
        await expect(page).toHaveURL('/blog')
    })

    test('navigates to videos page', async ({ page }) => {
        await page.getByRole('link', { name: 'Vídeos' }).click()
        await expect(page).toHaveURL('/videos')
    })

    test('is responsive on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        const header = page.locator('header')
        await expect(header).toBeVisible()
    })
})
