import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'PAI Ceria - Sahabat Mengajar Ibu Guru PAI SD',
        short_name: 'PAI Ceria',
        description: 'Aplikasi Pembelajaran PAI SD Kelas 1, 5, dan 6 (Kurikulum Merdeka CP Lama & CP Baru) Dilengkapi Game Edukatif Interaktif',
        theme_color: '#0F766E',
        background_color: '#F0FDF4',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

