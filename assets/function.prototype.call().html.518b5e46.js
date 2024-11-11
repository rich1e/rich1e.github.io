import{d as n}from"./app.f39c3f0f.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="function-prototype-call" tabindex="-1"><a class="header-anchor" href="#function-prototype-call" aria-hidden="true">#</a> function.prototype.call()</h1><p><code>call</code> \u51FD\u6570\u7684\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ul><li>\u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570\uFF1B</li><li>\u5224\u65AD\u4F20\u5165\u5BF9\u8C61\u7684\u7C7B\u578B\u3001\u5BF9\u8C61\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8BBE\u7F6E\u4E3A <code>window</code>\uFF1B</li><li>\u5C06\u51FD\u6570\u4F5C\u4E3A\u4F20\u5165\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\uFF1B</li><li>\u4F7F\u7528\u4F20\u5165\u5BF9\u8C61\u6765\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5E76\u4FDD\u5B58\u8FD4\u56DE\u7ED3\u679C\uFF1B</li><li>\u5220\u9664\u4F20\u5165\u5BF9\u8C61\u521A\u624D\u65B0\u589E\u7684\u5C5E\u6027\uFF1B</li><li>\u8FD4\u56DE\u7ED3\u679C\uFF1B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token parameter">thisArg</span> \u4EE3\u7406\u5BF9\u8C61\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570
 * <span class="token keyword">@param</span> <span class="token parameter">args</span> \u53C2\u6570
 * <span class="token keyword">@see</span> https://github.com/mqyqingfeng/Blog/issues/11
 * <span class="token keyword">@see</span> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisArg<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this \u6307\u5411 call \u51FD\u6570\u7684\u8C03\u7528\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u662F function\uFF0C\u5219\u63D0\u793A\u9519\u8BEF</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;not a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6CE8\u610F\uFF1A\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B,</span>
  <span class="token comment">// \u6307\u5B9A\u4E3A null \u548C undefined \u7684 this \u503C\u4F1A\u81EA\u52A8\u6307\u5411\u5168\u5C40\u5BF9\u8C61(\u6D4F\u89C8\u5668\u4E2D\u5C31\u662F window \u5BF9\u8C61)</span>
  <span class="token comment">// \u503C\u4E3A\u539F\u59CB\u503C(\u6570\u5B57\uFF0C\u5B57\u7B26\u4E32\uFF0C\u5E03\u5C14\u503C)\u7684 this \u4F1A\u6307\u5411\u8BE5\u539F\u59CB\u503C\u7684\u81EA\u52A8\u5305\u88C5\u5BF9\u8C61(\u7528 Object() \u8F6C\u6362\uFF09</span>
  thisArg <span class="token operator">=</span> thisArg <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u521B\u5EFA\u552F\u4E00\u7684\u503C\uFF0C\u9632\u6B62 thisArg \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u79F0\u88AB\u8986\u76D6
   * <span class="token keyword">@see</span> https://github.com/mqyqingfeng/Blog/issues/11#issuecomment-888871162
   */</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// this \u662F\u4E00\u4E2A function \u51FD\u6570</span>
  <span class="token comment">// \u5C06\u8BE5\u51FD\u6570\u6302\u8F7D\u5230 thisArg \u5BF9\u8C61</span>
  thisArg<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6267\u884C thisArg \u5BF9\u8C61\u7684 fn \u65B9\u6CD5\uFF0C\u6539\u53D8 this \u7684\u6307\u5411</span>
  <span class="token comment">// \u51FD\u6570\u53EF\u4EE5\u6709\u8FD4\u56DE\u503C</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> thisArg<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\u9664 fn \u5C5E\u6027</span>
  <span class="token keyword">delete</span> thisArg<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,4);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
