import { test, expect } from '@playwright/test';

test('Header is Todo List', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading')).toContainText('Todo List');
});

test("New Todo is Test1", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Enter a new todo").click();
  await page.getByPlaceholder("Enter a new todo").fill("Test1");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.locator("span")).toContainText("Test1");
});

test("Add, check, delete", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Enter a new todo").click();
  await page.getByPlaceholder("Enter a new todo").fill("New task");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.locator("span")).toContainText("New task");
  await page.getByRole("checkbox").check();
  await expect(page.getByLabel("Delete todo")).toBeVisible();
  await page.getByLabel("Delete todo").click();
});