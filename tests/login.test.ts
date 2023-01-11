import { test,  chromium } from "@playwright/test";


test('Login test demo', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    // await page.click("text=login")
    await page.click("'Login'");

    await page.fill("input[name='email']", "koushik350@gmail.com");
    await page.fill("input[name='password']", "Pass123");
    await page.click("inut[value='Login']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext();
    const newpage = await newContext.newPage();
    await newpage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await newpage.waitForTimeout(5000);

})