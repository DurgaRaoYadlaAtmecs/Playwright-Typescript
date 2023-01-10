import test, { expect } from "@playwright/test";


test("Interactions with inputs", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageinput = await page.locator('input#user-message');
    await messageinput.scrollIntoViewIfNeeded();
    console.log(await messageinput.getAttribute("placeholder"));
    expect(messageinput).toHaveAttribute("placeholder","Please enter your Message")
    console.log(await messageinput.inputValue());

    await messageinput.type("Hai Durga Rao")
    console.log("after entering data: "+await messageinput.inputValue())
})

test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");
    const getValuesBtn = page.locator("//button[text()='Get values']");
    let num1 = 121;
    let num2 = 546;
    await sum1input.type("" + num1);
    await sum2input.type("" + num2);
    await getValuesBtn.click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult);
})