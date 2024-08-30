# Webpack 漫谈

## webpack入门

## webpack高阶

## Loader

**bundle-loader**

bundle-loader是一个用来在运行时异步加载模块的loader

**exports-loader**

exports，导出的意思，顾名思义，这个loader是用来将（模块中的）某些内容导出的。之所以为“模块中的”加上括号，是因为实际上只要在模块中能被访问到的成员（变量）都可以被导出，当然也包括全局变量。+

> export导出在这里有特定含义，指将模块中的内容暴露出来，供使用方使用。例如CommonJS中的exports.xxx=xxx或者module.exports=xxx，以及AMD中的return xxx都叫导出，导出后外部模块引用时就可以使用被导出的部分。没导出的部分将作为模块私有部分，外部无法访问。

**imports-loader**

imports，顾名思义是导入的意思，这个loader的作用与exports-loader刚好相反，是用来将其它模块导入到当前模块中。这个loader常常在处理一些非模块化规范编写的文件时被用到。

**expose-loader**

expose是暴露的意思，那么expose-loader的作用即是将变量暴露到window对象下成为全局变量。

## Plugin

**html-webpack-plugin**

**clean-webpack-plugin**

**extract-text-webpack-plugin**

## Reference

[webpack指南 by @toobug](https://www.gitbook.com/book/toobug/webpack-guide/details)
