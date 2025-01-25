import {Page} from "@playwright/test";
import {SearchBar} from "./components/search-bar";
import {CookieDialog} from "./components/cookie-dialog";
import {SearchResultsFiler} from "./components/search-results-filer";
import {CategoryDropdown} from "./components/category-dropdown";
import {PriceDropdown} from "./components/price-dropdown";
import {SearchResultsContainer} from "./components/search-results-container";

export class SearchPage {

    readonly searchBar = new SearchBar(this.page)
    readonly cookies = new CookieDialog(this.page)
    readonly resultsFilter = new SearchResultsFiler(this.page)
    readonly category = new CategoryDropdown(this.page)
    readonly price = new PriceDropdown(this.page);
    readonly results = new SearchResultsContainer(this.page)

    constructor(private readonly page: Page) {
    }

    async open(){
        await this.page.goto(process.env.URL)
    }

}