import {
  afterEach, beforeEach, describe, test,
} from '@jest/globals';
import { goto, run, stop } from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { urls } from '../framework/config';

let page;

describe('Вклады', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.deposits);
    await pageProvider(page).start().login();
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может открыть вклад', async () => {
    await pageProvider(page).deposits().openDeposit();
    const text = await pageProvider(page).deposits().getSuccessText();
    expect(text).toContain('Вклад открыт.');
  });
});
