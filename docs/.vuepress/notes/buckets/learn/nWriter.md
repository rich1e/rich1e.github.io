# nWriter

## 准备工作

    npm install -S vue vue-router vuex axios element-ui js-cookie nprogress lodash

    mkdir -p build src src/assets src/components src/main src/stylesheet src/views

    npm init

    git init

    touch .babelrc .gitignore .editorconfig README.md

    npm install --save vue vue-router

    npm install --save-dev webpack webpack-dev-server babel-cli babel-core babel-loader babel-preset-env vue-loader vue-style-loader vue-template-compiler css-loader style-loader less less-loader node-sass sass-loader autoprefixer-loader file-loader url-loader html-webpack-plugin extract-text-webpack-plugin

执行完成之后，

    ├─┬ axios@0.16.2
    │ ├─┬ follow-redirects@1.2.4
    │ │ └─┬ debug@2.6.8
    │ │   └── ms@2.0.0
    │ └── is-buffer@1.1.5
    ├─┬ element-ui@1.3.7
    │ ├── async-validator@1.6.9
    │ ├── babel-helper-vue-jsx-merge-props@2.0.2
    │ ├── deepmerge@1.4.4
    │ └── throttle-debounce@1.0.1
    ├── js-cookie@2.1.4
    ├── lodash@4.17.4
    ├── nprogress@0.2.0
    ├── vue@2.3.4
    ├── vue-router@2.7.0
    └── vuex@2.3.1

创建文件夹，结构如下：

    .
    ├── build
    ├── config
    ├── package.json
    └── src
        ├── api
        ├── assets
        ├── components
        ├── main
        ├── mock
        ├── store
        ├── style
        ├── test
        ├── utils
        └── views
