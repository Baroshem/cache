[![@nuxt-modules/cache](https://cache-nm.netlify.app/preview.png)](https://cache-nm.netlify.app)

# @nuxt-modules/cache [WIP]

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Browser and Server Cache module for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-modules/cache/releases)
- [📖 &nbsp;Read the documentation](https://cache-nc.netlify.app)

## Features

- Nuxt 3 ready
- Browser cache using headers
- Server cache using Redis, memory, etc
- Handy composables like useCache
- TypeScript support

[📖 &nbsp;Read the documentation](https://cache-nc.netlify.app)

## Setup

```sh
yarn add @nuxt-modules/cache # yarn
npm i @nuxt-modules/cache # npm
```

## Basic usage

Firstly, you need to add `@nuxt-modules/cache` to your Nuxt config.

```javascript
// nuxt.config.js

{
  modules: [
    [
      '@nuxt-modules/cache',
      {
        // TBD
      }
    ]
  ]
}
```

Then you can start using `@nuxt-modules/cache` in your setup function!

```ts
// TBD
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt-modules/cache/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxt-modules/cache

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxt-modules/cache.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxt-modules/cache

[github-actions-ci-src]: https://github.com/nuxt-modules/cache/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-modules/cache/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-modules/cache.svg
[codecov-href]: https://codecov.io/gh/nuxt-modules/cache

[license-src]: https://img.shields.io/npm/l/@nuxt-modules/cache.svg
[license-href]: https://npmjs.com/package/@nuxt-modules/cache
