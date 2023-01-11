import { expect, test } from "@playwright/test"

test("Sig in to Git", async ({ page }) => {
    await page.goto("https://github.com/login");
    await page.fill("input:below(:text('Username or email address'))", "durgaY")
    await page.fill("#password:above(:text('Sign in'))","password")

    await page.click("a:near(:text('password'))")
    expect(page.url()).toBe("https://github.com/password_reset")

    await page.waitForTimeout(5000)
})

test.only("In depth", async({page}) => {
    await page.goto("https://mozilla.github.io/form-fill-examples/basic_cc_2.html");
    await page.fill("input:left-of(:text('Expiry Date:')):right-of(:text('Card Number:'))", "12345678");
    await page.waitForTimeout(5000)
})