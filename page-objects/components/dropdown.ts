import {Page} from "@playwright/test";

export class Dropdown {

    protected readonly dropdown = this.page.locator("div[data-radix-popper-content-wrapper]")

    constructor(protected readonly page: Page) {
    }
}