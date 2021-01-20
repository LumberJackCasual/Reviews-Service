import puppeteer from 'puppeteer';

const PORT = process.env.PORT || 3003;

describe('End to End', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/`);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display content when title bar is clicked', async () => {
    await page.click('#reviews-title');
  });

  test('should only render five items in list from api', async () => {
    const items = await page.$$('.reviews-list-item');
    expect(items.length < 6).toBe(true)
  });

  test('should show a maximum of ten items on show more click', async () => {
    // await page.click('#RSM-text');
    // const items = await page.$$('.reviews-list-item');
    // expect(number).toBe(10);
  });

  test('should filter by rating when clicked', async () => {
    await page.click('[data-testid="mod-Rating"]')
    const options = await page.$$('#mod-menu-dropdown-Rating .fieldset-option');
    await options[2].click();
  });

  test('should sort by helpful and filter when selected', async () => {
    await page.click('[data-testid="mod-Sort"]');
    const options = await page.$$('#mod-menu-dropdown-Sort .fieldset-option');
    await options[1].click();
  });

  test('should clear all filter when clicked', async () => {
    await page.click("#reviews-filter-clear");
  });

  test('should only allow on patch request on helpful click', async () => {
    // const thumbs = await page.$$(".RLI-helpful-thumb");
    // // console.log(thumbs[0]);
    // await thumbs[0].click();
    // // await thumbs[0].click();
  });
});