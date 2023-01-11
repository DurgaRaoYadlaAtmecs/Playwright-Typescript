import test from "@playwright/test";


test("Download Files", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, comment & subs");
    await page.click("id=create");
    // await page.click("id=Link-to-download");
   const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])

    const filename = download[0].suggestedFilename();
    await download[0].saveAs(filename)
    //console.log(path); 
})