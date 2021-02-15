import { BasePage } from './base.page';

export class DepositsPage extends BasePage {
  constructor(page) {
    super(page);

    this.button = {
      confirm: '#confirm',
      openDeposit: '#btn-show-rates',
      openFirstDeposit: 'text="Открыть вклад"',
      submit: '#submit-button',
    };

    this.field = {
      amount: '#amount',
      successText: '//div[@class="alert alert-success"]',
    };

    this.checkbox = {
      conditions: '//input[@name="condition.newDepositConditions"]',
    };
  }

  async openDeposit() {
    await this.click(this.button.openDeposit);
    await this.click(this.button.openFirstDeposit);
    await this.page.type(this.field.amount, '50000');
    await this.page.waitForResponse(/(https:\/\/idemo\.bspb\.ru\/deposits\/calculate-rates)(.*)(amount=50000)(.*)/);
    await this.click(this.button.submit);
    await this.click(this.checkbox.conditions);
    await this.click(this.button.confirm);
  }
}
