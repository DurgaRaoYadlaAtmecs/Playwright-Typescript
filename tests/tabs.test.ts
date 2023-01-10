import {test} from "@playwright/test";


test("interact with multiple tabs", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url())
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow on Twitter'")
    ])
    console.log(newWindow.url())
})