/*
 * @Author: gongyuqi
 * @Date: 2021-11-30 12:23:38
 * @LastEditors: rich1e
 * @LastEditTime: 2022-08-06 19:56:21
 * @FilePath: /rich1e.me/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import path from "path";

// markdownPlus
import markdownFootnote from "markdown-it-footnote";

// Plugins
import VuepressPluginPermalinkPinyin from "./plugins/@permalink-pinyin";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // head: [
  //   /**
  //    * vuepress配置谷歌统计
  //    * @see https://www.sofineday.com/vuepress-google-analytics.html
  //    */
  //   /*************** start 添加谷歌统计 ***********/
  //   [
  //     "script",
  //     {
  //       src: "https://www.googletagmanager.com/gtag/js?id=G-LQXPNSFYVH",
  //       async: true,
  //     },
  //   ],
  //   [
  //     "script",
  //     {},
  //     `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());

  //       gtag('config', 'G-LQXPNSFYVH');
  //     `,
  //   ],
  //   /*************** end 添加谷歌统计 ***********/
  // ],

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
      "@vuepress/google-analytics",
      {
        ga: "UA-236278732-1", // UA-00000000-0
      },
    ],
    VuepressPluginPermalinkPinyin,
  ],

  themeConfig: {
    logo: "/images/logo/avatars.jpg",
    // logo: null,
    sidebar: false,
    // lastUpdated: false,
    contributors: false,
    /**
     * @see https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
     */
    navbar: [
      {
        text: "工作",
        children: [
          {
            text: "便签",
            link: "/note/",
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
          "/workspace/README.md",
        ],
      },
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
    ],
  },
});
