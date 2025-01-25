import {Page} from "@playwright/test";

export class SearchResultsFiler {

    private readonly searchResultFilterContainer = this.page
        .locator("div[data-direction]")
        .filter({has: this.page.locator("button")});

    constructor(private readonly page: Page) {
    }

    async clickFilterButton(title: string){
        await this.page.locator("button", {hasText: title}).click()
    }

}