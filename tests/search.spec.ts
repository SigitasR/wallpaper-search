import { test } from '../fixtures/fixtures';
import { cleanupDownloads } from '../helpers/file-helper';

test.beforeAll(async () => {
    await cleanupDownloads();
});

test.beforeEach(async ({ searchPage }) => {
    await searchPage.open();
    await searchPage.cookies.acceptCookies();
    await searchPage.searchBar.clickCategoryButton();
    await searchPage.category.selectCategory('Wallpapers');
    await searchPage.searchBar.fillSearchInput('moon');
    await searchPage.searchBar.clickSearchButton();
    await searchPage.resultsFilter.clickFilterButton('Price');
});

test('Search for paid wallpapers', async ({ searchPage }) => {
    await searchPage.price.checkPaid();
    await searchPage.price.dismissDropdown();
    await searchPage.results.scrollDownUntilLoadMoreIsVisible();
    await searchPage.results.expectCardsToHavePaidBadge();
});

test('Search for free wallpapers', async ({ searchPage }) => {
    await searchPage.price.checkFree();
    await searchPage.price.dismissDropdown();
    await searchPage.results.scrollDownUntilLoadMoreIsVisible();
    await searchPage.results.expectCardsNotToHavePaidBadge();
});

test('Download free wallpaper', async ({ searchPage, wallpaperView, page }) => {
    await searchPage.price.checkFree();
    await searchPage.price.dismissDropdown();
    await searchPage.results.scrollDownUntilLoadMoreIsVisible();
    await searchPage.results.expectCardsNotToHavePaidBadge();
    await searchPage.results.clickCard();
    await wallpaperView.downloadWallpaper();
    await wallpaperView.assertDownloadedWallpaper();
});
