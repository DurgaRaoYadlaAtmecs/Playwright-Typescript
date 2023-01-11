import { chromium, test } from "@playwright/test";

test("Logger", async ({page}) => {
    page.on("console", msg => {
        if(msg.type() == "error") {
            console.log(msg.text());
        }
    })

    // page.on("console", msg => {
    //         console.log(msg);
    // })
  await page.goto("https://letcode.in/elements");
  const btn = page.locator("#search");
  await btn.click();
  await page.goto("https://www.amazon.in/asas")
})