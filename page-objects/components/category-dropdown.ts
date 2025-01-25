import {Dropdown} from "./dropdown";
import {Page} from "@playwright/test";

export class CategoryDropdown extends Dropdown{

    constructor(protected readonly page: Page) {
        super(page);
    }

    async selectCategory() {
        await this.dropdown.locator("label", {hasText: "Wallpapers"}).click()
        await this.dropdown.waitFor({state: "hidden"});
    }

}