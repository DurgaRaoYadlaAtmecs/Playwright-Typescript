import { test as baseTest } from "@playwright/test";
import  RegisterPage  from "../pages/registerpage";
import  HomePage  from "../pages/homepage";
import  LoginPage  from "../pages/loginpage";
import  SpecialHotPage  from "../pages/specialhotpage";

type pages = {
    registerPage : RegisterPage,
    homePage: HomePage,
    loginPage: LoginPage,
    specialHotPage: SpecialHotPage
}

const testPages = baseTest.extend<pages>({
    registerPage:async ({page}, use) => {
        await use(new RegisterPage(page))
    },
    homePage:async ({page}, use) => {
        await use(new HomePage(page))
    },
    loginPage:async ({page}, use) => {
        await use(new LoginPage(page))
    },
    specialHotPage:async ({page}, use) => {
        await use(new SpecialHotPage(page))
    }
})

export const test = testPages;
export const expect = testPages.expect