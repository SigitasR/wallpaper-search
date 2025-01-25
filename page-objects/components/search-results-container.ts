import {expect, Page} from "@playwright/test";

export class SearchResultsContainer {

    private readonly searchResultContainer = this.page.locator("div.flex div[class*='cards-container-items']")
    private readonly loadMoreButton = this.page.locator("button[data-event='CLICK_LOAD_MORE']")


    constructor(private readonly page: Page) {
    }

    async scrollDownUntilLoadMoreIsVisible(){
        do {
            await this.page.mouse.wheel(0,50)
        } while (!(await this.loadMoreButton.isVisible()))
    }

    async expectCardsToHavePaidBadge(){
        const cards = await this.getResultCards()
        for (const card of cards) {
            const cardFooter = card.locator("div[class*='card-footer']");
            await expect(cardFooter).toBeVisible()
        }
    }

    async expectCardsNotToHavePaidBadge(){
        const cards = await this.getResultCards()
        for (const card of cards) {
            const cardFooter = card.locator("div[class*='card-footer']");
            await expect(cardFooter).not.toBeVisible()
        }
    }

    async clickCard(index = 0){
        const cards = await this.getResultCards()
        await cards[index].click()
    }

    private async getResultCards(){
        return this.searchResultContainer.locator("a.flex-col").all();
    }

}