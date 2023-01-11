import { test } from "@playwright/test";

test("Read API Response", async({page}) => {
    await page.goto("https://letcode.in/elements");

    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == "https://api.github.com/users/DurgaRaoYadlaAtmecs"
        ),
            await page.fill("input[name='username']", "DurgaRaoYadlaAtmecs"),
            page.click("text=Search")
    ])
    console.log(await response.json())
})