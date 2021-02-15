import { test } from '@jest/globals';
import { goto, run, stop } from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { fragmentProvider } from '../framework/fragments';

describe.skip('Авторизация', () => {
  test('Пользователь может авторизоваться в системе', async () => {
    await run();
    const page = await goto('https://idemo.bspb.ru');

    await pageProvider(page).start().login();
    const greeting = await fragmentProvider(page).header().getGreeting();
    expect(greeting).toBe('Hello World!');

    await stop();
  });
});
