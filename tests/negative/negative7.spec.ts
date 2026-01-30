
import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('RS 15000 k madhi thibba nisaa api trip eka cancel kalaa ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('රුපියල් 15000 ක් මදි තිබ්බ නිසා අපි trip එක cancel කලා');
});