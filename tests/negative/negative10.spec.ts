import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('Mama hithanne life eka kiyala kiyanne marathon ekak wage. Ape rathe student kenek widihata, api godak deyta face karanawa — exams, assignments, family expectations, financial pressure, ehema ehema. Samaharawita loku loku dreams thiyenawa, namuth ekata yana gamana hari amaru wenna puluwan. ');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative case
  expect(output).toContain('මම හිතන්නෙ life එක කියල කියන්නෙ marathon එකක් wage. Ape රතෙ student කෙනෙක් wඉඩිහට, අපි ගොඩක් ඩෙය්ට face කරනwඅ — exams, assignments, family expectations, financial pressure, එහෙම එහෙම. සමහරwඉට ලොකු ලොකු dreams තියෙනwඅ, නමුත් එකට යන ගමන හරි අමරු wඑන්න පුලුwඅන්.');
});