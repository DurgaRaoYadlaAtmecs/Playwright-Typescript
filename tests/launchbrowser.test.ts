import { test, chromium } from "@playwright/test";

test.describe('launch browser', () => {
    test('open chrome', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.google.com/');
        await browser.close()
    })
})