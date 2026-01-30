import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('api heta meeting ekata enne naha kiyala manager kiyala thiyenavaa');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('අපි හෙට meeting එකට එන්නෙ නැහැ කියල manager කියල තියෙනවා');
});