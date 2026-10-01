import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

export async function startAuditPreview({
  root = fileURLToPath(new URL('../', import.meta.url)),
  port = 4175,
} = {}) {
  try {
    await access(join(root, 'dist/index.html'));
  } catch (cause) {
    throw new Error('Production build is missing. Run npm run build before npm run audit.', { cause });
  }

  // Vite resolves only after its HTTP server is listening. Console output can
  // contain ANSI escapes, be split into chunks, or be disabled entirely in CI.
  const server = await preview({
    root,
    preview: { host: '127.0.0.1', port, strictPort: true, open: false },
  });
  const address = server.httpServer.address();
  if (!address || typeof address === 'string') {
    await server.close();
    throw new Error('Preview did not bind a TCP port.');
  }
  return {
    origin: `http://127.0.0.1:${address.port}`,
    close: () => server.close(),
  };
}
