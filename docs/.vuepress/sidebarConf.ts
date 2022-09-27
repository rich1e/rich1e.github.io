/*
 * @Author: rich1e
 * @Date: 2022-09-27 11:42:37
 * @LastEditors: rich1e
 * @LastEditTime: 2022-09-27 15:14:01
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
      children: ["/javascript-note/JavaScript继承.md", "/javascript-note/for-in-for-of.md"],
    },
  ],
  "/handwritten-code/": [
    {
      text: "手写代码",
      collapsible: true,
      children: [
        "/handwritten-code/Object.prototype.__proto__.md",
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
        "/leetcode/初级算法-删除排序数组中的重复项.md",
        "/leetcode/初级算法-买卖股票的最佳时机.md",
        "/leetcode/初级算法-旋转数组.md",
      ],
    },
  ],
  // "/workspace/": [
  //   {
  //     text: "Workspace",
  //     children: [
  //       "/workspace/搭建Blog.md",
  //       "/workspace/特斯拉前端面试题.md",
  //       "/workspace/Windows上搭建前端开发环境.md",
  //       "/workspace/前端开发调试新姿势-VS_Code_Remote_Development.md",
  //       "/workspace/Windows10中配置WSL2与Ubuntu（进阶）.md",
  //       "/workspace/macOS_Catalina-支持NTFS文件系统的若干方案.md",
  //       "/workspace/再读Vue3文档-响应式基础.md",
  //     ],
  //   },
  // ],
};
