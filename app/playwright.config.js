import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:4180', launchOptions: { executablePath: process.env.CHROME_PATH || undefined, args: ['--no-sandbox'] } },
  webServer: { command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4180 --strictPort', url: 'http://127.0.0.1:4180', reuseExistingServer: false },
});
