import{d as n}from"./app.f39c3f0f.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">RESOLVED</span> <span class="token operator">=</span> <span class="token string">&quot;resolved&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyPromise</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4FDD\u5B58\u521D\u59CB\u5316\u72B6\u6001</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u59CB\u5316\u72B6\u6001</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7528\u4E8E\u4FDD\u5B58 resolve \u6216\u8005 rejected \u4F20\u5165\u7684\u503C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7528\u4E8E\u4FDD\u5B58 resolve \u7684\u56DE\u8C03\u51FD\u6570</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7528\u4E8E\u4FDD\u5B58 reject \u7684\u56DE\u8C03\u51FD\u6570</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u72B6\u6001\u8F6C\u53D8\u4E3A resolved \u65B9\u6CD5</span>
  <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u4F20\u5165\u5143\u7D20\u662F\u5426\u4E3A Promise \u503C\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u72B6\u6001\u6539\u53D8\u5FC5\u987B\u7B49\u5F85\u524D\u4E00\u4E2A\u72B6\u6001\u6539\u53D8\u540E\u518D\u8FDB\u884C\u6539\u53D8</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4FDD\u8BC1\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53EA\u6709\u72B6\u6001\u4E3A pending \u65F6\u624D\u80FD\u8F6C\u53D8\uFF0C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4FEE\u6539\u72B6\u6001</span>
        self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">RESOLVED</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8BBE\u7F6E\u4F20\u5165\u7684\u503C</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

        <span class="token comment">// \u6267\u884C\u56DE\u8C03\u51FD\u6570</span>
        self<span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u72B6\u6001\u8F6C\u53D8\u4E3A rejected \u65B9\u6CD5</span>
  <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4FDD\u8BC1\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53EA\u6709\u72B6\u6001\u4E3A pending \u65F6\u624D\u80FD\u8F6C\u53D8</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4FEE\u6539\u72B6\u6001</span>
        self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8BBE\u7F6E\u4F20\u5165\u7684\u503C</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

        <span class="token comment">// \u6267\u884C\u56DE\u8C03\u51FD\u6570</span>
        self<span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06\u4E24\u4E2A\u65B9\u6CD5\u4F20\u5165\u51FD\u6570\u6267\u884C</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9047\u5230\u9519\u8BEF\u65F6\uFF0C\u6355\u83B7\u9519\u8BEF\uFF0C\u6267\u884C reject \u51FD\u6570</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9996\u5148\u5224\u65AD\u4E24\u4E2A\u53C2\u6570\u662F\u5426\u4E3A\u51FD\u6570\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u53C2\u6570</span>
  onResolved <span class="token operator">=</span>
    <span class="token keyword">typeof</span> onResolved <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span>
      <span class="token operator">?</span> <span class="token function-variable function">onResolved</span>
      <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onRejected <span class="token operator">=</span>
    <span class="token keyword">typeof</span> onRejected <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span>
      <span class="token operator">?</span> <span class="token function-variable function">onRejected</span>
      <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> error<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5982\u679C\u662F\u7B49\u5F85\u72B6\u6001\uFF0C\u5219\u5C06\u51FD\u6570\u52A0\u5165\u5BF9\u5E94\u5217\u8868\u4E2D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u72B6\u6001\u5DF2\u7ECF\u51DD\u56FA\uFF0C\u5219\u76F4\u63A5\u6267\u884C\u5BF9\u5E94\u72B6\u6001\u7684\u51FD\u6570</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">RESOLVED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div></details>`,2);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
