## 类型 （备：此项为类型申明，仅参考）

- 原始类型申明

> 1.  **number**：包括浮点数，以及 NaN、±Infinity。
> 2.  **string**：字符串型。
> 3.  **boolean**：布尔型，即 true, false。
> 4.  **null**：即 null。
> 5.  **undefined**：即 undefined。
> 6.  **symbol**：符号类型。

TS 还提供了类型 void，它等于 { null, undefined }。

另外，所有原始类型的字面量本身也可作为类型使用，其外延只包括自身。

![image.png](//xiedongfeng.oss-cn-shanghai.aliyuncs.com/prod/1586340485007.png)

- 对象类型

通过类似 JS 对象字面量的方式来定义类型。

```ts
type point2D = {
   x: number
   y: number
 }
 const center: point2D = { x: 0, y: 0 }

 对象的键也可以不精确到特定键名：
 type httpHeaders = {
   [key string]: string | undefined // "|" 表示“或者”， 键是string类型的，值可以是string或者underfind
 }
```

## 类型使用注意

- 不要使用如下类型**Number**，**String**，**Boolean**或**Object**。 这些类型都是 JavaScriptd 的原始类型。

  ```ts
   /* 错误,ts编译会报错 */
   function reverse(s: String): String;
   /* OK */
   function reverse(s: string): string;
  ```

- 除非类型/函数需要在多个组件中共享，否则不要导出(export)
- 在文件中，类型定义应该放在最前面

## 类型断言注意事项

    ```ts
    // 反例
     function getLength(something: string | number): number {
        return something.length;
     }
     // 反例
     function getLength(something: string | number): number {
        if (<string>something.length) {
            return <string>something.length;
        } else {
            return something.toString().length;
        }
        // Type 'string' is not assignable to type 'number'
     }

     // 正例
     function getLength(something: string | number): number {
       if (typeof something === 'string') {
         return something.length;
       } else {
         return something.toString().length;
       }
     }
    ```

## interface 申明顺序

- 日常用到比较多的是四种，只读参数放第一位，必选参数第二位，可选参数次之，不确定参数放最后
  ``` ts
  interface iProps {
     readonly x: number;
     readonly y: number;
     name: string;
     age: number;
     height?: number;
     [propName: string]: any;
   }
  ```

## 基础规范

- 不会被修改的变量使用 const 声明
- 去除声明但未被引用的代码
- 使用箭头函数（**arrow function**，即 **lambda** 表达式）代替匿名函数

  ``` ts
  // 反例
  function () {
    console.log('我是一个匿名函数')
  }

  // 正例
  () => console.log('我是一个箭头函数')
  ```

- 仅当必要时才在箭头函数的参数列表中使用括号
  ```ts
  // 反例
  (x) => x + x

  // 正例
  x => x++

  (x, y) => x + y

  <T>(x: T, y: T) => x === y
  ```
- 总是使用大括号括起循环体和条件体
  ```ts
  // 反例
  for (let i = 0; i < 10; i++) i += 3

  if (x > 5) x -= 3

  //正例
  for (let i = 0; i < 10; i++) { i += 3 }

  if (x > 5) { x -= 3 }
  ```
- 开大括号总是放在其关联语句的同一行（大括号不换行）
  ```ts
  // 反例
  if (x > 5)
  {
    x -= 3
  }

  // 正例
  if (x > 5) {
    x -= 3
  }
  ```
- 圆括号内侧不留空格；在圆括号内的逗号、冒号和分号后空一格
  ```ts
  // 反例
  for ( let i = 0,n = str.length;i < n;i++ ) {}

  const f = (x:number,y:string): void => {
    console.log(x === y)
  }
  // 正例
  for (let i = 0, n = str.length; i < n; i++) {}

  const f = (x: number, y: string): void => {
    console.log(x === y)
  }
  ```
- 每个定义使用单独的语句
  ```ts
  // 反例
  const x = 1, y = 2

  // 正例
  const x = 1
  const y = 2
  ```
- else 不与之前的关大括号同行，应另起一行（备注：此项写法根据实际确定为准）
  ```ts
  // 反例
  if (x > 5) {

  } else {

  }

  // 正例
  if (x > 5) {

  }
  else {

  }
  ```
- 字符串拼接使用``符号
  ```ts
  const name = '小明'
  const userName = `张${name}`
  ```
- Object 类型的接口每一个 key 后面需要加上分号
  ```ts
  interface UserInfo {
    name: string;
    age: number;
    sex: string;
  }
  ```
- 下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with
  ```ts
  // 反例
  if (condition) doSomething();

  // 正例
  if (condition) {
    doSomething();
  }
  ```
- 下列关键字后：else, catch, finally 不需要换行 (备：此处暂时无正确与否之说，待确定)
  ==按我们正常的开发习惯一般这里都是不换行的，但是 TS 开发团队内部制定的规范规定这里做换行处理，我们视自身情况而定==
  `// 正例 if (condition) { ... } else { ... } try { ... } catch (e) { ... } finally { ... } // 反例 if (condition) { ... } else { ... } try { ... } catch (e) { ... } finally { ... }`
- 对象属性名不需要加引号
- 对象以缩进的形式书写，不要写在一行
- 数组最后不要有逗号
- 对象最后要有逗号
  ```ts
  // 反例
  const a = {
      'b': 1
  }

  const a = {b: 1}

  const a = {
      b: 1,
      c: 2
  }
  const arr = [1, 2, 3, 4,]

  // 正例
  const a = {
      b: 1,
      c: 2,
  }

  const arr = [1, 2, 3, 4]
  ```

## 代码注释规范 | 尽量使用 [JSDoc](https://www.jianshu.com/p/46519b0499c3) 的方式注释代码

- 文件顶部的注释，包括描述、作者、日期
  ```jsdoc
  /**
   * @description xxxxxx
   * @author chengfeng
   * @since 19/05/21
   */
  ```
- 模块的注释
  ```jsdoc
    /**
     * 拷贝数据
     * @param  {*}  data   要拷贝的源数据
     * @param  {boolean} [isDeep=false] 是否深拷贝，默认浅拷贝
     * @return {*}         返回拷贝后的数据
    */
  ```
- 业务代码的注释
  ```jsdoc
  /*业务代码注释*/
  ```
- 变量注释
  ```ts
  interface IState {
      // 名字
      name: string;
      // 电话
      phone: number;
      // 地址
      address: string;
  }
  ```

## 一些 Ts 规范书写参考文章

- [深入 TypeScript 的类型系统](https://zhuanlan.zhihu.com/p/38081852)
- [TypeScript 类型声明书写](https://juejin.im/post/5d64c2bef265da03da24a410)
- [Ts 编码规范](https://zhongsp.gitbooks.io/typescript-handbook/doc/wiki/coding_guidelines.html)
