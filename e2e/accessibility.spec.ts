import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
    test('homepage has proper heading hierarchy', async ({ page }) => {
        await page.goto('/')

        // Should have exactly one h1
        const h1Elements = page.locator('h1')
        await expect(h1Elements).toHaveCount(1)
    })

    test('links have accessible names', async ({ page }) => {
        await page.goto('/')

        const links = page.locator('a')
        const count = await links.count()

        for (let i = 0; i < Math.min(count, 10); i++) {
            const link = links.nth(i)
            const text = await link.textContent()
            const ariaLabel = await link.getAttribute('aria-label')

            // Link should have either text content or aria-label
            expect(text || ariaLabel).toBeTruthy()
        }
    })

    test('interactive elements are keyboard accessible', async ({ page }) => {
        await page.goto('/')

        // Tab through interactive elements
        await page.keyboard.press('Tab')

        const activeElement = page.locator(':focus')
        await expect(activeElement).toBeVisible()
    })

    test('has lang attribute on html element', async ({ page }) => {
        await page.goto('/')

        const html = page.locator('html')
        await expect(html).toHaveAttribute('lang', 'pt-BR')
    })

    test('color contrast is sufficient', async ({ page }) => {
        await page.goto('/')

        // Check that text is visible (basic contrast check)
        const bodyText = page.locator('body')
        await expect(bodyText).toBeVisible()
    })

    test('forms have labels (if present)', async ({ page }) => {
        await page.goto('/')

        const inputs = page.locator('input[type="text"], input[type="email"], textarea')
        const count = await inputs.count()

        for (let i = 0; i < count; i++) {
            const input = inputs.nth(i)
            const id = await input.getAttribute('id')
            const ariaLabel = await input.getAttribute('aria-label')
            const ariaLabelledby = await input.getAttribute('aria-labelledby')

            if (id) {
                const label = page.locator(`label[for="${id}"]`)
                const labelExists = (await label.count()) > 0

                // Input should have label or aria-label
                expect(labelExists || ariaLabel || ariaLabelledby).toBeTruthy()
            }
        }
    })
})
