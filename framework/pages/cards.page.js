import { BasePage } from './base.page';

export class CardsPage extends BasePage {
  constructor(page) {
    super(page);
    this.button = {
      orderFirstCard: 'text="Заказать"',
      orderNewCard: '#order-new-card-link',
      orderNewCard2: '#forward',
      orderOtherBankCard: '#other-bank-card-bind',
      saveOtherCard: '#bind-card',
      sendRequest: '#inspect',
    };

    this.checkbox = {
      creditHistory: '//input[@name="condition.creditHistory"]',
      dataProcessing: '//input[@name="condition.personalDataProcessing"]',
      mobileDataProcessing: '//input[@name="condition.mobileSubscriberDataProcessing"]',
    };

    this.field = {
      cardCVV: '//input[@name="card.cvv"]',
      cardMonth: '//input[@name="card.validityMonth"]',
      cardNumber: '//input[@name="card.number"]',
      cardYear: '//input[@name="card.validityYear"]',
      income: '//input[@name="application.monthlyIncome"]',
      successText: '//div[@class="alert alert-success"]',
    };

    this.select = {
      office: '#card-branch',
    };
  }

  async addOtherBankCard() {
    await this.clickButton(this.button.orderOtherBankCard);
    await this.fillField(this.field.cardNumber, '5555555555555555');
    await this.fillField(this.field.cardMonth, '12');
    await this.fillField(this.field.cardYear, '2023');
    await this.fillField(this.field.cardCVV, '222');
    await this.clickButton(this.button.saveOtherCard);

    await this.fillOTP();
  }

  async getSuccessText() {
    const text = await this.page.textContent(this.field.successText);
    return text;
  }

  async orderNewCard() {
    await this.page.click(this.button.orderNewCard);
    await this.page.click(this.button.orderFirstCard);

    await this.page.selectOption(this.select.office, { label: 'Центральный: 197374, г. Сланцы, пр. Космонавтов, д. 100A' });
    await this.page.click(this.button.orderNewCard2);

    // Другая версия
    // await this.fillField(this.field.income, '100000');
    // await this.page.click(this.checkbox.creditHistory);
    // await this.page.click(this.checkbox.dataProcessing);
    // await this.page.click(this.checkbox.mobileDataProcessing);
    // await this.page.click(this.button.sendRequest);

    await this.fillOTP();
  }
}
