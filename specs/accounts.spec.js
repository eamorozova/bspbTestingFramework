import {
  afterEach, beforeEach, describe, test,
} from '@jest/globals';
import { goto, run, stop } from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { urls } from '../framework/config';

let page;

describe('Счета', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.accounts);
    await pageProvider(page).start().login();
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может открыть счёт', async () => {
    await pageProvider(page).accounts().openAccount();
    const text = await pageProvider(page).accounts().getSuccessText();
    expect(text).toContain('Открыт новый счёт');
  });

  test('Пользователь может закрыть счёт', async () => {
    await pageProvider(page).accounts().closeAccount();
    const text = await pageProvider(page).accounts().getSuccessText();
    expect(text).toMatch(/Счёт (\d|\s){24} закрыт/);
  });
});
