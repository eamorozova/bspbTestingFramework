import { afterEach, beforeEach, test } from '@jest/globals';
import {
  goto, run, stop,
} from '../lib/browser/browser';
import { pageProvider } from '../framework/pages';
import { fragmentProvider } from '../framework/fragments';
import { urls } from '../framework/config';

let page;

describe('Авторизация', () => {
  beforeEach(async () => {
    await run();
    page = await goto(urls.bspb);
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
