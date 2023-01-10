import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test.describe("how to handle Frames", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })

        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://Letcode.in/frame")
    })

    test("Interact With frames", async () => {
        const frame = page.frame({name: "firstFr"})
        //frame?.fill("");
        if(frame != null) {
            await frame.fill("input[name='fname']", "Durga rao")
            await frame.fill("input[name='Lname']", "Yadla")

             //inner frame
            const frames = frame.childFrames();
        console.log("No Of inner frames--> "+frames.length);
        if(frames != null) {
            await frames[0].fill("input[name='email']", "durgarao.yadla@gmail.com")
        }else{
            console.log('wrong frame---')
        }

         const parent = frames[0].parentFrame();
         await parent?.fill("input[name='Lname']", "You Tube")
        } else  throw new Error("No such Frame");
        
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })

})