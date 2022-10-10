# JavaScript 编码规范

## 前言

本文档的目标是使 JavaScript 代码风格保持一致，容易被理解和被维护。

虽然本文档是针对 JavaScript 设计的，但是在使用各种 JavaScript 的预编译语言时(如 CoffeeScript 等)时，适用的部分也应尽量遵循本文档的约定。

## JS规范

### 必须执行规范

1. 变量、方法命名为统一驼峰命名（详见）
2. 最外层统一使用单引号。
3. 不要有空的代码段。
4. 语法格式化，for、if 语句块{}换行操作
5. 变量不要先使用后声明。
6. 不要声明了变量却不使用。
7. 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量。
8. 数组中不要存在空元素。
9. for-in 循环体中必须用 hasOwnProperty 方法检查成员是否为自身成员。避免来自原型链上的污染。
10. parseInt(xxx,10) 必须带上第二个进制参数。
11. 小心使用 this，使用 '_this', 'that', 'self' 其中一个来命名。第一层时使用 var self = this;第二层时使用 var that = this
12. 小心使用闭包以及不要循环引用。
13. 对有序集合进行遍历时，缓存 length。
14. 保存经常需要用到的值，避免重复计算；（使用次数>=3时）
15. 永远不要直接使用 undefined 进行变量判断，使用 typeof 和字符串 'undefined' 对变量进行判断。
16. e.target 和 e. currentTarget 使用，尽量使用 currentTarget 获取事件活动对象
17. 使用严格的条件判断符。用 === 代替 ==，用 !== 代替 !=。
18. 不修改内置对象的原型。
19. 按执行频率排列分支的顺序好处是：阅读的人容易找到最常见的情况，增加可读性。提高执行效率。
20. 方法体中不可再定义方法、绑定事件；嵌套层级<=3（特殊情况除外）
21. 减少直接对 dom 对象的操作（增删查改）。增：需要循环插入元素时，须用字符串累加，在循环结束后一起插入文档，只做一次dom操作;查：重复使用dom对象时，须用变量存储起来，只做一次dom查询
22. 尽力编写可通用化的函数，让它接受参数并返回值。这样有利于充分的代码重用，而且一旦与引入及外部脚本配合起来，能在脚本需要修改时减少开销。例如，相比硬编码一个带有窗口大小、选项和 url 的弹出式窗口，不如编写一个接受大小、url 和选项作为变量的函数。
23. 不要使用 with, void, eval。

### 建议执行规范

1. 尽量使用类库的链式写法，节约代码，提升执行效率；
2. 代码留空和格式
3. 变量声明与执行逻辑之间最好能留空一行；大段的代码块最好留空一行。
4. 三元条件判断替换简单的 if 判断
5. 建议：对于判断条件简单，且逻辑简单只有一行时，建议使用三元条件
6. 一个方法包含的功能模块不可太多，可作拆分处理
7. 减少“类似“全局变量的使用，到达减少依赖，方便维护
8. 减少 remove，append 使用，用 display:none；display:block 代替，减少文档重新渲染
9. 方法参数，须对其类型判断处理，达到容错
10. 不要在同个作用域下声明同名变量
11. 不要在一些不需要的地方加括号
12. 用工具函数 ，集中些常用的工具，方便统一维护修改
13. 代码尽量简短

## 代码风格

### 文件

JavaScript 文件使用无 BOM 的 UTF-8 编码。

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

在文件结尾处，保留一个空行。

### 结构

#### 缩进

- 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。
- 不要混用 tab 和 space；
- 不要在一处使用多个 tab 或 space；

#### 空格

