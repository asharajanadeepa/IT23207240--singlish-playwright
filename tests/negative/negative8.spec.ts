import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('adha udhee 7.30 AM ta Rs. 5343 gaththa bill ekata pay karalaa thiyenavaa ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('අද උදේ 7.30 AMට Rs. 5343 ගත්තා bill එකට pay කරලා තියෙනවා');
});