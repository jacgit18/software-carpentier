import { startAuditPreview } from './audit-preview.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import lighthouse from 'lighthouse';
import { ReportUtils } from 'lighthouse/report/renderer/report-utils.js';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { launch } from 'chrome-launcher';
import { chromium } from '@playwright/test';

const routes = ['home', 'professional-projects', 'personal-projects', 'about', 'skills', 'contact'];
let server;
let chrome;
try {
  server = await startAuditPreview();
  const { origin } = server;
  await mkdir('reports', { recursive: true });
  chrome = await launch({ chromePath: process.env.CHROME_PATH || chromium.executablePath(), chromeFlags: ['--headless', '--no-sandbox'] });
  const summary = [];
  for (const preset of ['mobile', 'desktop']) {
    for (const route of routes) {
      const result = await lighthouse(`${origin}/#/${route}`, {
        port: chrome.port, logLevel: 'error', output: ['json', 'html'],
      }, preset === 'desktop' ? desktopConfig : undefined);
      if (!result || result.lhr.runtimeError) throw new Error(JSON.stringify(result?.lhr.runtimeError));
      const stem = `reports/${preset}-${route}`;
      await writeFile(`${stem}.json`, result.report[0]);
      await writeFile(`${stem}.html`, result.report[1]);
      const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([key, value]) => [key, Math.round(value.score * 100)]));
      // Fraction categories count even zero-weight audits. The numeric category
      // score alone can be 100 while the displayed pass count still has failures.
      const fractions = Object.fromEntries(Object.entries(result.lhr.categories)
        .filter(([, category]) => category.categoryScoreDisplayMode === 'fraction')
        .map(([id, category]) => {
          const count = ReportUtils.calculateCategoryFraction({
            ...category,
            auditRefs: category.auditRefs.map(ref => ({ ...ref, result: result.lhr.audits[ref.id] })),
          });
          return [id, { passed: count.numPassed, total: count.numPassableAudits }];
        }));
      const row = { preset, route, scores, fractions, lighthouseVersion: result.lhr.lighthouseVersion, fetchTime: result.lhr.fetchTime, userAgent: result.lhr.userAgent };
      summary.push(row);
      console.log(JSON.stringify(row));
    }
  }
  await writeFile('reports/summary.json', JSON.stringify(summary, null, 2));
  if (summary.some(row => Object.values(row.scores).some(score => score < 100) ||
    Object.values(row.fractions).some(({ passed, total }) => passed !== total))) process.exitCode = 1;
} finally {
  try {
    if (chrome) await chrome.kill();
  } finally {
    await server?.close();
  }
}
