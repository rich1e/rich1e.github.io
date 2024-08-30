[TOC]

## Vue 3 ESLint 配置

```shell
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "extraFileExtensions": [".vue"],
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021
  },
  "rules": {
    "prettier/prettier": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-empty-function": "error",
    "vue/attributes-order": "off",
    "vue/max-attributes-per-line": "off"
  }
}
```

prettier 规则冲突，需要关闭，https://github.com/vuejs/eslint-config-typescript

```json
"rules": {
  "prettier/prettier": "off"
}
```

这个规则相对要宽松一些，https://eslint.vuejs.org/user-guide/#usage

```json
"extends": [
  "plugin:vue/vue3-essential"
]
```

Parsing error: Type expected，https://stackoverflow.com/questions/66518163/vue3-typescript-and-eslint-raise-parsing-error-expected

```json
"parserOptions": {
  "extraFileExtensions": [".vue"],
  "ecmaFeatures": {
  "jsx": true
  }
}
```

Do not use “// @ts-ignore“ because it alters compilation errors，https://stackoverflow.com/questions/59729654/how-ignore-typescript-errors-with-ts-ignore/59729735

```json
"rules": {
  "@typescript-eslint/ban-ts-comment": "off"
}
```

