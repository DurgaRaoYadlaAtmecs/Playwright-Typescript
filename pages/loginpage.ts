import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page){}

    async login(email:string, password:string) {
        await this.enterEmail(email);
        await this.enterLoginPaswword(password);
        await this.clickLoginButton();
    }

    async enterEmail(email:string) {
        await this.page.locator("input[name='email']").type(email)
    }

    async enterLoginPaswword(password:string) {
        await this.page.locator("input[name='password']").type(password)
    }
    async clickLoginButton() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.click("input[value='Login']")
        ])
    }
}