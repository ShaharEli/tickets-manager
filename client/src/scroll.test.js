const puppeteer = require('puppeteer');

/* test for the scroll button the server must be
 running (so the window will have the ability to scroll) */


describe('App Test', () => {
    test('scroll up button work', async () => {
      let browser = await puppeteer.launch({
        headless: false,
        slowMo:700
      });
      let page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector(".ticket", {visible: true});
      await page.evaluate(() => { //scrolling down
        window.scrollBy(0, window.innerHeight*3);
      });    
      const btn = await page.$("#scrollBtn") //check if the scroll up button became visible after scrolling down 
      await btn.click()
      const checker = document.body.scrollTop===0 //check if the page scrolled to the top
      expect(checker).toBe(true)
      browser.close();
    }, 76000);
  });