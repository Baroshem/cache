import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    ['../src/module', {
      browser: {
        pages: [
          ['/', { 'max-age': 3600, 'stale-when-revalidate': 10 }],
          ['/product', { 'max-age': 3600, 'stale-when-revalidate': 10 }],
          ['/category', { 'max-age': 3600, 'stale-when-revalidate': 10 }]
        ]
      }
    }]
  ]
})
