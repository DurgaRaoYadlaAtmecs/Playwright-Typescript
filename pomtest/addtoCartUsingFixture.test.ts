import { expect, test } from "../base/pomFixture";
import  RegisterPage  from "../pages/registerpage";
import  HomePage  from "../pages/homepage";
import  LoginPage  from "../pages/loginpage";
import  SpecialHotPage  from "../pages/specialhotpage";

const email = "durgarao.yadla@gmail.com"
const password = "Yadla@123"

test.describe("Page object test demo", async() => {
    test("Register test_01", async ({page, baseURL, registerPage}) => {
        // const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`)
    
        await registerPage.enterFirstName("Durga Rao");
        await registerPage.enterLastName("Yadla");
        await registerPage.enterPassword("Yadla@123");
        await registerPage.confirmPassword("Yadla@123");
        await registerPage.enterEmail("durgarao.yadla@gmail.com");
        await registerPage.enterTelephone("8889909876");
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandCondition();
        await registerPage.clickContinuetoRegister();
    })
    
    test("Login test_02", async ({page, baseURL, loginPage}) => {
        // const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail("durgarao@gmail.com");
        await loginPage.enterLoginPaswword("Yadla@123");
        await loginPage.clickLoginButton();
        expect(await page.title()).toBe("My Account")
    })
    
    test("Add to Cart test_03", async ({page, baseURL, loginPage, homePage, specialHotPage}) => {
        // const login = new LoginPage(page);
        // const home = new HomePage(page);
        // const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(email, password);
        await homePage.clickonSpecialHotMenu();
        await specialHotPage.addFirstProductToTheCart();
        const isCartVisible = await specialHotPage.isToastVisible()
        expect(isCartVisible).toBeVisible();
    })
})