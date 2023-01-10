import { test, chromium, Browser, BrowserContext, Page, expect } from "@playwright/test";

test.describe("how to handle windows", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/windows")
    })

    test("Home Page", async () => {
        console.log(await page.title());
        expect(await page.title()).toBe("Window handling - LetCode");
    })
    test("single page handling", async () => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ])
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");
        await newWindow.click('"Log in"');
        await newWindow.waitForNavigation();
        expect(newWindow.url()).toContain("signin");
        //await newWindow.close();
        await page.bringToFront();
        await page.click('"LetXPath"')
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

})