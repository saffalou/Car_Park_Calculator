import { test, expect } from '@playwright/test';
import { URLs } from '../pages/URLs';

test.describe('Parking Cost Calculator Tests', () => {
  let urls: URLs;

  test.beforeEach(async ({ page }) => {
    // Create an instance of URLs class
    urls = new URLs(page);
    // Navigate to the calculator page
    await urls.gotoLoginPage();
     // Ensure the page has loaded by waiting for a specific element
     await expect(urls.page_header).toBeVisible();
  });

  // test.afterEach(async ({ page }) => {
  //   // Perform cleanup tasks, such as closing the page
  //   await page.close();
  // });

  test('navigate to page and check labels', async () => {
    // Check if the labels are present and visible
    await urls.labelCheck();
  });

   test('check default values in fields', async () => {
    // Explicitly wait for the fields to be visible before checking default values
    //This test was really flaky, so I added this to make sure the fields are visible before checking the default values
    // This wasn't a problem with the test above
    await expect(urls.entry_date_field).toBeVisible();     // Check if the entry date field is visible
    await expect(urls.exit_date_field).toBeVisible();      // Check if the exit date field is visible
    //Check if the default values in fields are correct
     await urls.defaultFieldValues();
  });
});