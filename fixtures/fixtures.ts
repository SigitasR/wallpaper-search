import {test as base} from '@playwright/test'
import {SearchPage} from "../page-objects/search-page";

type Fixtures = {
    searchPage: SearchPage
}

export const test = base.extend<Fixtures>({
    searchPage: async ({page}, use) =>{
        await use(new SearchPage(page))
    }
})