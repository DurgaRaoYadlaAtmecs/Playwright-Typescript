import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test.describe("screen shot", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/elements")
    })

    test("Enter Git Username", async () => {
        const ele = await page.$("input[name='username']")
        await ele?.fill("ortonikc");
        await ele?.press("Enter")
    })

    test("Print all the repos", async () => {
        await page.waitForSelector("app-gitrepos oL Li", {timeout: 5000})
        const repos = await page.$$("app-gitrepos oL Li");
        console.log("repos length---."+repos.length)

        // //for await

        // for await (const repo of repos) {
        //     console.log(await repo.innerText())
        // }
        //map
        const allURLS = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText();
        }))
        console.log(allURLS)
    })

    test.afterEach(async () => {
        await page.screenshot({path: Date.now() + 'screenshot1.png'})
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

})