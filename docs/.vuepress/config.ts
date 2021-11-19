/*
 * @Author: gongyuqi
 * @Date: 2021-11-19 15:47:15
 * @LastEditTime: 2021-11-19 16:35:56
 * @LastEditors: gongyuqi
 * @Descripttion:
 * @FilePath: \vuepress\docs\.vuepress\config.ts
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Personal Hobbies",
  description: "Just playing around",

  port: 3388,
  open: true,

  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: "@vuepress/bundler-vite",
  // Vite 打包工具的配置项
  bundlerConfig: {
    // somethings
  },

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    /**
     * @see https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
     */
    navbar: [
      {
        text: "工作",
        link: "/workspace/",
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
    sidebar: false,
  },
});
