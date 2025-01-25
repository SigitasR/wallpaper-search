import { test } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {CookieDialog} from "../page-objects/components/cookie-dialog";
import {SearchResultsFiler} from "../page-objects/components/search-results-filer";
import {CategoryDropdown} from "../page-objects/components/category-dropdown";
import {PriceDropdown} from "../page-objects/components/price-dropdown";
import {SearchResultsContainer} from "../page-objects/components/search-results-container";

// test.use({
//   launchOptions: {
//     slowMo: 1000
//   }
// })

test('Search for wallpaper', async ({ page }) => {

  const cookies = new CookieDialog(page)
  const navbar = new Navbar(page)
  const searchResultFilter = new SearchResultsFiler(page)
  const categoryDropDown = new CategoryDropdown(page)
  const priceDropdown = new PriceDropdown(page)
  const searchResults = new SearchResultsContainer(page)

  await page.goto(process.env.URL);

  await cookies.acceptCookies();

  await navbar.clickCategoryButton()
  await categoryDropDown.selectCategory()
  await navbar.fillSearchInput("moon")
  await navbar.clickSearchButton()
  await searchResultFilter.clickFilterButton("Price")
  await priceDropdown.checkPaid()
  await priceDropdown.dismissDropdown()

  await searchResults.scrollDownUntilLoadMoreIsVisible()

  await searchResults.expectCardsToHavePaidBadge();

  //await page.pause();
});

