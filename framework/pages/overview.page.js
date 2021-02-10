import { BasePage } from './base.page';

export class OverviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.field = {
      title: '#user-greeting',
    };
  }

  async getTitle() {
    const text = await this.page.textContent(this.field.title);
    return text;
  }
}
