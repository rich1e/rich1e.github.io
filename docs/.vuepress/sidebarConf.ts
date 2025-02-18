/*
 * @Author: rich1e
 * @Date: 2022-09-27 11:42:37
 * @LastEditors: rich1e
 * @LastEditTime : 2025-02-17 16:56:30
 */

// import { SidebarConfig } from "@vuepress/theme-default";

export default {
  // "/note/": [
  //   {
  //     text: "便签",
  //     children: [
  //       "/note/mac.md",
  //       "/note/Alienware.md",
  //       "/note/uPic.md",
  //       "/note/javascript.md",
  //       "/note/Vue.md",
  //       "/note/Vue3-Migration-Notes.md",
  //       "/note/VuePress.md",
  //       "/note/flex.md",
  //       "/note/rollup.md",
  //       "/note/Server-Sent-Events.md",
  //     ],
  //   },
  // ],
  "/javascript-note/": [
    {
      text: "JavaScript 笔记",
      children: [
        "/javascript-note/Object.prototype.__proto__.md",
        "/javascript-note/JavaScript 继承.md",
        "/javascript-note/for-in-for-of.md"
      ],
    },
  ],
  "/handwritten-code/": [
    {
      text: "手写代码",
      collapsible: true,
      children: [
        "/handwritten-code/Object.create().md",
        "/handwritten-code/Promise.md",
        "/handwritten-code/function.prototype.apply().md",
        "/handwritten-code/function.prototype.bind().md",
        "/handwritten-code/function.prototype.call().md",
        "/handwritten-code/instanceof.md",
        "/handwritten-code/new.md",
      ],
    },
  ],
  "/leetcode/": [
    {
      text: "LeetCode",
      children: [
        "/leetcode/初级算法 - 删除排序数组中的重复项.md",
        "/leetcode/初级算法 - 买卖股票的最佳时机.md",
        "/leetcode/初级算法 - 旋转数组.md",
      ],
    },
  ],
  "/web-development/": [
    {
      text: "Web Development",
      children: [
        "/web-development/cookies-vs-sessions.md",
        "/web-development/caching-mechanism.md",
      ]
    }
  ],
  "/uniapp/": [
    {
      text: "Uniapp",
      children: [
        "/uniapp/uniapp-disable-pagescroll-and-bance.md",
        "/uniapp/global-toast-components.md",
        "/uniapp/how-to-use-socket-in-uniapp.md"
      ]
    }
  ],
  "/data-structures-and-algorithms/": [
    {
      text: "数据结构与算法",
      children: [
        "/data-structures-and-algorithms/树的深度优先搜索与广度优先搜索.md",
      ],
    },
  ],
};
