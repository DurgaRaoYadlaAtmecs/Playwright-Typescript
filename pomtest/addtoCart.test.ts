import { expect, test } from "@playwright/test";
import  RegisterPage  from "../pages/registerpage";
import  HomePage  from "../pages/homepage";
import  LoginPage  from "../pages/loginpage";
import  SpecialHotPage  from "../pages/specialhotpage";

const email = "durgarao.yadla@gmail.com"
const password = "Yadla@123"

test.describe("Page object test demo", async() => {
    test("Register test_01", async ({page, baseURL}) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`)
    
        await register.enterFirstName("Durga Rao");
        await register.enterLastName("Yadla");
        await register.enterPassword("Yadla@123");
        await register.confirmPassword("Yadla@123");
        await register.enterEmail("durgarao.yadla@gmail.com");
        await register.enterTelephone("8889909876");
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandCondition();
        await register.clickContinuetoRegister();
    })
    
    test("Login test_02", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail("durgarao@gmail.com");
        await login.enterLoginPaswword("Yadla@123");
        await login.clickLoginButton();
        expect(await page.title()).toBe("My Account")
    })
    
    test("Add to Cart test_03", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        const home = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await home.clickonSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible()
        expect(isCartVisible).toBeVisible();
    })
})