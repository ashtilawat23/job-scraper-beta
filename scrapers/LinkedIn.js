const puppeteer = require('puppeteer')
const cheerio = require('cheerio')


async function getLinkedInJobs() {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage();
    await page.goto('https://github.com/');
    await page.screenshot({ path: 'test/github.png' })

    await browser.close();
}

getLinkedInJobs();