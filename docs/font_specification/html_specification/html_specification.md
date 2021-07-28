## 基础规范

1. 页面基础结构规范

```html
<!DOCTYPE html> // 第一行添加标准模式声明
  <html lang="zh-CN"> // 建议为html lang属性添加正确的语言格式
  <head>
    <meta charset="UTF-8"> // 编码格式申明
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>页面名称</title>  // 页面名称填写0
    <link rel="shortcut icon" href="path/to/favicon.ico"> // 网页导航栏上的logo
  </head>
  </html>
```

2. 引入 css 时必须指明 rel="stylesheet"

```html
<link rel="stylesheet" src="">
```

3. 避免或者不准使用内联样式

4. html 代码缩进按 2 个空格格式来

5. 块级元素必须另起一行编写，并且删除前后多余的空格

6. 对于页面结构复杂的 html 代码，进行组件拆分、对页面结构编写必要的注释内容

```
 <!-- 注释内容 --!> 对于注释标签 最好是有开头和结尾
        <!-- end --!>
```

7. html 上面的属性和值的书写都必须小写 并且属性值都使用双引号

8. 对于命名中 class 名的隔断使用中横线 ID 使用下划线 自定义属性名类似 data-xxx

```
class="class-name" 、id="idname_ok" 、data="data-xxx"
```

9.（可选） 标签上面的属性 书写顺序

```
class -> id -> name -> data- -> src/for/type/href -> title/alt ->其他
```

对于 vue 上标签书写顺序 v-if/ v-for/v-show 等可放在 id,name 顺序之后

10. class 的命名需代表相应模块或者不见内容功能

11. 禁止 img 的 src 的取值为空放在那里，否则会导致部分浏览器重新加载

12. （可选）公司版权注释

```
<!--the site is designed by Bob at 2016.9.24-->
```

## 针对.vue 文件 html 的书写规范

1. `<template></template>` 标签上不要写多余的属性

2. 对于标签里面属性值比较多一行展示查看比较麻烦时属性换行对齐

```html
 <input
    class="seach-input"
    placeholder="输入题目关键信息，回车搜索"
    confirm-type="search"
    @input="inputTyping"
    @confirm="searchContent"
    :value="seachPaper.searchVal"
    :focus="isfocus"
  />
```

3. 并且对于 `v-xx` 指令放前面 ，自有属性放后

4. 属性书写顺序 指令排序规则，控制显示 -> 控制循环 -> `v-bind` 属性 -> `v-on` 事件绑定；

``` html
<ul v-if="todos.length > 0">
  <li
    is="todo-item"
    v-for="(todo, index) in todos"
    v-bind:key="todo.id"
    v-bind:title="todo.title"
    v-on:remove="todos.splice(index, 1)"
  ></li>
</ul>
```

5. 当 `v-if` 与 `v-for` 作用在同一个标签上时，`v-if` 的权重会更高会对每个意图做判断

6. 对于使用 `v-for` 循环出的 标签需要添加 `key` 属性并保证 `key` 属性值的唯一性

7. 对于绑定属性 `v-bind/v-on`

``` html
<input :value="mazeyUser" @click="verifyUser">
```

8. 避免样式冲突需要写上 `scoped`

```html
<style scoped></style>
```

9. （统一阅读顺序）

按照`<template>、<script>、<style>` 的顺序放置

```html
<template>
<!-- HTML -->
</template>
<script>
/* JavaScript */
</script>
<style>
/* CSS */
</style>
```

## 关于meta标签的一些选用

针对项目需求选择需要的 `meta` 标签

1. 移动端使用的相关 `meta` 标签

```html
视口：<meta
            name="viewport"
            content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,
            width=device-width,initial-scale=1.0"
          />
    width: 视口宽度 width=device-width 宽度是设备的宽度
    initial-scale: 初始化缩放 initial-scale=1.0不缩放
    user-scalable: 是否允许用户自行缩放 取值0/1 yes或no
    minimum-scale：最小缩放
    maximum-scale：最大缩放
```

2. 基础使用描述
description 用来告诉搜索引擎你的网站主要内容。

```html
<meta name="description" content="Thispageisaboutthemeaningofscience,education,culture.">
```

keywords 用来告诉搜索引擎你网页的关键字是什么。

```html
<meta name="keywords" content="science,education,culture,politics,ecnomics，relationships,entertaiment,human">
```

标注网页的作者

```html
<meta name="author" content="root,root@xxxx.com">
```

浏览器内核控制

```html
<meta name="renderer" content="webkit">
```

robots 用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
content 的参数有 all,none,index,noindex,follow,nofollow。默认是 all。

  <meta name="robots"content="none">

浏览模式设置

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

使用最新版本的 IE 和 chrome 浏览器

可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。

```html
<meta http-equiv="expires"content="Fri,01Jan201618:18:18GMT">
```

3. 一些其他相关 `meta（可选用）`

```html
<!-- iOS 设备 begin -->
  <meta name="apple-mobile-web-app-title" content="标题">
  <!-- 添加到主屏后的标题（iOS 6 新增） -->
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->

  <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
  <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <!-- 设置苹果工具栏颜色 -->
  <meta name="format-detection" content="telphone=no, email=no"/>
  <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
  <!-- 启用360浏览器的极速模式(webkit) -->
  <meta name="renderer" content="webkit">
  <!-- 避免IE使用兼容模式 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- 不让百度转码 -->
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
  <meta name="HandheldFriendly" content="true">
  <!-- 微软的老式浏览器 -->
  <meta name="MobileOptimized" content="320">
  <!-- uc强制竖屏 -->
  <meta name="screen-orientation" content="portrait">
  <!-- QQ强制竖屏 -->
  <meta name="x5-orientation" content="portrait">
  <!-- UC强制全屏 -->
  <meta name="full-screen" content="yes">
  <!-- QQ强制全屏 -->
  <meta name="x5-fullscreen" content="true">
  <!-- UC应用模式 -->
  <meta name="browsermode" content="application">
  <!-- QQ应用模式 -->
  <meta name="x5-page-mode" content="app">
  <!-- windows phone 点击无高光 -->
  <meta name="msapplication-tap-highlight" content="no">
  <!-- iOS 图标 begin -->
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
  <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
  <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
  <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<!-- iOS 图标 end -->
```

## 参考文档

[HTML(5) 代码规范](https://www.runoob.com/html/html5-syntax.html)

[Google HTML/CSS 规范](https://www.runoob.com/w3cnote/htmlcssguide.html)

[HTML语义化](https://developer.mozilla.org/zh-CN/docs/Glossary/%E8%AF%AD%E4%B9%89)

[HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)
