import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Todo List' }).click();
  await expect(page.getByRole('heading')).toContainText('Todo List');
  await page.getByPlaceholder('Enter a new todo').click();
  await page.getByPlaceholder('Enter a new todo').fill('Test1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Enter a new todo').click();
  await page.getByPlaceholder('Enter a new todo').fill('Test 2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('li').filter({ hasText: 'Test1' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Test 2' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Test1' }).getByLabel('Delete todo').click();
  await page.getByPlaceholder('Enter a new todo').click();
  await page.getByPlaceholder('Enter a new todo').fill('Test 3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Delete todo').click();
  await page.getByRole('checkbox').check();
  await page.getByLabel('Delete todo').click();
  await page.getByPlaceholder('Enter a new todo').click();
  await page.getByPlaceholder('Enter a new todo').fill('Test 4');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Enter a new todo').click();
  await page.getByPlaceholder('Enter a new todo').fill('Test 5');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('li').filter({ hasText: 'Test 4' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Test 5' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Test 4' }).getByLabel('Delete todo').click();
  await page.getByLabel('Delete todo').click();
});

