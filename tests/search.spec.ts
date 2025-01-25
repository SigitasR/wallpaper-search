import { test } from '@playwright/test';
import {SearchPage} from "../page-objects/search-page";

// test.use({
//   launchOptions: {
//     slowMo: 1000
//   }
// })

test.describe('', ()=>{
  test.beforeEach(()=>{

  })

  test('Search for paid wallpapers', async ({ page }) => {

    const searchPage = new SearchPage(page)
    await searchPage.open()
    await searchPage.cookies.acceptCookies();
    await searchPage.searchBar.clickCategoryButton()
    await searchPage.category.selectCategory()
    await searchPage.searchBar.fillSearchInput("moon")
    await searchPage.searchBar.clickSearchButton()
    await searchPage.resultsFilter.clickFilterButton("Price")
    await searchPage.price.checkPaid()
    await searchPage.price.dismissDropdown()

    await searchPage.results.scrollDownUntilLoadMoreIsVisible()

    await searchPage.results.expectCardsToHavePaidBadge();

    //await page.pause();
  });

})


