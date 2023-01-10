import test, { expect } from "@playwright/test";


test("Check Box", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckBox = await page.locator("id=isAgeSelected");
    expect(singleCheckBox).not.toBeChecked(); 
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();
})