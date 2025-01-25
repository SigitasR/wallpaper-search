import {test as base} from '@playwright/test'
import {SearchPage} from "../page-objects/search-page";
import {WallpaperView} from "../page-objects/components/wallpaper-view";

type Fixtures = {
    searchPage: SearchPage
    wallpaperView: WallpaperView
}

export const test = base.extend<Fixtures>({
    searchPage: async ({page}, use) =>{
        await use(new SearchPage(page))
    },

    wallpaperView: async ({page}, use)=>{
        await use(new WallpaperView(page));
    }

})