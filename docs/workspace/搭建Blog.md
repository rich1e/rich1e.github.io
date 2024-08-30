---
title: 搭建Blog
date: 2021-12-08
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/build-a-blog
---

<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-10-10 11:25:19
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2023-02-02 18:30:59
 * @FilePath: /rich1e.github.io/docs/workspace/搭建Blog.md
 * @Description:
 *
-->

# 搭建 Blog

[[toc]]

## 创建 Blog

使用 VuePress [^4] 创建 Blog 程序，然后将源码推送到 github。
使用 GitHub Action 部署 [^3] [^7]，Blog 默认地址为：[https://rich1e.github.io](https://rich1e.github.io)

## 购买域名

花 15 元，在 GoDaddy 买了一个人域名：[rich1e.me](https://rich1e.me)。

![image-20211209004545089](@images/workspace/image-20211209004545089.png)

## 配置 DNS [^1]

进入 GoDaddy 的 DNS 管理后台，添加 4 个 A 记录和 1 个 CNAME。

| 类型  | 名称 |        值        |
| :---: | :--: | :--------------: |
|   A   |  @   | 185.199.108.153  |
|   A   |  @   | 185.199.109.153  |
|   A   |  @   | 185.199.110.153  |
|   A   |  @   | 185.199.111.153  |
| CNAME | www  | rich1e.github.io |

建议删除其他多余的记录，以免解析错误。

![image-20211208233414103](@images/workspace/image-20211208233414103.png)

怎么查看域名是否已经解析成功了呢？[^2]

```shell
➜  ~ dig rich1e.me +nostats +nocomments +nocmd

; <<>> DiG 9.10.6 <<>> rich1e.me +nostats +nocomments +nocmd
;; global options: +cmd
;rich1e.me.			IN	A
rich1e.me.		62	IN	A	185.199.108.153
rich1e.me.		62	IN	A	185.199.109.153
rich1e.me.		62	IN	A	185.199.110.153
rich1e.me.		62	IN	A	185.199.111.153
```

如何清除缓存？

```shell
sudo killall -HUP mDNSResponder
```

> Chrome 地址栏输入：chrome://net-internals/#dns

## 配置 HTTPS

登陆 Cloudflare[^5]，注册一个账号。然后添加站点，提供已购买的域名（rich1e.me）。

Cloudflare 支持简体中文，只要按照操作指引一步步点击，即可生成域名服务器地址（nameservers）；

接着，进入 GoDaddy 后台，修改域名服务器，即可完成 HTTPS 配置。

> Cloudflare 提供 3 条免费的 Page Rules，可以通过这里开启 https 强制跳转

![image-20211209004319110](@images/workspace/image-20211209004319110.png)

[^1]: [GitHub Pages 绑定个人域名，免 Cloudflare 支持 HTTPS](https://io-oi.me/tech/custom-domains-on-github-pages/)
[^2]: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
[^3]: [VuePress 部署 GitHub Pages](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)
[^4]: [VuePress 2.0](https://v2.vuepress.vuejs.org/zh/)
[^5]: [cloudflare 使用入门教程，国外最好免费 CDN](https://zhuanlan.zhihu.com/p/82909515)
[^6]: [godaddy+cloudflare 实现自定义域名访问+https](https://codingwjl.github.io/2018/03/10/cloudflare-https/)
[^7]: [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
