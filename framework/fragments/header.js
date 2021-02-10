export class Header {
  constructor(page) {
    this.page = page;

    this.field = {
      title: '#user-greeting',
    };
  }

  async getGreeting() {
    const text = await this.page.textContent(this.field.title);
    return text;
  }
}
