import {Page} from "@playwright/test";

export class WallpaperView {

    //FIXME: ugly locator
    private readonly downloadFreeButton = this.page.locator("button", {hasText: "Download Free"}).locator("visible=true")

    constructor(private readonly page: Page) {
    }

    async downloadWallpaper(){
        const downloadPromise = this.page.waitForEvent("download", { timeout: 20000})
        await this.downloadFreeButton.click()
        const download = await downloadPromise
        await download.saveAs("downloads/free-wallpaper.jpg")
    }

}