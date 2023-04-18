import { expect, test } from '@playwright/test';

test.describe('front page functions', () => {
	test('frontpage loads', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle("Solivan.dev");
	});
	test('list posts loads', async ({ page }) => {
		await page.goto('/');
		// TODO: Big assumption that there will always be a blog post
		await expect(page.getByRole('listitem').filter({ hasText: 'blog' }).first()).toContainText('blog');
	});
})

test.describe('blog page loads and lists posts', () => {
	test('blog page loads', async ({ page }) => {
		await page.goto('/blog');
		expect(await page.textContent('h1')).toBe('# Blog');
		await expect(page).toHaveURL('http://localhost:4173/blog');
	});
	test('list posts loads', async ({ page }) => {
		await page.goto('/');
		// TODO: Big assumption that there will always be a blog post
		await expect(page.getByRole('listitem').filter({ hasText: 'blog' }).first()).toContainText('blog');
	});
});

test('individual blog post loads', async ({ page }) => {
	await page.goto('/blog/what-is-this');
	expect(await page.textContent('h1')).toBe('# What is This?');
	await expect(page).toHaveURL('http://localhost:4173/blog/what-is-this');
});

test('about page, +page.md, loads', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About');
});

test('dark mode toggle', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
	await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
  });