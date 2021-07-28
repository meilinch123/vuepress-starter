## 文件名以驼峰形式命名 （备：具体说明大驼峰小驼峰）

```js
// 允许
detail.js || detailAbout.js

// 不允许
detail-about.js || Detail.js || Detail-about.js||Detailabout.js
```

## 空格

- 每行尾部不留空格
- 等号前后需有空格
- 对象{} 前后需有空格
  ``` js
  let a = [
    { lebal: '', value: '' }
  ]
  ```
- 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格
  ``` js
  const a = 10;
  const b = 10
  const c = 10
  a++;
  a = b + c;
  ```
- if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格
  ```js
  if (condition) {
  } else {

  }
  while (condition) {
  }

  (function () {
  })();
  ```
- 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格
  ```js
  var obj = {
      a: 1,
      b: 2,
      c: 3
  };
  ```
- 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格
  ```js
  function funcName() {
  }

  var funcName = function funcName() {
  };

  funcName();
  ```
- , 和 ; 前不允许有空格。

  ```js
  // good
  private callFunc(a, b);

  // bad
  private callFunc(a , b) ;
  ```

- 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格

  ```js
  // good

  callFunc(param1, param2, param3);

  save(this.list[this.indexes[i]]);

  needIncream && (variable += increament);

  if (num > list.length) {
  }

  while (len--) {
  }


  // bad

  callFunc( param1, param2, param3 );

  save( this.list[ this.indexes[ i ] ] );

  needIncreament && ( variable += increament );

  if ( num > list.length ) {
  }

  while ( len-- ) {
  }
  ```

## 换行

- 每个独立语句结束后必须换行

  ```js
  // good
  const a = 1
  const b = 10

  //bad
  const a = 1; const b = 10
  ```

- 运算符处换行时，运算符必须在新行的行首
  ```js
  // good
  if (user.isAuthenticated()
      && user.isInRole('admin')
      && user.hasAuthority('add-admin')
      || user.hasAuthority('delete-admin')
  ) {
      // Code
  }

  var result = number1 + number2 + number3
      + number4 + number5;


  // bad
  if (user.isAuthenticated() &&
      user.isInRole('admin') &&
      user.hasAuthority('add-admin') ||
      user.hasAuthority('delete-admin')) {
      // Code
  }

  var result = number1 + number2 + number3 +
      number4 + number5;
  ```
- 在函数声明、函数表达式、函数调用、对象创建、数组创建、for 语句等场景中，不允许在 , 或 ; 前换行
  ```js
  // good
  var obj = {
      a: 1,
      b: 2,
      c: 3
  };

  foo(
      aVeryVeryLongArgument,
      anotherVeryLongArgument,
      callback
  );


  // bad
  var obj = {
      a: 1
      , b: 2
      , c: 3
  };

  foo(
      aVeryVeryLongArgument
      , anotherVeryLongArgument
      , callback
  );
  ```

## 命名

- 使用 PascalCase 为类型命名。
- 不要使用 I 做为接口名前缀。
- 使用 PascalCase 为枚举值命名。
- 使用 camelCase 为函数命名。
- 使用 camelCase 为属性或本地变量命名。
- 不要为私有属性名添加 \_ 前缀。
- 尽可能使用完整的单词拼写命名。

- 类名: 大驼峰式风格，字母和数字，例如：AbcTest。禁止汉字、特殊符号，禁止非大驼峰式风格

- 函数名: 小驼峰式风格，字母和数字，例如：abcTest。禁止汉字、特殊符号，禁止非小驼峰式风格，例如 snake_case 等

- 变量名: 同函数名

- 常量: 全大写风格，大写字母、数字和下划线，单词之间以下划线分隔，例如：ABC_TEST。禁止汉字、特殊符号、小写字母

- 组件内的事件函数使用 handle 开头，handleCheckBtn

## 注释

- 单行注释 // 前后都要有空格
  ```js
  const a = 10 // 变量
  ```
- 多行注释
  ```js
  /**
   * a作用
   */
  const a = '10';
  ```

## 条件判断

- 类型确定严格使用 全等于 === 和 !==
- 使用简介表达式
  ```js
  // good
  if (!name) {
      // ......
  }

  // bad
  if (name === '') {
      // ......
  }
  ```