import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mama   adha rae api film balanna  yanna hithan inne oyaata puluvandha maath ekka enna? naththnam api passe plan eka venas karamuadha   office   yanavaa ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('අද රැ අපි film බලන්න  යන්න හිතන් ඉන්නේ ඔයාට පුලුවන්ද මාත් එක්ක එන්න? නත්ත්නම් අපි පස්සෙ plan එක වෙනස් කරමු');
});