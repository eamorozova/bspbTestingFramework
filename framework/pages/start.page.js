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
    await this.fill(this.field.login, 'demo');
    await this.fill(this.field.password, 'demo');
    await this.click(this.button.enterLogin);

    await this.click(this.field.optCode);
    await this.fill(this.field.optCode, '0000');
    await this.click(this.button.enterOpt);
  }
}
