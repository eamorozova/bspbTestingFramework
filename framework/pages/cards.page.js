import { BasePage } from './base.page';
import { Card } from '../builder';

export class CardsPage extends BasePage {
  constructor(page) {
    super(page);

    this.button = {
      block: 'text="Заблокировать"',
      confirmBlock: '#block-card',
      disableLimit: 'text=" Подключить кредитный лимит "',
      orderFirstCard: 'text="Заказать"',
      orderNewCard: '#order-new-card-link',
      orderNewCard2: '#forward',
      orderOtherBankCard: '#other-bank-card-bind',
      saveOtherCard: '#bind-card',
      sendRequest: '#inspect',
      unblockCard: '.card-unblock',
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
      offerText: '//div[@class="credit-card-offer"]',
      successText: '//div[@class="alert alert-success"]',
    };

    this.select = {
      office: '#card-branch',
    };
  }

  async addOtherBankCard() {
    const otherCard = new Card();
    await this.click(this.button.orderOtherBankCard);
    await this.fill(this.field.cardNumber, otherCard.number);
    await this.fill(this.field.cardMonth, otherCard.month);
    await this.fill(this.field.cardYear, otherCard.year);
    await this.fill(this.field.cardCVV, otherCard.CVV);
    await this.click(this.button.saveOtherCard);
    await this.fillOTP();
  }

  async blockCard() {
    await this.click(this.button.block);
    await this.click(this.button.confirmBlock);
    await this.fillOTP();
  }

  async clickOrderNewCard() {
    await this.click(this.button.orderNewCard);
  }

  async disableCreditLimit() {
    await this.click(this.button.disableLimit);
  }

  async getOfferText() {
    await this.page.waitForLoadState('networkidle');
    const element = await this.page.$(this.field.offerText);
    return element;
  }

  async orderNewCard() {
    await this.click(this.button.orderFirstCard);
    await this.page.selectOption(this.select.office, { index: 1 });
    await this.click(this.button.orderNewCard2);
    await this.fillOTP();
  }

  async orderNewLimitedCard() {
    await this.click(this.button.orderFirstCard);
    await this.fill(this.field.income, '100000');
    await this.click(this.checkbox.creditHistory);
    await this.click(this.checkbox.dataProcessing);
    await this.click(this.checkbox.mobileDataProcessing);
    await this.click(this.button.sendRequest);
    await this.fillOTP();
  }

  async unblockCard() {
    await this.click(this.button.unblockCard);
    await this.fillOTP();
  }
}
