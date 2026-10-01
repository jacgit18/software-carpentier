import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { startAuditPreview } from './audit-preview.mjs';

test('preview readiness uses the listening server, without parsing console output', async t => {
  const root = await mkdtemp(join(tmpdir(), 'portfolio-preview-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, 'dist'));
  await writeFile(join(root, 'dist/index.html'), '<!doctype html><title>Audit fixture</title>Ready');
  const server = await startAuditPreview({ root, port: 0 });
  t.after(() => server.close());
  const response = await fetch(server.origin);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /Audit fixture/);
  await server.close();
  await assert.rejects(fetch(server.origin));
});

test('missing production build fails with an actionable error', async t => {
  const root = await mkdtemp(join(tmpdir(), 'portfolio-no-build-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await assert.rejects(startAuditPreview({ root, port: 0 }), /npm run build/);
});
