import { Page } from "@playwright/test";


export default class RegisterPage {

    constructor(public page : Page) {}

    async enterFirstName(firstName:string) {
        await this.page.locator("#input-firstname").type(firstName)
    }

    async enterLastName(enterLastName:string) {
        await this.page.locator("input[name='lastname']").type(enterLastName)
    }

    async enterEmail(email:string) {
        await this.page.locator("input[name='email']").type(email)
    }

    async enterTelephone(telephone:string) {
        await this.page.locator("input[name='telephone']").type(telephone)
    }

    async enterPassword(entPassword:string) {
        await this.page.locator("input[name='password']").type(entPassword)
    }

    async confirmPassword(confPassword:string) {
        await this.page.locator("input[name='confirm']").type(confPassword)
    }
    
    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermandCondition() {
        await this.page.click("//label[@for='input-agree']")
    }

    async clickContinuetoRegister() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
        ])
    }

}