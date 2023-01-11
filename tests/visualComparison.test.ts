import { expect, test } from "@playwright/test";

test("Visual Comparison", async ({page}) => {
    await page.goto("https://letcode.in");

    expect(await page.screenshot()).toMatchSnapshot("../letcode.png")
})

// test("example test", async ({page}) => {
//     await page.goto("https://playwright.dev");
//     expect(await page.screenshot()).toMatchSnapshot("snapshot-name.png")
// })