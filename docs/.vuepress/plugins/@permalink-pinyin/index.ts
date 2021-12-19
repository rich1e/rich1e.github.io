import type { Plugin } from "@vuepress/core";
import { slugify } from 'transliteration';

const VuepressPluginPermalinkPinyin: Plugin = () => {
  console.log('vuepress-plugin-permalink-pinyin')
  return {
    name: 'vuepress-plugin-permalink-pinyin',
    // https://vuepress.vuejs.org/plugin/option-api.html#extendpagedata
    extendPageData: ($page) =>  {

      console.log('$page', $page)
      // $page.path was encoded by VuePress already.
      // Make sure original so I decode it once.
      const pathArr = decodeURIComponent($page.path).split('/')

      // https://github.com/andyhu/transliteration#slugifystr-options
      const options = Object.assign({}, { ignore: ['/', '.'] })

      $page.path = pathArr.map(str => slugify(str, options)).join('/')

      console.log('$page.path', $page.path)
    }
  }
}

export default VuepressPluginPermalinkPinyin