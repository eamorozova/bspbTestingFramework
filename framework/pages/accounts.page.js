import { BasePage } from './base.page';

export class AccountsPage extends BasePage {
  constructor(page) {
    super(page);

    this.button = {
      closeAccount: '//td[starts-with(text(),"0.00")]/following-sibling::td//a[@class="close-account-link"]',
      closeForward: 'text="Дальше"',
      newAccount: 'text="Открыть счёт"',
      options: '//td[starts-with(text(),"0.00")]/following-sibling::td//button',
      submit: '#submit',
    };

    this.checkbox = {
      newAccountConditions: '//input[@name="condition.newAccountConditions"]',
    };
  }

  async openAccount() {
    await this.click(this.button.newAccount);
    await this.click(this.checkbox.newAccountConditions);
    await this.click(this.button.submit);
  }

  async closeAccount() {
    await this.click(this.button.options);
    await this.click(this.button.closeAccount);
    await this.click(this.button.closeForward);
    await this.fillOTP();
  }
}
