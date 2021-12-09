/*
 * @Author: gongyuqi
 * @Date: 2021-11-30 12:23:38
 * @LastEditors: gongyuqi
 * @LastEditTime: 2021-12-09 09:09:34
 * @FilePath: /rich1e.me/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import path from "path";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
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

  themeConfig: {
    // logo: "/images/logo/rich1e.svg",
    logo: false,
    sidebar: false,
    // lastUpdated: false,
    contributors: false,
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
  },
});
