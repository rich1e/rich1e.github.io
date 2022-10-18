# Nuxt-TS: Nuxt application powered by TypeScript

Half tutorial, half exploration, I want to check out how far I can get with Nuxt+TypeScript in a full application from scratch.

**Table of contents**

- [01. Initialise Project](https://al-un.github.io/learn-nuxt-ts/01.init.html)
- \02. Switch to TypeScript
  - [02.1 Adding nuxt-ts](https://al-un.github.io/learn-nuxt-ts/02.typescript.html#adding-nuxt-ts)
  - [02.2 Update Nuxt configuration](https://al-un.github.io/learn-nuxt-ts/02.typescript.html#update-configuration)
  - [02.3 Update existing code](https://al-un.github.io/learn-nuxt-ts/02.typescript.html#update-existing-code)
- \03. Code control: formatter and linter
  - [03.1 Prettier](https://al-un.github.io/learn-nuxt-ts/03.codecontrol.html#prettier)
  - [03.2 ESLint](https://al-un.github.io/learn-nuxt-ts/03.codecontrol.html#eslint)
- \04. Polls: components & vuex
  - [04.1 Models](https://al-un.github.io/learn-nuxt-ts/04.polls.html#polls-models)
  - [04.2 Page](https://al-un.github.io/learn-nuxt-ts/04.polls.html#polls-page)
  - [04.3 Components](https://al-un.github.io/learn-nuxt-ts/04.polls.html#polls-components)
  - [04.4 Store](https://al-un.github.io/learn-nuxt-ts/04.polls.html#polls-store)
- \05. Style
  - [05.1 SCSS](https://al-un.github.io/learn-nuxt-ts/05.style.html#scss)
  - [05.2 styling](https://al-un.github.io/learn-nuxt-ts/05.style.html#styling)
  - [05.3 filters](https://al-un.github.io/learn-nuxt-ts/05.style.html#filters)
- \06. Testing
  - [06.1 Jest](https://al-un.github.io/learn-nuxt-ts/06.test.html#adding-and-configuring-jest)
  - [06.2 Testing Vuex](https://al-un.github.io/learn-nuxt-ts/06.test.html#vuex-testing)
  - [06.3 Testing Components](https://al-un.github.io/learn-nuxt-ts/06.test.html#components-testing)
  - [06.3 Coverage](https://al-un.github.io/learn-nuxt-ts/06.test.html#coverage)
- \07. Deployment
  - [07.1 Universal vs Pre-rendered vs SPA](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#universal-vs-pre-rendered-vs-spa)
  - [07.2 Surge](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#surge)
  - [07.3 AWS S3](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#aws-s3)
  - [07.4 Heroku](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#heroku)
  - [07.5 Travis CI](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#travis-ci)
  - [07.6 Circle CI](https://al-un.github.io/learn-nuxt-ts/07.deploy.html#circle-ci)

**Nuxt**

- 13-Apr-2020: switch Nuxt official TypeScript support: https://typescript.nuxtjs.org/. Migration method is described here: https://typescript.nuxtjs.org/migration.html.

  <details style="box-sizing: border-box; display: block;"><summary style="box-sizing: border-box; display: list-item; cursor: pointer;">Update steps</summary></details>

- 22-Mar-2019: [Nuxt 2.5.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.5.0)

  `nuxt-ts` is not needed anymore. Nuxt Typescript support is done by adding `@nuxt/typescript`

  <details style="box-sizing: border-box; display: block;"><summary style="box-sizing: border-box; display: list-item; cursor: pointer;">Update from Nuxt 2.4.0 is done with:</summary></details>

  As-of 24-Mar-2019, Nuxt version is 2.5.1.

  Side-effect is that as-of Nuxt 2.5.1, Nuxt does not support `"extends": "@nuxt/typescript"` and *tsconfig.json* is initialized by Nuxt:

  - `"resolveJsonModule": true` has to be added
  - `"types": ["@types/node", "@nuxt/vue-app", "@types/jest"]` has `@types/jest` added back

- 28-Jan-2019: [Nuxt 2.4.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.4.0)

  [Nuxt 2.4.0 release (Jan-2019)](https://dev.to/nuxt/nuxtjs-v240-is-out-typescript-smart-prefetching-and-more-18d) has pushed one step forward TypeScript integration into Nuxt thanks to `nuxt-ts`

  **Kudos to Nuxt team**.

This tutorial has undergone a complete refactoring on March 2019. Old version is archived at the [`archive/2019-03-09_refactoring` branch](https://github.com/Al-un/nuxt-ts/tree/archive/2019-03-09_refactoring)

参考：[learn-nuxt-ts](https://al-un.github.io/learn-nuxt-ts/)

