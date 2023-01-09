import { test, chromium } from "@playwright/test";

test.describe('Upload File', () => {
    const filePath0 = "../Playwright-Typescript/videos/video1.webm";
    const filepath1 = "../Playwright-Typescript/videos/video2.webm";

    test("upload using on functions", async () => {
        const browser = await chromium.launch({
            headless:false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on("filechooser", async (fileChooser) => {
            // await fileChooser.isMultiple();
          await fileChooser.setFiles([filePath0, filepath1])  
        })
        await page.click(".example + div#drag-drop-upload", {force: true})
    })

    test("upload file using test input", async () => {
        const browser = await chromium.launch({
            headless:false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https:/www.sendgb.com/');
        await page.setInputFiles("input[name='qqfile']", [filePath0, filepath1]);
    })
})