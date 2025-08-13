
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('ShubhamJha');
  await page.locator('#loginpassword').fill('3155');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator("//a[@id='logout2']")).toBeVisible()
});