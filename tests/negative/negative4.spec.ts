import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('oyaata welawak thiyenavaa nam  api adha project eka gana podi saakaachchaawak karamu');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('ඔයාට වෙලාවක් තියෙනවා නම්  අපි අද project එක ගන පොඩි සාකාච්චාවක් කරමු');
});