import {
  afterEach, beforeEach, describe, test,
} from '@jest/globals';
import { goto, run, stop } from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { urls } from '../framework/config';

let page;

describe('Кредиты', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.loans);
    await pageProvider(page).start().login();
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может получить кредит', async () => {
    await pageProvider(page).loans().getLoan();
    const text = await pageProvider(page).loans().getSuccessText();
    expect(text).toContain('Договор подписан');
  });
});
