import { test } from "@playwright/test"

test("Interact with shadow DOM", async ({page}) => {
    await page.goto("https://letcode.in/shadow");
    await page.fill("#fname", "Durga");
    await page.waitForTimeout(3000);
})

test("chromium bug app", async ({page}) => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
    //select dropdown
    const ele = await page.$("#can");
    if(ele) {
        await ele.selectOption({
            label:"Issues to verify"
        })
    }else throw new Error("Element not found");

    await page.fill("#searchq", "Some bug");
    await page.waitForTimeout(3000)
    
})