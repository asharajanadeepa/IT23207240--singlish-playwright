import { test, expect } from '@playwright/test';

test('Neg_UI_0001 - Output not cleared when input cleared', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.fill('textarea', 'mama gedhara yanavaa');
  await page.fill('textarea', '');

  const output = page.locator('.translated-text');
  await expect(output).not.toBeEmpty();
});
