import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {CookieDialog} from "../page-objects/components/cookie-dialog";
import {SearchResultsFiler} from "../page-objects/components/search-results-filer";
import {CategoryDropdown} from "../page-objects/components/category-dropdown";
import {PriceDropdown} from "../page-objects/components/price-dropdown";

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

  await page.goto(process.env.URL);

  await cookies.acceptCookies();

  await navbar.clickCategoryButton()
  await categoryDropDown.selectCategory()
  await navbar.fillSearchInput("moon")
  await navbar.clickSearchButton()
  await searchResultFilter.clickFilterButton("Price")
  //await priceDropdown.checkFree()
  await priceDropdown.checkPaid()

  await page.keyboard.press("Escape")

  const loadMoreButton = page.locator("button[data-event='CLICK_LOAD_MORE']")

  do {
    await page.mouse.wheel(0,50)
  } while (!(await loadMoreButton.isVisible()))

  await loadMoreButton.click()

  do {
    await page.mouse.wheel(0,50)
  } while (!(await loadMoreButton.isVisible()))


  await page.pause();
});

