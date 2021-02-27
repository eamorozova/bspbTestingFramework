import {
  afterEach, beforeEach, describe, test,
} from '@jest/globals';
import { goto, run, stop } from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { urls } from '../framework/config';

let page;

describe('Подписки', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.subscriptions);
    await pageProvider(page).start().login();
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может создать подписку на оплату штрафов', async () => {
    await pageProvider(page).subscriptions().addTrafficFinesSubscription();
    const text = await pageProvider(page).subscriptions().getDoneText();
    expect(text).toContain('Подписка успешно создана');
  });

  test('Пользователь может создать автоплатёж', async () => {
    await pageProvider(page).subscriptions().addAutoPayment();
    const text = await pageProvider(page).subscriptions().getSuccessText();
    expect(text).toContain('Спасибо за подписку');
  });
});
