import { defineNuxtModule, addServerMiddleware } from '@nuxt/kit'
import type { CacheOptions } from './types'
import { createCacheControlMiddleware } from './middleware/cache-control'

export default defineNuxtModule<CacheOptions>({
  name: '@nuxt-modules/cache',
  configKey: 'cache',
  setup (options: CacheOptions) {
    if (options.browser && !options.browser.pages.length) {
      throw new Error('Missing `browser.pages` option. Provide array of pages you want to apply cache to.')
    }

    if (options.browser && options.browser.pages.length) {
      options.browser.pages.forEach((page) => {
        if (typeof page[0] !== 'string') {
          console.error('First element of page must be a `string`')
          return
        }
        if (typeof page[1] !== 'object') {
          console.error('Second element of page must be an `object`')
          return
        }

        addServerMiddleware(createCacheControlMiddleware(page))
      })
    }
  }
})

export * from './types'
