import defu from 'defu'
import { resolve } from 'pathe'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { AlgoliaOptions } from './types'

export default defineNuxtModule<AlgoliaOptions>({
  name: '@nuxt-commerce/algolia',
  configKey: 'algolia',
  setup (options: AlgoliaOptions, nuxt: Nuxt) {
    type Values = {
      [key: string]: any;
    }

    const cacheControl = (values: Values) => (req, res, next) => {
      const cacheControlValue = Object.entries(values)
        .map(([key, value]) => `${key}=${value}`)
        .join(',')

      res.setHeader('Cache-Control', cacheControlValue)

      next()
    }

    const cacheControlMiddleware = (pages: string[], headers: Values) => pages.map(pagePath => ({
      path: pagePath,
      handler: cacheControl(headers)
    }))

    https://github.com/arash16/nuxt-ssr-cache

    ...cacheControlMiddleware(['/', '/product', '/category'], {
      'max-age': 60,
      'stale-when-revalidate': 5
    }),

    if (!options.apiKey) {
      throw new Error('Missing `apiKey`')
    }

    if (!options.applicationId) {
      throw new Error('Missing `applicationId`')
    }

    nuxt.options.publicRuntimeConfig.algolia = defu(nuxt.options.publicRuntimeConfig.algolia, {
      apiKey: options.apiKey,
      applicationId: options.applicationId
    })

    addPlugin(resolve(__dirname, './plugins/algolia'))

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })
  }
})

export * from './types'

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      algolia?: AlgoliaOptions
    }
  }
  interface NuxtConfig {
    algolia?: AlgoliaOptions
  }
  interface NuxtOptions {
    algolia?: AlgoliaOptions
  }
}
