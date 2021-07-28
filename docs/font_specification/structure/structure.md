## 目录结构规范
```bash
├── babel.config.js // babel配置
├── com.savml.routers.ts //路由生成源文件
├── postcss.config.js // postcss rem相关配置
├── public // 模板
│   ├── index.html
│   └── va_logo.png
├── src 
│   ├── App.vue 
│   ├── ajax.ts // 请求方法
│   ├── assets // 字体文件等静态资源
│   ├── components //公共组件
│   ├── config // 公共配置
│   ├── css // 公共样式
│   ├── directives // 指令
│   ├── filters // 过滤器
│   ├── globals.d.ts //全局声明文件
│   ├── icons //svg图标
│   ├── main.ts // 入口文件
│   ├── mixins // 混入公共方法
│   ├── plugins // 自定义插件
│   ├── router.ts // 嵌套路由
│   ├── routers.ts // 主路由
│   ├── shims-tsx.d.ts // tsx声明文件
│   ├── shims-vue.d.ts // vue相关声明文件
│   ├── store // vuex store模块
│   │   ├── index.ts // store导出文件
│   │   └── user // user模块
│   │       ├── actions.ts // user模块异步action
│   │       ├── getters.ts // user模块相关计算方法
│   │       ├── mutations.ts // user模块同步方法
│   │       └── state.ts //user模块数据源
│   ├── types // 全局声明文件
│   └── views // 业务模块集合
│       └── Home 
│           ├── Home.vue // 模块container
│           ├── HomeHomeIndex.vue // 业务代码(大驼峰命名)
│           └── config // 单个模块内配置合集
│           ├── components // 模块内组件
│           └── types // 模块内声明文件
├── tsconfig.json // ts配置文件
├── utils // 全局公共方法集合
│   └── utils.ts
└── vue.config.js // vue-cli配置文件
```