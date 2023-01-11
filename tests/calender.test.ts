import { test,  expect } from "@playwright/test";
import moment from "moment";


test("Calender demo using fill function", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-12-04";

    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000);
})

test("calender demo using momentum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.click("//input[@placeholder='Start date']");

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    let dateToSelect : string = "March 2022"
    const thisMonth = moment(dateToSelect, "MMM YYYY").isBefore();
    console.log("this month---."+thisMonth);
    while(await mmYY.textContent() != dateToSelect) {
        if(thisMonth){
            await prev.click();
        }else{
            await next.click();}
        await prev.click();
    }


    await prev.click();
    await page.click("//td[@class='day'][text()='4']");
    await page.waitForTimeout(3000);


})