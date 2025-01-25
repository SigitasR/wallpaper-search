import {Dropdown} from "./dropdown";
import {expect, Page} from "@playwright/test";

export class PriceDropdown extends Dropdown {

    private readonly freeOption = this.dropdown.locator("div[role='option']", {hasText: "Free"})
    private readonly paidOption = this.dropdown.locator("div[role='option']", {hasText: "Paid"})

    constructor(protected readonly page: Page) {
        super(page);
    }

    async checkPaid(){
        await this.paidOption.click()
        await expect(this.paidOption.locator("span.flex[data-state]")).toHaveAttribute("data-state", "checked")
    }

    async checkFree(){
        await this.freeOption.click();
        await expect(this.freeOption.locator("span.flex[data-state]")).toHaveAttribute("data-state", "checked")
    }


}