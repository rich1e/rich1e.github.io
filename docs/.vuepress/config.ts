/*
 * @Author: gongyuqi
 * @Date: 2021-11-30 12:23:38
 * @LastEditors: rich1e
 * @LastEditTime: 2023-01-27 22:46:33
 * @FilePath: /rich1e.me/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import path from "path";

import sidebarConf from "./sidebarConf";

// markdownPlus
import markdownFootnote from "markdown-it-footnote";

// Plugins
import VuepressPluginPermalinkPinyin from "./plugins/@permalink-pinyin";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // base: "/interview/",
  head: [
    /**
     * @see https://github.com/vuejs/vuepress/issues/1653
     */
    // ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon/32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon/16x16.png" }],
    // ["link", { rel: "manifest", href: "/images/favicon/site.webmanifest" }],
    // ["link", { rel: "mask-icon", href: "/images/favicon/safari-pinned-tab.svg", color: "#3a0839" }],
    ["link", { rel: "shortcut icon", href: "/images/favicon/favicon.ico" }],
    /**
     * 首页自定义样式
     * @see https://blog.csdn.net/sinat_31213021/article/details/119383416
     * @see https://juejin.cn/post/7054090319368814623
     */
    ["link", { rel: "stylesheet", href: "/css/index.css" }],
    /**
     * vuepress配置谷歌统计
     * @see https://www.sofineday.com/vuepress-google-analytics.html
     */
    /*************** start 添加谷歌统计 ***********/
    // [
    //   "script",
    //   {
    //     src: "https://www.googletagmanager.com/gtag/js?id=G-LQXPNSFYVH",
    //     async: true,
    //   },
    // ],
    // [
    //   "script",
    //   {},
    //   `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());

    //     gtag('config', 'G-LQXPNSFYVH');
    //   `,
    // ],
    /*************** end 添加谷歌统计 ***********/
  ],

  lang: "en-US",
  title: "Personal Hobbies",
  description: "Just playing around",

  port: 3388,
  open: true,

  alias: {
    "@images": path.resolve(__dirname, "./public/images"),
  },

  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: "@vuepress/bundler-vite",
  // Vite 打包工具的配置项
  bundlerConfig: {
    // somethings
  },

  extendsMarkdown: (md) => {
    md.use(markdownFootnote);
  },

  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-5ELCHD60RW",
      },
    ],
    VuepressPluginPermalinkPinyin,
  ],

  themeConfig: {
    logo: "/images/logo/avatars.jpg",
    sidebar: sidebarConf,
    // sidebarDepth: 2,
    // lastUpdated: false,
    contributors: false,
    /**
     * @see https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
     */
    navbar: [
      {
        text: "生活",
        link: "/lifestyle/",
      },
      {
        text: "思考",
        link: "/meditate/",
      },
      {
        text: "旅游",
        link: "/traveling/",
      },
      {
        text: "√get",
        children: [
          {
            text: "便签",
            link: "/note/",
          },
          {
            text: "数据结构与算法",
            link: "/data-structures-and-algorithms/",
          },
          {
            text: "javascript 笔记",
            link: "/javascript-note/",
          },
          {
            text: "手写代码",
            link: "/handwritten-code/",
          },
          {
            text: "LeetCode",
            link: "/leetcode/",
          },
          {
            text: "Web Development",
            link: "/web-development/",
          },
          {
            text: "Uniapp",
            link: "/uniapp/",
          },
          "/workspace/README.md",
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/rich1e",
      },
    ],
  },
});
