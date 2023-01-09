import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test.describe("how to handle input fields", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/edit")
    })

    test("Enter Your Full Name", async () => {
        //await page.type("id=fullName", "Durga Rao")
        const name = await page.$("#fullName");
        await name?.type("Durga Rao");
    })

    test("Append a text and press keyboard tab", async () => {
       // await page.type("id=join", "I am good")
    //    const name = await page.$("#join");
    //    await name?.type("I am good")
    const join = await page.$("#join");
    await join?.focus();
    await page.keyboard.press("End");
    await join?.type(" Human");
    })

    test("What is inside the text box", async () => {
        const text = await page.getAttribute("id=getMe", "value");
        console.log(text);
    })
    test("Clear the text", async () => {
        await page.fill("//input[@value='Koushik Chatterjee']","")
    })
    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
})