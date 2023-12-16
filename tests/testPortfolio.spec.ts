import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    //go to starting url before each test
    await page.goto('http://localhost:8000/');
 
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sam Rapley/);
});

test('hover action on project reveals project description', async ({ page }) => {

  // assigns variables to elements that have to be checked
  const cardContent = page.locator('.card_content').first()
  const paragraphDescription = cardContent.locator("p")

  // scrolls element into view and hovers over it
  await cardContent.scrollIntoViewIfNeeded()
  await cardContent.hover()

  // expects hovered para description to contain text turtle crossing game
  await expect(paragraphDescription).toContainText("turtle crossing game");
});

