import playwright from 'playwright';

let browser;
let context;
let page;

async function goto(url) {
  await page.goto(url);
  return page;
}

async function run() {
  browser = await playwright.chromium.launch({
    headless: true,
  });
  context = await browser.newContext({
    locale: 'ru-RU',
  });
  page = await context.newPage();
}

async function runNewContext() {
  const storageState = JSON.parse(process.env.STORAGE);
  browser = await playwright.chromium.launch({
    headless: true,
  });
  context = await browser.newContext({
    locale: 'ru-RU',
    storageState,
  });
  page = await context.newPage();
}

async function saveState() {
  const storage = await context.storageState();
  process.env.STORAGE = JSON.stringify(storage);
}

async function stop() {
  await page.screenshot({ path: 'exampleFailed.jpg' });
  await page.close();
  await browser.close();
}

export {
  goto, run, runNewContext, saveState, stop,
};
