import {expect, Page} from "@playwright/test";
import {getFileStats} from "../../helpers/file-helper";
import {envConfig} from "../../helpers/env-config";

export class WallpaperView {

    //FIXME: ugly locator
    private readonly downloadFreeButton = this.page.locator("button", {hasText: "Download Free"}).locator("visible=true")

    constructor(private readonly page: Page) {
    }

    async downloadWallpaper(){
        const downloadPromise = this.page.waitForEvent("download", { timeout: 20000})
        await this.downloadFreeButton.click()
        const download = await downloadPromise
        await download.saveAs(`${envConfig.downloadsPath}/free-wallpaper.jpg`)
    }

    async assertDownloadedWallpaper(){
        const fileStats = await getFileStats(`${envConfig.downloadsPath}/free-wallpaper.jpg`)
        expect(fileStats.size).toBeGreaterThan(20_000)
    }

}