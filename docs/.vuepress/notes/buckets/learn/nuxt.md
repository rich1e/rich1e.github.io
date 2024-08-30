## 安装

```shell
npx create-nuxt-app <项目名>
yarn create nuxt-app <项目名>
```



## VS Code 配置

1. 安装依赖包

```shell
npm install eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-loader prettier -D
```

2. 创建 .eslintrc.js

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
```

3. 安装ESLint`, `Vetur插件

4. 创建.vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "vetur.validation.template": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

ref：https://dev.to/ordigital/eslint-prettier-in-nuxt-vscode-43aa





[基于Nuxt.js项目的服务端性能优化与错误检测，容错处理](https://juejin.cn/post/6844903975725383694)

[How I dealt with logs in Nuxt app using log4js](https://dev.to/mkucmus/how-i-dealt-with-logger-in-my-favorite-nuxt-app-and-log4js-3838)

[使用nuxt-winson-log打印nuxt日志与日志分级](https://www.jianshu.com/p/2d0781c759b8)

