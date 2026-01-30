import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('hetaapiyaluwangegedharatagihillatikakvelainnahithaninne ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('හෙට අපි යාලුවන්ගේ ගෙදරට ගිහින් ටිකක් වෙලා ඉන්න හිතන් ඉන්නේ');
});