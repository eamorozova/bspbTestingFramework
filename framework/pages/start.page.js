import { BasePage } from './base.page';

export class StartPage extends BasePage {
  constructor(page) {
    super(page);
    this.field = {
      login: '//input[@name="username"]',
      password: '//input[@name="password"]',
      optCode: '#otp-code',
    };
    this.button = {
      enterLogin: '#login-button',
      enterOpt: '#login-otp-button',
    };
  }

  async login() {
    await this.fillField(this.field.login, 'demo');
    await this.fillField(this.field.password, 'demo');
    await this.clickButton(this.button.enterLogin);

    await this.clickButton(this.field.optCode);
    await this.fillField(this.field.optCode, '0000');
    await this.clickButton(this.button.enterOpt);
  }
}
