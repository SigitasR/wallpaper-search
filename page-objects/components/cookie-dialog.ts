import { Page } from '@playwright/test';

export class CookieDialog {
    private readonly cookieDialogContainer = this.page.locator(
        'div.fc-dialog-container'
    );
    private readonly consentButton = this.cookieDialogContainer.locator(
        'button[aria-label="Consent"]'
    );

    constructor(private readonly page: Page) {}

    async acceptCookies() {
        await this.consentButton.click();
        await this.cookieDialogContainer.waitFor({ state: 'hidden' });
    }
}
