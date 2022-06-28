## 参考

https://segmentfault.com/a/1190000022777990
https://vuepress-theme-hope.github.io/md-enhance/zh/config/#
https://note.yueplus.ink/start/start.html#%E5%AE%89%E8%A3%85-tyarn
https://vuepress-theme-gungnir.vercel.app/zh/docs/plugins/md-plus.html#%E5%AE%89%E8%A3%85
https://cloud.tencent.com/developer/article/1607408
https://juejin.cn/post/6844904058231193613#heading-4
https://juejin.cn/post/6968429179125645326
https://juejin.cn/post/6937532951223599141
https://juejin.cn/post/6877125036243845128#heading-0
https://juejin.cn/post/7000572105154625567#heading-5
https://juejin.cn/post/6997198873806536717
https://juejin.cn/post/6980134339434512421

[Github+Hexo 绑定到 Godaddy 域名](https://tomorrow505.xyz/Github-Hexo%E7%BB%91%E5%AE%9A%E5%88%B0Godaddy%E5%9F%9F%E5%90%8D/)

https://segmentfault.com/a/1190000022777990
https://vuepress-theme-hope.github.io/md-enhance/zh/
https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance
https://note.yueplus.ink/start/start.html#%E7%94%9F%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84-ssh-key
https://vuepress-theme-gungnir.vercel.app/zh/docs/plugins/md-plus.html#%E5%AE%89%E8%A3%85
https://github.com/Renovamen/vuepress-theme-gungnir/blob/v2/packages/plugins/reading-time/src/node/plugin.ts
https://juejin.cn/post/6980134339434512421#heading-5
https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E4%BE%9D%E8%B5%96%E7%8E%AF%E5%A2%83
https://github.com/vuepress/vuepress-next/blob/ae5c447074e6f06c07011ed9ad729f3221c56e06/packages/%40vuepress/plugin-prismjs/src/node/prismjsPlugin.ts#L19
https://github.com/markdown-it/markdown-it#init-with-presets-and-options
https://github.com/Benbinbin/two-dishes-one-fish/blob/main/docs/.vuepress/plugins/addTime.js
https://benbinbin.github.io/Collection/postslist/folder1/
https://benbinbin.github.io/Collection/folder1/subfolder/deepfolder/example.html
https://sspai.com/post/67518
https://rich1e.me/
https://www.google.com/search?q=vuepress+markdown-it+%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91&newwindow=1&biw=1420&bih=706&sxsrf=AOaemvLXTN6W9ukn2NzzNWD9vuSe_TM3GA%3A1639017481465&ei=CWyxYaSXG5yP2roPxKiGqAo&ved=0ahUKEwjkv4z219X0AhWch1YBHUSUAaUQ4dUDCA4&uact=5&oq=vuepress+markdown-it+%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFQzQVY0yFgtiRoAXAAeACAAesBiAG5DZIBBTAuOS4xmAEAoAEBwAEB&sclient=gws-wiz
https://juejin.cn/post/6996973343280431118
https://juejin.cn/post/6844904196785831944
https://markdown-it.docschina.org/architecture.html#%E6%B8%B2%E6%9F%93%E5%99%A8-renderer
http://www.4k8k.xyz/article/my___dream/90343999
https://github.com/markdown-it/markdown-it-footnote#readme
https://juejin.cn/post/6844904023724654600#heading-4

## 使用 Vuepress 搭建基于 Vue 3.2 的组件库（保姆级教程）

> https://juejin.cn/post/7089313579169480711

## 使用捆绑器、主题和插件的方式已经完全改变

- 以获得更好的类型提示。旧的基于字符串的方式很难提供良好的类型支持。
- 更明确地说。现在我们应该明确地导入和使用主题/插件，而不是简单地在那里放一个字符串。
- 要更加规范。使用旧的基于字符串的方式，我们必须 require.resolve 在核心包内建立依赖关系，这无法与 pnpm 等一些严格的包管理器一起使用。

```
- module.exports = {
-   plugins: [
-     [
-       '@vuepress/plugin-google-analytics',
-       {
-         id: 'G-XXXXXXXXXX',
-       },
-     ],
-   ],
- }

+ const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
+ module.exports = {
+   plugins: [
+     googleAnalyticsPlugin({
+         id: 'G-XXXXXXXXXX',
+     }),
+   ],
+ }
```

> https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md#200-beta40-2022-04-25

## VuePress 标签

[vuepress 主题改造-标签云的改造(2)](https://juejin.cn/post/6844903864219467784)

[关于文档分类、归档的问题](https://github.com/vuejs/vuepress/issues/495)
