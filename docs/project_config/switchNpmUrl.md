# 如何自使用切换工具动态切换npm源

自由切换npm源，我们使用node的nrm包进行切换

# nrm

[文档](https://github.com/Pana/nrm)

```js
npm install nrm -g # 全局安装nrm
nrm -V # 查看版本
nrm ls # 查看当前可选的源
  * npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry
nrm add <registry> <url> [home]  # 添加新源
nrm del <registry> # 删除
```

这里我们添加vision academy的npm源

```js
nrm add va http://npm.visionacademy.cn/ 
nrm ls
  * npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  dunpm ----- http://registry.enpmjs.org/
  va --------- http://npm.visionacademy.cn/
nrm use va
```
