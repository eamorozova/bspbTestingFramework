export class NavigationBar {
  constructor(page) {
    this.page = page;

    this.accountsButton = '#accounts-index';
    this.cardsButton = '#corporate-cards-cardsoverview-index';
    this.depositsButton = '#deposits-index';
    this.loansButton = '#corporate-loans-index';
    this.overviewButton = '#bank-overview';
    this.paymentsButton = '#payments-form';
    this.payrollsButton = '#corporate-payrolls-index';
  }

  async gotoAccounts() {
    await this.page.click(this.accountsButton);
  }

  async gotoCards() {
    await this.page.click(this.cardsButton);
  }

  async gotoDeposits() {
    await this.page.click(this.depositsButton);
  }

  async gotoLoans() {
    await this.page.click(this.loansButton);
  }

  async gotoOverview() {
    await this.page.click(this.overviewButton);
  }

  async gotoPayments() {
    await this.page.click(this.paymentsButton);
  }

  async gotoPayrolls() {
    await this.page.click(this.payrollsButton);
  }
}
