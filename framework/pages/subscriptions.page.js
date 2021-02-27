import { BasePage } from './base.page';
import { randomNumber } from '../config/randomNumber.config';

export class SubscriptionsPage extends BasePage {
  constructor(page) {
    super(page);

    this.button = {
      addSubscription: 'text="Добавить подписку или автоплатеж"',
      fines: '#tax-and-traffic-charges',
      checkFines: 'text="Проверить штрафы"',
      createSubscription: 'text="Создать подписку"',
      utility: '//a[@class="name type-UTILITY"]',
      utilityPayment: '//a[contains(text(),"Оплата ЖКУ")]',
      autoPayment: '//button[@data-name="subscription.autoPayment"]',
    };

    this.field = {
      doneText: '//*[@id="subscription-notifications-container"]/div[@class="alert alert-info"]',
      drivingLicense: '//input[@name="drivingLicense"]',
      subscriptionName: '//input[@name="subscription.name"]',
      subscriptionAccount: '//input[@name="subscription.ref"]',
      subscriptionMaxInvoice: '//input[@name="subscription.maxInvoiceAmount"]',
    };
  }

  async addTrafficFinesSubscription() {
    await this.click(this.button.addSubscription);
    await this.click(this.button.fines);
    await this.click(this.button.checkFines);
    await this.fill(this.field.drivingLicense, randomNumber(10));
    await this.click(this.button.createSubscription);
  }

  async addAutoPayment() {
    await this.click(this.button.addSubscription);
    await this.click(this.button.utility);
    await this.click(this.button.utilityPayment);
    await this.fill(this.field.subscriptionName, 'Оплата ЖКХ');
    await this.fill(this.field.subscriptionAccount, randomNumber(12));
    await this.click(this.button.autoPayment);
    await this.fill(this.field.subscriptionMaxInvoice, '10000');
    await this.click(this.button.createSubscription);
    await this.fillOTP();
  }

  async getDoneText() {
    const text = await this.page.textContent(this.field.doneText);
    return text;
  }
}
