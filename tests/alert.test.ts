import test, { expect } from "@playwright/test";


test("handling alerts", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
        const text = alert.message()
        console.log(text)
        await alert.accept("Durga")
        //await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();
    //expect(page.locator("id=confirm-demo")).toContainText("Cancel");
    expect(page.locator("id=prompt-demo")).toContainText("'Durga'")

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    // await page.click("//button[@data-target='#myModal']")
    // await page.click("(//button[text()='Sav Changes'])[1]")

})