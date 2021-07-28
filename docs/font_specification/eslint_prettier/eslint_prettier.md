# 代码风格检测

> 在配置vue项目时我们需要选择代码检测的工具，目前主要是eslint

## 一： 关于工具选择

![image.png](http://xiedongfeng.oss-cn-shanghai.aliyuncs.com/prod/1589781025762.png)
![image.png](http://xiedongfeng.oss-cn-shanghai.aliyuncs.com/prod/1589782221065.png)

- ESLint with error prevention ony 仅具有错误预防功能的ESLint
- ESLint + Airbnb config 
    [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
    Airbnb 是其中一個最流行的 JavaScript 代碼規範，它差不多包含所有 JavaScript 的角度。如果你的項目是基於 React 的，那麼你可以選擇安裝 eslint-config-airbnb，或者你可以選擇最基本的 eslint-config-airbnb-base。

    eslint-config-airbnb 包含 ECMAScript 6 + 以及 React 的 ESLint 代碼規範。在安裝 eslint-config-airbnb的時候，它會一同安裝 eslint, eslint-plugin-import, eslint-plugin-react, and eslint-plugin-jsx-a11y。如果你的項目不是 React 的話，那麼你可以選擇eslint-config-airbnb-base。
- ESLint + Standard config
  [https://github.com/standard/standard/blob/master/docs/README-zhcn.md](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)
  很多大公司都在使用的一个规范，无需过多配置，开箱即用。
- ESLint + Prettier
  [https://github.com/prettier/prettier](https://github.com/prettier/prettier)
  Prettier的中文意思是“漂亮的、机灵的”，也是一个流行的代码格式化工具的名称，它能够解析代码，使用你自己设定的规则来重新打印出格式规范的代码。
- TSLint(因为不在维护，所以已弃用)

因为我们需要统一团队代码风格，在平时开发过程中或者提交代码时对代码风格进行统一格式化，所以我们选择了ESLint + Prettier。

## 二：prettier的使用

### 1. Prettier是什么

首先，对于ESLint大多都很熟悉，用来进行代码的校验，但是Prettier（直译过来就是"更漂亮的"）听得可能就比较少了。js作为一门灵活的弱类型语言，代码风格千奇百怪，一千个人写js就有一千种写法。虽然js没有官方推荐的代码规范，不过社区有些比较热门的代码规范，比如standardjs、airbnb。使用ESLint配合这些规范，能够检测出代码中的潜在问题，提高代码质量，但是并不能完全统一代码风格，因为这些代码规范的重点并不在代码风格上（虽然有一些限制）。

Prettier是一个能够完全统一你和同事代码风格的利器，假如你有个c++程序员转行过来写前端的同事，你发现你们代码风格完全不一样，你难道要一行行去修改他的代码吗，就算你真的去改，你的需求怎么办，所以没有人真的愿意在保持代码风格统一上面浪费时间。选择Prettier能够让你节省出时间来写更多的bug（不对，是修更多的bug），并且统一的代码风格能保证代码的可读性。

![image:png](https://image-static.segmentfault.com/351/307/3513077710-5b27a62397c1a_articlex)
![image:png](https://image-static.segmentfault.com/401/024/4010247444-5b27a623a8bc5_articlex)

能支持jsx

![image:png](https://image-static.segmentfault.com/122/672/1226726106-5b27a623c62fe_articlex)

也能支持css

![image:png](https://image-static.segmentfault.com/115/330/1153306953-5b27a623a8575_articlex)

### 2. 所需依赖包和一些配置

#### 1）依赖包

```js
"@typescript-eslint/eslint-plugin": "^2.26.0",      // ts eslint插件
"@typescript-eslint/parser": "^2.26.0",             // ts eslint解析器
"@vue/cli-plugin-eslint": "^4.3.0",                 // eslint plugin for vue-cli
"eslint": "^6.7.2",                                 // eslint
"@vue/eslint-config-prettier": "^6.0.0",            // 用于vue-cli的prettier配置
"@vue/eslint-config-typescript": "^5.0.2",          // 用于vue-cli的ts配置
"eslint-plugin-prettier": "^3.1.1",                 // eslint prettier插件
"eslint-plugin-vue": "^6.2.2",                      // eslint vue插件
"lint-staged": "^9.5.0",                            // lint 钩子
"prettier": "^1.19.1"                               // prettier
"eslint-webpack-plugin": "^1.0.0"                   // 代码自动保存时自动修复
```

#### 2）项目ESLint配置

==ESLint中没有包含在默认配置( **eslint:recommended** )中的一些规则(不带 **√** 的)基本上都在项目中测试过，且引入了一些必要的规则；关于vue的大部分都包含在基础配置( **plugin:vue/essential** )中；ts的也是包含在( **@vue/typescript/recommended** )中；==

- 新建 **.eslintignore** 文件

```js
// .eslintignore
node_modules
dist/
src/router.ts
*.scss
```

- 新建 **.eslintrc.js** 文件

```js
// rules: 0 -> off  1 -> waring  2 -> error
const tsRule = {
  // ts相关
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
  // 可以使用any类型
  '@typescript-eslint/no-explicit-any': 0,
  // 允许存在无函数体的函数
  '@typescript-eslint/no-empty-function': 0,
  // 可以使用require，主要在webpack配置中
  '@typescript-eslint/no-var-requires': 0,
  // 忽略接口名以I开头
  '@typescript-eslint/interface-name-prefix': 0,
  // 取消函数需要返回值
  '@typescript-eslint/explicit-function-return-type': 0,
  // 接口和类型文字需要特定的成员定界符样式
  '@typescript-eslint/member-delimiter-style': 2,
  '@typescript-eslint/prefer-regexp-exec': 0,
  'prefer-spread': 0
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:vue/recommended',
    'plugin:vue/essential',
  ],
  'overrides': [
    {
      'files': [
        'src/**/*.{ts,tsx}',
        'utils/*.ts'
      ],
      'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      'plugins': ['@typescript-eslint'],
      'rules': {
        ...tsRule
      },
      'parser': 'vue-eslint-parser',
      'parserOptions': {
        'ecmaFeatures': { 'jsx': true },
        'parser': '@typescript-eslint/parser',
        'tsconfigRootDir': __dirname,
        'project': './tsconfig.json'
      }
    }
  ],
  plugins: ['prettier', 'vue'],
  globals: {},
  rules: {
    'prettier/prettier': 'off',
    // --- vue相关 ---
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 标签的右括号之前要求换行
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    // 标签内无内容时自闭合
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    // 标签名使用中划线连接
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': true, // 仅检查已注册的组件
      'ignores': []
    }],
    // 禁止在计算属性中使用异步方法
    'vue/no-async-in-computed-properties': 2,
    // 禁止重复字段名称
    'vue/no-dupe-keys': 2,
    // 单行元素内容换行规则
    'vue/singleline-html-element-content-newline': 0,
    // name命名使用中划线
    'vue/name-property-casing': [2, 'kebab-case'],
    // 允许使用v-html
    'vue/no-v-html': 'off',
    // 禁止重复属性名(除了class和style)
    'vue/no-duplicate-attributes': [
      2,
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    // 一致的缩进风格
    'vue/html-indent': [
      2,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    // eslint相关
    // https://cn.eslint.org/docs/rules/
    // 允许使用异步函数作为Promise executor
    'no-async-promise-executor': 0,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较(使用 a === null 或 a !== null)
    'no-eq-null': 2,
    // 禁用不必要的 return await
    'no-return-await': 2,
    // no-extra-semi
    'no-extra-semi': 2,
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 2,
    // 禁止将 undefined 作为标识符(比如var foo = undefined; if (foo === undefined);) -> 忽略
    'no-undefined': 0,
    // 该规则强制数组开括号后和闭括号前不需要空格[1, 2, 3]
    'array-bracket-spacing': [2, 'never'],
    // 代码块前后空格(function foo() { return true; })
    'block-spacing': [2, 'always'],
    // 允许代码块的开闭大括号位于同一行, 且开大括号不换行
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 要求使用扩展运算符而非 .apply() -> 忽略
    'prefer-spread': 0,
    // 在对象和数组文字中，当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
    // https://cn.eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'only-multiline'],
    // 逗号前面不允许空格，后面加空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 在数组，对象和变量声明中强制使用一致的逗号样式，位于行末
    'comma-style': [2, 'last'],
    // 禁止在计算属性内使用空格(像这样：obj[foo ]; var x = {[ b ]: a}是不好的)
    'computed-property-spacing': 2,
    // 禁止在函数调用时函数名和开括号之间有空格
    'func-call-spacing': 2,
    // 文件末尾加换行
    'eol-last': 2,
    // 要求使用 === 和 !==
    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore'
      }
    ],
    // 对象字面量键和值之间使用一致的空格(冒号后加空格，前面不能有空格)
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 关键字前后加空格(行首的关键字前面不需要加空格)
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 强制注释周围有空行
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true, // 要求在块级注释之前有一空行 /* ------- */
        beforeLineComment: false // 要求在行级注释之前有一空行 // ---------
      }
    ],
    // 要求在类成员之间出现空行
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true // 跳过对单行类的检测
      }
    ],
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止出现多行空行，最多一行空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    // 函数调用之间不需要空格
    'no-spaced-func': 2,
    // // 抛出异常时禁止使用字面量(throw 2)
    // 'no-throw-literal': 2,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 不允许初始化变量值为 undefined
    'no-undef-init': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 强制操作符使用一致的换行符,要求把换行符放在操作符后面
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    // 要求或禁止块内填充(代码块首行之前、末行之后不许有空行)
    'padded-blocks': [2, 'never'],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: false,
        allowTemplateLiterals: true
      }
    ],
    // 禁止在语句末尾使用分号
    semi: [2, 'never'],
    // 强制分号之后使用一致的空格
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 强制代码块之前空格
    'space-before-blocks': [2, 'always'],
    // 函数圆括号之前不需要空格
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    // 强制圆括号内不许有空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      2,
      {
        words: true, // a += '2' a += 1
        nonwords: false // a++
      }
    ],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // 强制模板字符串中空格的使用，不使用空格
    'template-curly-spacing': [2, 'never'],
    // 要求调用 isNaN()检查 NaN
    'use-isnan': 2,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: true
      }
    ],
    // 箭头函数箭头前后加空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 允许case块中声明变量
    'no-case-declarations': 0,
    ...tsRule
  }
}
```

- **package.json** 的配置

```js
// script中添加
"jslint": "eslint --ext .tsx,.ts,.vue ./src ./utils ./vue.config.js",
"fix:js": "eslint --ext .tsx,.ts,.vue --fix ./src ./utils ./vue.config.js",

// lint-staged中添加
"*.{ts,tsx,vue}": [
   "npm run jslint",
   "git add"
]
```

- **vue.config.js** 的配置

```js
const ESLintPlugin = require('eslint-webpack-plugin')


// configureWebpack中添加
config.plugins.push(
   new ESLintPlugin({
      files: ['src/**/*.{vue,ts}'],
      fix: true
   })
)
```

3）项目关于编辑器的配置

- 新建 **.editorconfig** 文件

```js
// .editorconfig

root = true
charset = utf-8

[*.{js,jsx,ts,tsx,vue,json,scss,css}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

4）项目关于prettier的配置，格式化时将按照此文件的配置进行，默认覆盖编辑器自身关于prettier的配置

- 新建 **.prettierrc** 文件

```js
// .prettierrc

{
  eslintIntegration: true, // 使用eslint
  printWidth: 120, // 每行最大字符数，超过则换行
  "prettier.useTabs": false, // 缩进不使用tab，使用空格
  tabWidth: 2, // tab size
  semi: false, // 语句末尾分号
  singleQuote: true, // 使用单引号，此处不适用JSX，JSX在eslintrc中
  arrowParens: 'always', // 箭头函数只有一个参数时参数加括号。avoid: 省略括号
  jsxBracketSameLine: false, // 将闭合标签符 /> 放在最后一行的末尾 default: true，false是单独一行放置
  wrapAttributes: false,
  stylelintIntegration: false, // 不让prettier使用stylelint的代码格式进行校验
  "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
}
```

- 新建 **.prettierignore** 文件

```js
// .prettierignore 格式化忽略的文件，和gitignore类似
.DS_Store
node_modules/
dist/
# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.project
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```

5）编辑器的配置

- 安装 **ESLint** 、 **Prettier - Code formatter** 和 **vetur** 这三个插件

- 找到 **settings.json** 配置文件
  ![image.png](http://xiedongfeng.oss-cn-shanghai.aliyuncs.com/prod/1589873171786.png)

- 按下面添加或修改相关配置，format统一使用prettier
  ```js
  // eslint相关配置
  "editor.formatOnSave": false,
  "vetur.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": false
  },
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "html",
    "jsx",
    "typescript",
    "typescriptreact"
  ],
  ```

  ==如果添加上述配置报错，可能是新版的编辑器配置项有变更，可以查找资料更变配置。==

到此为止，项目中凡是有些语法错误，且该错误触发的规则是带有🔧标记的，基本能够自动修复；
prettier不是万能的，它所能做的只是修复触发ESLint检测规则，且该规则是带有🔧标记的语法错误，有很多不带🔧标记的是无法被修复的。所以我们在日常开发中不能仅依赖于工具去修复代码风格、规范性要求，还需要养成自我约束的能力，尽量写出阅读性、规范性、容错性都较好的代码。

参考文档:

[ESLint规则](https://cn.eslint.org/docs/rules/)
[ESLint vue规则](https://eslint.vuejs.org/rules/)
[Prettier的配置](https://prettier.io/docs/en/install.html)
[ts的一些规则](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
[使用Prettier统一格式化项目代码](https://zhuanlan.zhihu.com/p/87586114)
