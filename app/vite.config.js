import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Hash routes need only index.html. Missing resources must return 404, not HTML.
  appType: 'mpa',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script-defer',
      includeAssets: ['favicon.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Joshua Carpentier · Software Carpentier',
        short_name: 'Sw. Carpentier',
        description: 'Portfolio of Joshua Carpentier — software engineer.',
        start_url: '.',
        scope: '.',
        display: 'standalone',
        background_color: '#06285a',
        theme_color: '#06285a',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        // og-image.* is only ever fetched by link-preview crawlers (Slack, X,
        // LinkedIn, ...), never by a visiting browser — precaching it for
        // offline use would just be dead weight in the service worker cache.
        globIgnores: ['**/og-image.*']
      }
    })
  ],
  base: './'
})
