import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test.describe("how to handle Alert", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/alert")
    })

    test("Handle dilog", async () => {
        const ele = await page.$("#prompt");
        await ele?.click();
        page.on("dialog", (dialog) => {
            console.log("Message : "+dialog.message());
            console.log("Default Value : "+dialog.defaultValue());
            console.log("Typ : "+dialog.type());
            dialog.accept("Hello Durga");
            //dialog.dismiss();
        })
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

})