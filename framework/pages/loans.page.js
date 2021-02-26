import { BasePage } from './base.page';

export class LoansPage extends BasePage {
  constructor(page) {
    super(page);
    this.button = {
      acceptPersonalTerms: '#accept-personal-terms-button',
      continue: '//*[@id="contentbar"]//*[text()="Продолжить"]',
      gotoReceive: '//table[@id="pre-approved-applications"]//a',
      selectPersonal: '#personal-loan-apply',
    };

    this.checkbox = {
      additionalServices: '//input[@name="condition.additionalServices"]',
      agreement: '//input[@name="condition.agreement"]',
      autoPayBack: '//input[@name="condition.autoPayBack"]',
      creditHistory: '//input[@name="condition.creditHistory"]',
      failureToFulfillObligations: '//input[@name="condition.failureToFulfillObligations"]',
      insuranceCondition: '//input[@name="condition.insuranceCondition"]',
      insurancePolicy: '//input[@name="condition.insurancePolicy"]',
      marketingInformation: '//input[@name="condition.marketingInformation"]',
      preAgreementOverview: '//input[@name="condition.preAgreementOverview"]',
      personalDataProcessing: '//input[@name="condition.personalDataProcessing"]',
      personalTerms: '//input[@name="condition.personalTerms"]',
    };

    this.field = {
      personalTerms: '#personal-terms-content',
      successText: '//div[@class="well success-info"]',
    };
  }

  async getLoan() {
    await this.click(this.button.gotoReceive);
    await this.click(this.button.continue);
    await this.click(this.button.continue);
    await this.click(this.checkbox.agreement);
    await this.click(this.checkbox.marketingInformation);
    await this.click(this.checkbox.autoPayBack);
    await this.click(this.checkbox.personalDataProcessing);
    await this.click(this.checkbox.preAgreementOverview);
    await this.click(this.checkbox.additionalServices);
    await this.click(this.checkbox.failureToFulfillObligations);
    await this.click(this.checkbox.creditHistory);
    await this.click(this.checkbox.personalTerms);
    await this.scrollElement(this.field.personalTerms);
    await this.click(this.button.acceptPersonalTerms);
    await this.click(this.checkbox.insurancePolicy);
    await this.click(this.checkbox.insuranceCondition);
    await this.fillOTP();
  }

  async getSuccessText() {
    const text = await this.page.waitForSelector(this.field.successText);
    return text;
  }
}
