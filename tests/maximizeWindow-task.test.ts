import { chromium, firefox, test, webkit } from "@playwright/test";

test.use({
    viewport: {
        height: 728,
        width: 1366
    },
    headless:false
})
test("Maximize Window new task", async () => {

    // for Firefox browser

    // const browser = await firefox.launch({args:['--position=-8,0'],headless:false, });
    // const browser = await firefox.launch({ args:['--window-size=1366,728'], headless:false });
    // const browser = await firefox.launch({args:['window.moveTo(0,-10)'],headless:false, });

    // for webkit browser

    // const browser = await webkit.launch({args:['--position=-8,0'],headless:false, });
    // const browser = await webkit.launch({ args:['--window-size=1366,728'], headless:false });
    // const browser = await webkit.launch({args:['window.moveTo(-5,-5)'],headless:false, });

    // for chromium default browser

    // const browser = await chromium.launch({args:["--start-maximized"]})
       const browser = await chromium.launch({args:['--window-position=-7,-2'],headless:false})

    // for chromium microsoft edge browser

    // const browser = await chromium.launch({
    // channel: 'msedge', args:['--window-position=-7,-2'],headless:false});

  
    
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://google.com");

    console.log(await page.viewportSize()?.width)
    console.log(await page.viewportSize()?.height)

    await browser.close()

})