import { test } from "@playwright/test";

test("Playwright ewait for demo ", async ({page}) => {
    await page.goto("https://Letcode.in/");
    await page.click("'Log in'");
    await page.fill("input[name='email']", "koushik1@Letcode.in");
    await page.fill("input[name='password']", "Pass123$");
    await page.click("button:has-text('LOGIN')");
    const toast = page.locator("#toast-container div.toast-info");
    await toast.waitFor({
        state:'visible'
    })
    await toast.waitFor({
        state:'hidden'
    })
    await page.click("'Sign out'")
})