- 数值操作符(如, +/-/*/% 等)两边留空;
- 赋值操作符/等价判断符两边留一空格;
- for 循环条件中, 分号后留一空格;
- 变量声明语句, 数组值, 对象值及函数参数值中的逗号后留一空格;
- 空行不要有空格;
- 行尾不要有空格;
- 逗号和冒号后一定要跟空格;
- 点号前后不要出现空格;
- 空对象和数组不需要填入空格;
- 函数名末尾和左括号之间不要出现空格;
- 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

#### 换行

每个独立语句结束后必须换行。

每行不得超过 120 个字符。

解释：

超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。

运算符处换行时，运算符必须在新行的行首。

换行符统一用'LF'；

#### 语句

不得省略语句结束的分号。

在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}。

#### 括号

原则: 不要滥用括号, 必要时一定要使用.

- if / else / while / for 条件表达式必须有小括号;
- 语句块必须有大括号;
- 一元操作符(如 delete, typeof, void)或在某些关键词(如 return, throw, case, new) 之后, 不要使用括号;

### 命名

- 总是使用 var 声明变量
- 使用对象以及数组字面量而不是更冗长的声明
- 变量,使用 Camel 命名法,配合前缀（i, s, is, a, o等），标识其数据类型。
- 给变量和函数的命名要有逻辑意义：例如： popUpWindowForAd 就比 myWindow 好多了。
- 不要人为缩短命名到最小。除了传统的 for 循环中的计数器 i 等简化的情况，变量命名必须长到有明确意义。
- 复数，命名以 s 结尾
- 常量全大写，用下划线连接
- 私有变量名用下划线开头。如："_current", "_defaultConfig"
- 构造函数（Class 类），大写第一个字母，即 Pascal 命名法
- 使用命名空间

### 注释

#### 单行注释

双斜线后，必须跟一个空格；

缩进与下一行代码保持一致；

可位于一个代码行的末尾，与代码间隔一个空格。


#### 多行注释

避免使用 /*...*/ 这样的多行注释。有多行注释内容时，使用多个单行注释。

建议在以下情况下使用：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的HACK代码
- 业务逻辑强相关的代码

#### 文档注释

各类标签@param, @method等请参考[JSDoc](http://usejsdoc.org/)和[YUIDoc Syntax Reference](http://yui.github.io/yuidoc/syntax/)；

建议在以下情况下使用：

- 文件
- namespace
- 类
- 函数或方法
- 类属性
- 事件
- 全局变量
- 常量
- AMD 模块

##### 注释类型

- 文件注释

    ```
    /**
     * @file Describe the file
     */

    ```
    文件注释中可以用 @author 标识开发者信息。

    解释：

    开发者信息能够体现开发人员对文件的贡献，并且能够让遇到问题或希望了解相关信息的人找到维护人。通常情况文件在被创建时标识的是创建者。随着项目的进展，越来越多的人加入，参与这个文件的开发，新的作者应该被加入 @author 标识。

    @author 标识具有多人时，原则是按照 责任 进行排序。通常的说就是如果有问题，就是找第一个人应该比找第二个人有效。比如文件的创建者由于各种原因，模块移交给了其他人或其他团队，后来因为新增需求，其他人在新增代码时，添加 @author 标识应该把自己的名字添加在创建人的前面。

    @author 中的名字不允许被删除。任何劳动成果都应该被尊重。

    业务项目中，一个文件可能被多人频繁修改，并且每个人的维护时间都可能不会很长，不建议为文件增加 @author 标识。通过版本控制系统追踪变更，按业务逻辑单元确定模块的维护责任人，通过文档与wiki跟踪和查询，是更好的责任管理方式。

    对于业务逻辑无关的技术型基础项目，特别是开源的公共项目，应使用 @author 标识。

    ```
    /**
     * @file Describe the file
     * @author yuqigong(gongyq@Ctrip.com)
     *         author-name2(mail-name2@domain.com)
     */
     ```

- 命名空间注释

    ```
    /**
     * @namespace
     */
    var util = {};
    ```

- 类注释

    ```
    /**
     * 描述
     *
     * @class
     */
    function Developer() {
        // constructor body
    }
    ```

    类的属性或方法等成员信息使用 `@public` / `@protected` / `@private` 中的任意一个，指明可访问性。

	解释：

	生成的文档中将有可访问性的标记，避免用户直接使用非 `public` 的属性或方法。

- 函数/方法注释

    ```
    /**
     * 函数描述
     *
     * @param {string} p1 参数1的说明
     * @param {string} p2 参数2的说明，比较长
     *     那就换行了.
     * @param {number=} p3 参数3的说明（可选）
     * @return {Object} 返回值描述
     */
    function foo(p1, p2, p3) {
        var p3 = p3 || 10;
        return {
            p1: p1,
            p2: p2,
            p3: p3
        };
    }
    ```

- 事件注释

    ```
    /**
     * 值变更时触发
     *
     * @event
     * @param {Object} e e描述
     * @param {string} e.before before描述
     * @param {string} e.after after描述
     */
    onchange: function (e) {
    }
    ```

- 常量注释

    ```
    /**
     * 常量说明
     *
     * @const
     * @type {string}
     */
    var REQUEST_URL = 'myurl.do';
    ```

- AMD 模块注释

    ```
	define(
	    function(require) {

	        /**
	         * foo description
	         *
	         * @exports Foo
	         */
	        var foo = {
	            // TODO
	        };

	        /**
	         * baz description
	         *
	         * @return {boolean} return description
	         */
	        foo.baz = function() {
	            // TODO
	        };

	        return foo;

	    }
	);

    define(
        function (require) {

            /**
             * module description.
             *
             * @module foo
             */
            var exports = {};

            /**
             * bar description
             *
             */
            exports.bar = function () {
                // TODO
            };

            return exports;
        }
    );
    ```

- 细节注释

    ```
    function foo(p1, p2) {
        // 这里对具体内部逻辑进行说明
        // 说明太长需要换行
        for (...) {
            ....
        }
    }
    ```

	TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。

	FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。

	HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。


```
/**
 * @func
 * @desc 一个带参数的函数
 * @event 事件函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数
 */
function foo(a, b, c, d, g, j) {
    ...
}
```

### 类型定义

| 类型定义 | 语法示例 | 解释 |
| ------- | ------- | --- |
|String|{string}|--|
|Number|{number}|--|
|Boolean|{boolean}|--|
|Object|{Object}|--|
|Function|{Function}|--|
|RegExp|{RegExp}|--|
|Array|{Array}|--|
|Date|{Date}|--|
|单一类型集合|{Array.&lt;string&gt;}|string 类型的数组|
|多类型|{(number｜boolean)}|可能是 number 类型, 也可能是 boolean 类型|
|允许为null|{?number}|可能是 number, 也可能是 null|
|不允许为null|{!Object}|Object 类型, 但不是 null|
|Function类型|{function(number, boolean)}|函数, 形参类型|
|Function带返回值|{function(number, boolean):string}|函数, 形参, 返回值类型|
|参数可选|@param {string=} name|可选参数, =为类型后缀|
|可变参数|@param {...number} args|变长参数,  ...为类型前缀|
|任意类型|{*}|任意类型|
|可选任意类型|@param {*=} name|可选参数，类型不限|
|可变任意类型|@param {...*} args|变长参数，类型不限|

### JSDoc

| 标签 |  描述 |
|-----|----- |
| @abstract/@virtual |  This member must be implemented (or overridden) by the inheritor. |
| @access | Specify the access level of this member - private, public, or protected. |
| @alias |  Treat a member as if it had a different name. |
| @augments/@extends |  标明一个函数继承另一个函数，如 A 继承 B 则可以在 A 的注释中加 `@augments B` |
| @author | Identify the author of an item. |
| @borrows |    参考，如 A 和 B 两个函数意义相同，则可以在 B 的注释中加 `@borrows A as B`，而不需重复添加注释 |
| @callback/@typedef |  标明此方法是一个回调函数 |
| @classdesc |  对一个类的描述 |
| @constant/@const |    常量标识 |
| @constructor/@class | 标明是构造器函数，可使用 `new` 关键字实例化 |
| @constructs | 当使用对象字面量形式定义类时，可使用此标签标明其构造函数 |
| @copyright |  描述版权信息 |
| @default |    默认值 |
| @deprecated | 弃用 |
| @desc/@description |  如果在注释开始描述可省略此标签 |
| @enum |   一个类中属性的类型相同时，使用此标签标明 |
| @event |  标明一个可触发的事件函数，一个典型的事件是由对象定义的一组属性来表示。 |
| @example |    示例，代码可自动高亮 |
| @exports |    标识此对象将会被导出到外部调用 |
| @external/@host | 标识此类、命名空间或模块来自外部 |
| @file |   描述文件功能 |
| @fires/@emits |   标明当一个方法被调用时将出发一个特殊类型的事件 |
| @global | 全局变量标识 |
| @ignore | 忽略此注释块 |
| @inner |  标明此代码是父类的内部变量 |
| @instance |   标明此代码是父类的实例 |
| @kind |   标明代码在其文档中的类型，如Class、Modual等 |
| @license |    采用的开源协议版本 |
| @link |   内联标签，创建一个链接，如 `{@link http://github.com Github}` |
| @member/@var |    记录一个基本数据类型的成员变量 |
| @memberof |   指定一个变量所属的父类 |
| @method/@function/@func | 标记一个方法或函数 |
| @mixes |  标记一个对象混合了另一个对象的所有成员 |
| @mixin |  一个 `mixin` 提供了旨在将方法添加到对象上的功能 |
| @module | 标明当前文件模块，在这个文件中的所有成员将被默认为属于此模块，除非另外标明 |
| @name |   指定一段代码的名称，强制 JSDoc 使用此名称，而不是代码里的名称 |
| @namespace |  指定一个变量为命名空间变量 |
| @param |  标记方法参数及参数类型 |
| @private/@protected/@public | 标明变量访问等级 |
| @property |   标明一个对象的属性 |
| @readonly |   只读 |
| @requires |   标明运行代码所需模块 |
| @returns/@return |    标明返回值、类型及描述 |
| @see |    链接到一个参考位置 |
| @since |  描述此功能来自哪一版本 |
| @static | 描述一个不需实例即可使用的变量 |
| @summary |    对描述信息的短的概述 |
| @this |   说明 `this` 关键字所代表的意义 |
| @throws | 描述方法将会出现的错误和异常 |
| @todo |   描述函数的功能或任务 |
| @tutorial |   插入一个指向向导教程的链接 |
| @type |   描述代码变量的类型 |
| @version |    版本信息 |

## 变量名的前缀(供参考、非强制)

| Prefix | Element | Example |
| ------ | ------- | ------- |
| i | integer | nVariableName |
| s | string | sVariableName |
| a | array | aArrayName |
| o | object | oObjectName |
| is, can, has | boolean | [Boolean name]ConditionName |
| $ | jQuery object | $VariableName |
| el | element | elElementName |
| event method | event attachment | [event type]_MethodName |
| get | accessor method | getMethodName |
| set | accessor method | setMethodName |
| i, j, k, m, n, etc. * | integer as counter/iterator | (for i=0; i<=oArray.length; i++) |
