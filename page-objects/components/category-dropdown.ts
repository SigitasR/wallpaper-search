import { Dropdown } from './dropdown';
import { Page } from '@playwright/test';

export class CategoryDropdown extends Dropdown {
    constructor(protected readonly page: Page) {
        super(page);
    }

    async selectCategory(category: string) {
        await this.dropdown.locator('label', { hasText: category }).click();
        await this.dropdown.waitFor({ state: 'hidden' });
    }
}
