import {Page} from "@playwright/test";

export class SearchBar {

    private readonly navContainer = this.page.locator("nav")
    private readonly searchForm = this.navContainer.locator("form")
    private readonly categoryButton = this.searchForm.locator("button[aria-haspopup='dialog']")
    private readonly searchInput = this.searchForm.locator("input#search")
    private readonly searchButton = this.searchForm.locator("button[title='Search']")

    constructor(private readonly page: Page) {
    }

    async fillSearchInput(text: string){
        await this.searchInput.fill(text);
    }

    async clickSearchButton(){
        await this.searchButton.click()
    }

    async clickCategoryButton(){
        await this.categoryButton.click()
    }

}