import {
  afterEach, beforeEach, describe, test,
} from '@jest/globals';
import {
  goto, run, stop,
} from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { urls } from '../framework/config';

let page;

describe('Карты', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.cards);
    await pageProvider(page).start().login();
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может оформить новую карту', async () => {
    await pageProvider(page).cards().clickOrderNewCard();
    const offer = await pageProvider(page).cards().getOfferText();
    if (offer) {
      await pageProvider(page).cards().orderNewLimitedCard();
    } else {
      await pageProvider(page).cards().orderNewCard();
    }
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toBeTruthy();
  });

  test('Пользователь может добавить карту другого банка', async () => {
    await pageProvider(page).cards().addOtherBankCard();
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toBeTruthy();
  });

  test('Пользователь может заблокировать карту', async () => {
    await pageProvider(page).cards().blockCard();
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toBeTruthy();
  });

  test('Пользователь может разблокировать карту', async () => {
    await pageProvider(page).cards().unblockCard();
    const text = await pageProvider(page).cards().getSuccessText();
    expect(text).toBeTruthy();
  });
});
