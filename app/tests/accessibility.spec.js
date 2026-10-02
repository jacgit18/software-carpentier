import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const pages = ['home', 'professional-projects', 'personal-projects', 'about', 'skills', 'contact'];
for (const route of pages) {
  test(`${route}: AAA automated checks, reflow and targets`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(`/#/${route}`);
    await expect(page.locator('main h1')).toHaveCount(1);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
    for (const enlarged of [false, true]) {
      if (enlarged) await page.addStyleTag({ content: 'html { font-size: 200% !important } * { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important } p { margin-bottom: 2em !important }' });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    const targets = await page.locator('a:visible, button:visible').evaluateAll(elements => elements.filter(el => !el.classList.contains('skip-link')).map(el => ({ text: el.textContent, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height })));
    expect(targets.filter(t => t.width < 44 || t.height < 44)).toEqual([]);
  });
}
test('keyboard navigation, skip link and browser history', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main h1')).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'About', exact: true }).click();
  await expect(page.locator('main')).toBeFocused();
  await expect(page.locator('main h1')).toHaveText('About Me');
  await page.goBack();
  await expect(page.locator('main h1')).toHaveText('Software Carpentier');
});
test('mobile menu closes with Escape and returns focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
});
test('reading preferences apply and persist across pages and reloads', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Reading preferences', { exact: true }).click();
  await page.getByLabel('Color theme').selectOption('light');
  await page.getByLabel('Text size').selectOption('large');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('html')).toHaveAttribute('data-text-size', 'large');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
});
for (const theme of ['blueprint', 'light', 'dark']) {
  for (const width of [320, 1440]) {
    test(`${theme} at ${width}px: every page and expanded reading tools`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.addInitScript(value => localStorage.setItem('reading-theme', value), theme);
      for (const route of pages) {
        await page.goto(`/#/${route}`);
        await page.locator('details').evaluateAll(items => items.forEach(item => item.open = true));
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
        expect(results.violations, route).toEqual([]);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true);
      }
    });
  }
}
test('agent discovery summary is readable and missing catalogs return 404', async ({ request }) => {
  const summary = await request.get('/llms.txt');
  expect(summary.status()).toBe(200);
  expect(summary.headers()['content-type']).toContain('text/plain');
  const content = await summary.text();
  expect(content).toMatch(/^# .+/m);
  expect(content).toMatch(/\[.+\]\(.+\)/);
  expect(content).not.toContain('<!doctype html>');
  const catalog = await request.get('/.well-known/ai-catalog.json');
  expect(catalog.status()).toBe(404);
});
for (const width of [375, 1440]) {
  test(`personal project illustrations share a stable frame at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/#/personal-projects');
    const cards = page.locator('#page-personal-projects article');
    await expect(cards).toHaveCount(4);
    const images = cards.locator('.fig img');
    await expect(images).toHaveCount(4);
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect.poll(() => img.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
      await expect(img).toHaveAttribute('width', '460');
      await expect(img).toHaveAttribute('height', '300');
    }
    const boxes = await images.evaluateAll(items => items.map(el => ({width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height})));
    for (const box of boxes) {
      expect(Math.abs(box.width - boxes[1].width)).toBeLessThan(1);
      expect(Math.abs(box.height - boxes[1].height)).toBeLessThan(1);
      expect(Math.abs(box.width / box.height - 460 / 300)).toBeLessThan(.01);
    }
  });
}
for (const width of [320, 1440]) {
  test(`header dark mode stays in sync with reading preferences at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Dark mode', exact: true });
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.getByText('Reading preferences', { exact: true }).click();
    await expect(page.getByLabel('Color theme')).toHaveValue('dark');
    await page.reload();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await page.getByText('Reading preferences', { exact: true }).click();
    await page.getByLabel('Color theme').selectOption('light');
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await toggle.focus();
    await page.keyboard.press('Space');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.keyboard.press('Space');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
