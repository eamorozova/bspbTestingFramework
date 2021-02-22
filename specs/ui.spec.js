import {
  afterEach, beforeAll, beforeEach, describe, test,
} from '@jest/globals';
import {
  goto, run, runNewContext, saveState, stop,
} from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';

let page;

beforeAll(async () => {
  await run();
  page = await goto('https://idemo.bspb.ru');
  await pageProvider(page).start().login();
  await saveState();
  await stop();
});

describe('Вклады', () => {
  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/deposits');
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может открыть вклад', async () => {
    await pageProvider(page).deposits().openDeposit();
    const text = await pageProvider(page).deposits().getSuccessText();
    expect(text).toBeTruthy();
  });
});

describe('Карты', () => {
  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/cards');
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
});

describe('Подписки', () => {
  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/subscriptions');
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может создать подписку на оплату штрафов', async () => {
    await pageProvider(page).subscriptions().addTrafficFinesSubscription();
    const text = await pageProvider(page).subscriptions().getDoneText();
    expect(text).toBeTruthy();
  });

  test('Пользователь может создать автоплатёж', async () => {
    await pageProvider(page).subscriptions().addAutoPayment();
    const text = await pageProvider(page).subscriptions().getSuccessText();
    expect(text).toBeTruthy();
  });
});

describe('Счета', () => {
  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/accounts');
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может открыть счёт', async () => {
    await pageProvider(page).accounts().openAccount();
    const text = await pageProvider(page).accounts().getSuccessText();
    expect(text).toBeTruthy();
  });

  test('Пользователь может закрыть счёт', async () => {
    await pageProvider(page).accounts().closeAccount();
    const text = await pageProvider(page).accounts().getSuccessText();
    expect(text).toBeTruthy();
  });
});

describe('Кредиты', () => {
  beforeEach(async () => {
    await runNewContext();
    page = await goto('https://idemo.bspb.ru/loans');
  });

  afterEach(async () => {
    await stop();
  });

  test('Пользователь может получить кредит', async () => {
    await pageProvider(page).loans().getLoan();
    const text = await pageProvider(page).loans().getSuccessText();
    expect(text).toBeTruthy();
  });
});
