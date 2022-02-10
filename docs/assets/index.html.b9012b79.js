import{a,o as c,c as u,d as n,b as t,w as p,F as r,h as l,i as o}from"./app.e8b3515a.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={},y=l(`<details class="custom-container details"><summary>\u5B9E\u9645\u8981\u7F16\u8F91\u7684\u6587\u4EF6</summary><p>\u4E2D\u6587\u7248\u7B80\u5386\u7684\u5B9E\u9645\u6E90\u6587\u4EF6\u540D\u4E3A <strong><code>zh.js</code></strong>\uFF0C\u5B58\u653E\u5728 <strong><code>&lt;project&gt;/.vuepress/data/contents/</code></strong> \u6587\u4EF6\u5939\u4E0B\u3002</p></details><details class="custom-container details"><summary>\u5B9E\u9645\u4EE3\u7801</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSection<span class="token punctuation">,</span> createParagraph<span class="token punctuation">,</span> createBullet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../structs&quot;</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\r
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u9A6C\u9526\u5C27&quot;</span><span class="token punctuation">,</span>\r
  <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>\r
  <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5173\u4E8E\u6211&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span>\r
            <span class="token string">&quot;\u5C0F\u9A6C \u662F\u4E00\u4F4D\u5C31\u8BFB\u4E8E \u9EA6\u514B\u9A6C\u65AF\u7279\u5927\u5B66\u5DE5\u7A0B\u7CFB\u6280\u672F\u5B66\u9662\u8F6F\u4EF6\u5DE5\u7A0B\u4E13\u4E1A \u7684 \u5728\u8BFB4\u5E74\u7EA7 \u7559\u5B66\u751F\uFF0C\u5E76\u4E14 \u4E00\u5E74\u5230\u5934 \u90FD\u5728\u4F7F\u7528 Vue2 \u548C Node.js\uFF0C\u800C \u6700\u8FD1 \u4E5F\u5DF2\u7ECF\u5728\u4F7F\u7528 Vue3\uFF0CGin \u548C MySQL\u3002&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span>\r
            <span class="token string">&quot;\u5C0F\u9A6C \u6BD4\u8F83\u64C5\u957F \u524D\u7AEF \u548C RESTful API \u7684\u5F00\u53D1\uFF0C\u8FD8\u559C\u6B22\u5728\u5F00\u53D1\u4E2D\u8FFD\u6C42\u4EE3\u7801\u7684\u6A21\u5757\u5316\u548C\u590D\u7528\u6027\u3002&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u8054\u7CFB\u65B9\u5F0F&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;+1 (905) 923-4098&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;QQ\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;907881445&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u90AE\u7BB1\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;jinyao.ma@outlook.com&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u76EE\u524D\u6240\u5728\u5730\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u52A0\u62FF\u5927\u5B89\u5927\u7565\u7701\u54C8\u5BC6\u5C14\u987F\u5E02&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;GitHub\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/jinyaoMa&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Linkedin\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;https://www.linkedin.com/in/jinyaoMa&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F\u7C7B\u6280\u80FD&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u7F16\u7A0B\u8BED\u8A00\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span>\r
            <span class="token string">&quot;Golang, ES6, Stylus, Less, HTML5, CSS3, CommonJS, Java, Python3, Kotlin, PHP, C#, Swift&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u6846\u67B6\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Vue, React, Gin, Express, Laravel, ASP.NET MVC&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u73AF\u5883\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span>\r
            <span class="token string">&quot;VSCode, Android Studio, Git Bash, GitHub, LAMP, Swagger, Photoshop, Illustrator&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u5E73\u53F0\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;MySQL, SQLite, Oracle DB&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u64CD\u4F5C\u7CFB\u7EDF\uFF1A&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Window 10, Max OS X, CentOS&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5174\u8DA3\u7231\u597D&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u5EFA GitHub \u4ED3\u5E93\uFF0C\u4E0D\u65AD\u63D0\u4EA4\u66F4\u6539&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u7814\u7A76\u524D\u7AEF UI Kit\uFF0C\u559C\u6B22\u770B\u5F97\u89C1\u7684\u5F00\u53D1&quot;</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
  <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6559\u80B2\u80CC\u666F&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9EA6\u514B\u9A6C\u65AF\u7279\u5927\u5B66&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;2020\u5E745\u6708 \u81F3\u4ECA&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u672C\u79D1 - \u5DE5\u7A0B\u7CFB\u6280\u672F\u5B66\u9662 - \u8F6F\u4EF6\u5DE5\u7A0B&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u7F51\u7EDC\u5B89\u5168, \u654F\u6377\u5F00\u53D1, \u770B\u677F\u7BA1\u7406, \u7CBE\u76CA\u6982\u5FF5 \u7B49\u7B49&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u5F53\u524D\u5E73\u5747\u5B66\u5206\u7EE9\u70B9 GPA 10/12&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u83AB\u970D\u514B\u5B66\u9662&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;2016\u5E741\u6708 \u81F3 2019\u5E7412\u6708&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E13\u79D1 - \u8BA1\u7B97\u673A\u7CFB\u7EDF\u6280\u672F\u8BFE\u7A0B - \u8F6F\u4EF6\u5F00\u53D1&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;Web \u5F00\u53D1\uFF1AHTML5 &amp; CSS3, PHP, Javascript, ASP.NET, CodeIgniter, Laraval, Vue, React&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u79FB\u52A8\u5F00\u53D1\uFF1AJava, Android SDK&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u6BD5\u4E1A\u5E73\u5747\u5B66\u5206\u7EE9\u70B9 GPA 92/100&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
    <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9879\u76EE\u7ECF\u5386&quot;</span><span class="token punctuation">,</span>\r
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u73ED\u6253\u5361\u8FFD\u8E2A Web \u5E94\u7528&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2021\u5E7411\u6708 \u81F3 2021\u5E7412\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/20211108-daka&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u6280\u672F\u6808\uFF1AVue, Element UI, Axios, Node.js, Gin, Gorm, MySQL, Swagger, JWT&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u7528\u4E8E\u8FFD\u8E2A\u5458\u5DE5\u5DE5\u4F5C\u65F6\u95F4\u7684 CRUD \u5C0F\u5DE5\u5177&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5185\u5BB9\u7BA1\u7406 Web \u5E94\u7528&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2021\u5E746\u6708 \u81F3 2021\u5E748\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/go-experiment&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u6280\u672F\u6808\uFF1AVue, Axios, Fontawesome, Node.js, Gin, Gorm, SQLite&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u53EF\u4EE5\u50A8\u5B58\u548C\u64CD\u4F5C\u6587\u4EF6\u7684\u7B80\u5355\u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u6D89\u53CA\u5230 OS I/O \u64CD\u4F5C&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5BA2\u6237\u6765\u8BBF\u7BA1\u7406 Web \u5E94\u7528&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2020\u5E7411\u6708 \u81F3 2021\u5E741\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/ewyn-admin&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u6280\u672F\u6808\uFF1AVue, Element UI, ECharts, Axios, Express, Node.js, MySQL&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u5B9E\u73B0\u4E86 CRUD \u529F\u80FD\u7684\u7F51\u7AD9\uFF0C\u5305\u542B\u4E86 4 \u4E2A\u4EE5\u4E0A\u4E0D\u540C\u7C7B\u578B\u7684 Web \u8868\u5355&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;VuePress \u4E3B\u9898&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2020\u5E746\u6708 \u81F3 2020\u5E749\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/vuepress-theme-mustom&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F\u6808\uFF1AVuePress, Vue, Fontawesome, Axios, Node.js&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u5728 GitHub \u4E0A\u83B7\u5F97\u4E86 22+ \u9897\u661F\u661F&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Hexo \u4E3B\u9898&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2019\u5E742\u6708 \u81F3 2020\u5E743\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/hexo-theme-mustom&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F\u6808\uFF1AHexo, Fontawesome, Axios, Node.js&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u5728 GitHub \u4E0A\u83B7\u5F97\u4E86 38+ \u9897\u661F\u661F&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token function">createSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6D6E\u7A97\u97F3\u4E50\u64AD\u653E\u5668&quot;</span><span class="token punctuation">,</span>\r
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
            <span class="token function">createParagraph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2A\u4EBA\u9879\u76EE | 2018\u5E744\u6708 \u81F3 2018\u5E749\u6708&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9879\u76EE\u94FE\u63A5\uFF1Ahttps://github.com/jinyaoMa/YaoCollection&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F\u6808\uFF1AJava, Android SDK, Vitamio, Thunder&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u5B9E\u9A8C\u4ECE music.163.com \u722C\u53D6\u97F3\u4E50\u4FE1\u606F\u548C\u97F3\u9891\u8D44\u6E90&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
            <span class="token function">createBullet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
              <span class="token literal-property property">content</span><span class="token operator">:</span>\r
                <span class="token string">&quot;\u4F7F\u7528 Postman \u5206\u6790\u4E86 music.163.com \u4E2D 10+ \u4E2A\u4E0D\u540C\u7684 URL/API \u548C RSA/AES \u7684\u52A0\u5BC6\u5B9E\u73B0&quot;</span><span class="token punctuation">,</span>\r
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
          <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
      <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
  <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
<span class="token punctuation">}</span><span class="token punctuation">;</span>\r
</code></pre></div></details>`,2),q={class:"custom-container tip"},g=t("p",{class:"custom-container-title"},"\u6253\u5370\u7B80\u5386",-1),d=o("\u6253\u5370"),f=o("\u9ED1\u767D\u6253\u5370");function h(m,S){const e=a("Resume"),s=a("button-print");return c(),u(r,null,[y,n(e),t("div",q,[g,n(s,null,{default:p(()=>[d]),_:1}),n(s,{blackNwhite:!0},{default:p(()=>[f]),_:1})])],64)}var B=i(k,[["render",h]]);export{B as default};
