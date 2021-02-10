import {
  afterEach, beforeAll, beforeEach, describe, test,
} from '@jest/globals';
import {
  goto, run, runNewContext, saveState, stop,
} from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { fragmentProvider } from '../framework/fragments';

describe('Авторизация', () => {
  let page;

  beforeEach(async () => {
    await run();
    page = await goto('https://idemo.bspb.ru');
  });

  afterEach(async () => {
    await stop();
  });
  test('Пользователь может авторизоваться в системе', async () => {
    await pageProvider(page).start().login();
    const greeting = await fragmentProvider(page).header().getGreeting();
    expect(greeting).toBe('Hello World!');
  });
});

describe('Оформление карт', () => {
  let page;

  beforeAll(async () => {
    await run();
    page = await goto('https://idemo.bspb.ru');
    await pageProvider(page).start().login();
    await saveState();
    await stop();
  });

  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/cards');
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может оформить новую карту', async () => {
    await pageProvider(page).cards().orderNewCard();
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toContain('Спасибо');
  });

  test('Пользователь может добавить карту другого банка', async () => {
    await pageProvider(page).cards().addOtherBankCard();
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toContain('добавлена.');
  });
});
