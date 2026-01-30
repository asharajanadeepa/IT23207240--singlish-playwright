import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('hari mama ada eeka complete karala eyata reply ekak yawva ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('හරි මම අද ඒක complete කරල එයාට reply එකක් යැව්වා');
});