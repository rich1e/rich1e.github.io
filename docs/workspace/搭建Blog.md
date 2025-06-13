---
title: 搭建 Blog
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

![image-20211209004545089](@images/workspace/build-a-blog/image-20211209004545089.png)

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

![image-20211208233414103](@images/workspace/build-a-blog/image-20211208233414103.png)

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

## 配置 HTTPS [^6]

登陆 Cloudflare[^5]，注册一个账号。然后添加站点，提供已购买的域名（rich1e.me）。

Cloudflare 支持简体中文，只要按照操作指引一步步点击，即可生成域名服务器地址（nameservers）；

接着，进入 GoDaddy 后台，修改域名服务器，即可完成 HTTPS 配置。

> Cloudflare 提供 3 条免费的 Page Rules，可以通过这里开启 https 强制跳转

![image-20211209004319110](@images/workspace/build-a-blog/image-20211209004319110.png)

Update 2025/06/13
---

最近更换了域名，在 Godaddy 以 `$1 ≈ ¥7` 价格购买了新域名 `rich1e.xyz`。

重新配置了 Github 和 Cloudflare，这里记录一下。

1. 在 Godaddy 后台，添加 4 条 A 记录，参考上面👆；
2. 打开 Github，在 Settings 中验证域名，具体步骤参考 [^8] [^9]：主要是在 DNS 里面配置一条 TXT 记录；

> 验证成功后，会有 `Verified` 标志

![image-20211209004319110](@images/workspace/build-a-blog/image-20250613111429.png)

3. 接着，在 Project 中添加自定义域名，并开启 Https；

![image-20211209004319110](@images/workspace/build-a-blog/image-20250613113709.png)

Godaddy 购买的域名，开启 Https，需要付费。因此，需要配置 Cloudflare。

4. 在 Cloudflare 中选择“连接域”，填写域名“rich1e.xyz”，后面跟着 next 就可以了；
5. 最后 Cloudflare 页面会给你 2 个 DNS Server 的地址，将地址填写到 Godaddy 域名服务器中即可；

![image-20211209004319110](@images/workspace/build-a-blog/image-20250613120737.png)

6. 以上配置要过一会才会生效，然后打开 Cloudflare 中查看 DNS 记录：

![image-20211209004319110](@images/workspace/build-a-blog/image-20250613121531.png)

![image-20211209004319110](@images/workspace/build-a-blog/image-20250613121544.png)

7. 这样就算配置完成了。

### 验证 Cloudflare 是否生效 [^10]

```sh{2,3}
❯ dig NS rich1e.xyz +short
hal.ns.cloudflare.com.
ariadne.ns.cloudflare.com.
```

```sh{20}
❯ curl -I rich1e.xyz
HTTP/1.1 301 Moved Permanently
Date: Fri, 13 Jun 2025 04:59:47 GMT
Content-Type: text/html
Connection: keep-alive
Location: https://rich1e.xyz/
X-GitHub-Request-Id: A14B:175C15:15A908:16AF8F:684BB042
Accept-Ranges: bytes
Age: 0
Via: 1.1 varnish
X-Served-By: cache-nrt-rjtf7700033-NRT
X-Cache: MISS
X-Cache-Hits: 0
X-Timer: S1749790787.826209,VS0,VE220
Vary: Accept-Encoding
X-Fastly-Request-ID: 095c71eac4d7933e1ecae4db20b0adc30d4250a1
cf-cache-status: DYNAMIC
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=i9Gx5wotq1YURn%2BoDw0RruhvIFgFwk5El7U2lJq3tgOTtrH0jdH5Wnw0osiGBPVoGop55YstG3OFPb4rd5%2F1O5s3EQtNIvDQgvgPz%2FPoyN3egsNOHyk9NVJQvVnH"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 94ef0540fa3f0b53-HKG
alt-svc: h3=":443"; ma=86400
server-timing: cfL4;desc="?proto=TCP&rtt=32052&min_rtt=32052&rtt_var=16026&sent=1&recv=3&lost=0&retrans=0&sent_bytes=0&recv_bytes=74&delivery_rate=0&cwnd=75&unsent_bytes=0&cid=0000000000000000&ts=0&x=0"
```


[^1]: [GitHub Pages 绑定个人域名，免 Cloudflare 支持 HTTPS](https://io-oi.me/tech/custom-domains-on-github-pages/)
[^2]: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
[^3]: [VuePress 部署 GitHub Pages](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)
[^4]: [VuePress 2.0](https://v2.vuepress.vuejs.org/zh/)
[^5]: [cloudflare 使用入门教程，国外最好免费 CDN](https://zhuanlan.zhihu.com/p/82909515)
[^6]: [godaddy+cloudflare 实现自定义域名访问+https](https://codingwjl.github.io/2018/03/10/cloudflare-https/)
[^7]: [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[^8]: [管理 GitHub Pages 站点的自定义域 - GitHub 文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#dns-records-for-your-custom-domain)
[^9]: [验证 GitHub Pages 的自定义域 - GitHub 文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
[^10]: [国外域名如何解析到服务器？Dynadot DNS 设置+Cloudflare 加速全攻略 - 阿小信的博客](https://blog.axiaoxin.com/post/dynadot-dns-setup-guide/)
