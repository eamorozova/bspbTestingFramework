export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async click(button) {
    await this.page.click(button);
  }

  async fill(field, string) {
    await this.page.click(field);
    await this.page.fill(field, string);
  }

  async fillOTP() {
    await this.page.waitForSelector('#confirmation-frame');
    const elementHandle = await this.page.$('#confirmation-frame');
    const frame = await elementHandle.contentFrame();
    await frame.fill('#otp-input', '0000');
    await frame.click('#confirm');
  }

  async getSuccessText() {
    const text = await this.page.waitForSelector('//div[@class="alert alert-success"]');
    return text;
  }
}
