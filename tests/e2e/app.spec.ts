import { test, expect } from '@playwright/test';

test('page can render', async ({ page }) => {
  await page.goto('/');
  expect(page).toBeTruthy();
});
