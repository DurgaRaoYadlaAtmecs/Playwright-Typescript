import { test, chromium, Browser, BrowserContext, Page, expect } from "@playwright/test";

test.describe("how to handle dropdown", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/dropdowns")
    })

    test("Select a drop down based on value", async () => {
        const fruits = await page.$("#fruits");
        fruits?.selectOption("2")
        const msg = await page.$("#div.notification.is-success");
        if(msg) {
            expect(await msg.textContent()).toContain("Orange")
        }
        })
    
    test("Selet multiple", async () => {
        const heros = await page.$("#superheros");
        heros?.selectOption([
            { label: "Aqauaman"}, {value: "bt"}, {index: 8}
        ])
    })

    test("count of the select", async() => {
        const lang = await page.$$("#lang option");
        console.log("lang length----"+lang.length)
    })

    test("get selected text", async () => {
        await page.selectOption("#country", "India")
        //await page.$eval("#country", ele => ele.nodeValue)
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value);
        console.log(text);
        expect(text).toBe("India");
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

})