2015年6月17日发布的JavaScript语言标准ECMAScript 2015(即：ES6)是最具里程杯意义的一个语言标准。在该标准中，不仅引入了众多新的语言特性，而且制定了新的`ECMAScript`标准的发布策略。本文将对`ECMAScript`标准的最新发布流程做相关介绍。

1. JavaScript的历史
   - [1.1 JavaScript与ECMAScript](https://itbilu.com/javascript/js/V1APADgrG.html#origin)
   - [1.2 ECMAScript历史版本](https://itbilu.com/javascript/js/V1APADgrG.html#versions)
2. ECMAScript标准提议及发布过程
   - [2.1 标准的制定者-`TC39`](https://itbilu.com/javascript/js/V1APADgrG.html#tc39)
   - [2.2 ECMAScript标准的制定过程](https://itbilu.com/javascript/js/V1APADgrG.html#process)

## 1. JavaScript的历史

### 1.1 JavaScript与ECMAScript

**诞生**

JavaScript最初由Netscape公司的Brendan Eich创造。其设计目的是为增强`Navigator`浏览器的交互性，而推出的一种可以在浏览器中直接运行的语言，最初叫做`LiveScript`。之所以叫做`JavaScript`，是因为Netscape与Sun(已被Oracle收购)的合作关系。管理层希望将设计这门语言设计为“简化版的Java语言”，而Brendan Eich对Java没有一点兴趣。为了完成公司的任务，他借签了`C`语言的基本语法、Java语言的数据类型和内存管理、`Scheme`语言将函数做为一等公民、`Self`语言基于原型(`prototype`)的继承机制，仅用10天时间就把`JavaScript`设计了出来。由于其设计的比较匆忙，导致后来很长一段时间`JavaScript`写出来的程序会有各种各样的问题。

**标准化**

为了推动JavaScript的发展，Netscape将这门语言提交给了`ECMA`（European Computer Manufacturers Association，欧洲计算机制造商协会）。因为`Java`的授权问题，也为了保持语方的开放性和中立性，该标准被称做`ECMAScript`。提交给`ECMA`后，`ECMA`于次年（1997年）通过`ECMA-262`标准文件发布了第一个语言标准，即：`ECMAScript 1`。

因此，ECMAScript是一个语言标准，JavaScript可以认为是ECMAScript的一个实现，两者在大多数情况下是可以互换的。



### 1.2 ECMAScript历史版本

发展至今（2016年12月31日），ECMAScript共经历了`ES1`、`ES2`、`ES3`、`ES4`、`ES5`（`ES5.1`）、`ES6`、`ES7`7个语言版本，其中`ES1`、`ES3`、`ES5`、`ES6`为改动较大的版本。各版本介绍如下：

**ECMAScript 1**

`1997年06月`发布，第一个`ECMAScript`语言本，奠定了`ECMAScript`语言发展的基础。

**ECMAScript 2**

1998年06月发布，对`ES1`标准的格式修正，使其与`ISO/IEC16262`国际标准一致。

**ECMAScript 3**

1999年12月发布，该版本增加了大量的语言特性，如：强大的正则表达式、更好的文字链处理、新的控制指令、异常处理、错误定义等。该标准成为JavaScript的通行标准，也是支持最广泛的一个标准。

**ECMAScript 4**

2007年10月，ECMAScript 4.0版草案发布，该草案对3.0版做了大幅升级，并计划于次年8月正式发布。由于该版本目标过于激进，各方(各浏览器厂商)分歧太大，ECMA最终决定中止该版本的发布。但其中部分功能成为了ES5的Harmony基础。

**ECMAScript 5**

2009年12月发布，该版本澄清了许多第3版本的模糊规范，对`Object`、`Array`、`Function`等原生对象做了大幅扩展使之更强大，并增加了严格模式（strict mode）。

2011年6月，ECMAscript 5.1版发布，并且成为ISO国际标准（`ISO/IEC 16262:2011`）。

**ECMAScript 2015 / ES6**

2015年6月17日发布，也就是`ECMAScript 6`，官方名称是`ECMAScript 2015`。从这一版本起，ECMA修改了版本发布规则：标准要从事实标准中诞生，实现要先于标准存在。要进入标准草案必须有至少两个JavaScript 引擎实现、社区里有充分的人气和足够的`test 262 `测试。旨在通过更频繁地发布小规模增量更新，促进标准和语言的快速发展，而版本命令规则使用`ECMAScript+年份`的形式。

`ECMAScript 2015`是继ES5之后最大的一次改进，在该版本中增加了大量新的语言特性，如：[类和模块机制](http://itbilu.com/javascript/js/EJr8w3SJG.html)，大量的[新增对象](http://itbilu.com/javascript/js/V11ifLy0b.html)（类型数组、Map、Set、Promise等），对[原有对象大幅扩展](http://itbilu.com/javascript/js/V1r3F9Y3b.html)，同时还新增了很多[语法特性](http://itbilu.com/javascript/js/EJw_Feas-.html)。截止发布日期，也没有任何一款执行引擎实现了对所有ES6标准的支持，但通过[Babel](http://itbilu.com/nodejs/npm/41K9OSwpe.html)等转译器，人们已经可以使用全部ES6特性，甚至ES7､ES8特性。

可以说，`ECMAScript 2015`是最具里程碑意义的一个版本。

**ECMAScript 2016 / ES7**

2016年3月发布，该版本变动幅度非常小只新增了`Array.prototype.includes`、幂运算(Exponentiation Operator)两项。根据ECMAScript 2015制定的版本发布规范，只有进入当年初的`Stage 4`提议阶段才会被写入当年的语言规范，所以`ECMAScript 2016`及其后的版变动幅度应该都不会太大。



## 2. ECMAScript标准提议及发布过程

`ECMAScript 2015`除对语言做了大幅改进外，还制定了更加规范化和快速的标准制定发布流程，下面是对标准制定及发布流程的一些相关介绍。

### 2.1 标准的制定者-`TC39`

`TC39`是ECMA的第39号技术专家委员会（Technical Committee 39）的简称，是ECMAScript标准的实际制定者。这个委员会并不是一个人，而是负责制定ECMAScript标准的一群人，其成员主要由各个JS引擎（浏览器）厂商工作人员组成。事实上，任何人或开发者都可以注册成为一个[TC39贡献者](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md)，并通过[其Github](https://github.com/tc39/ecma262)提交`proposal`或编写测试用例。



### 2.2 ECMAScript标准的制定过程

一个`ECMAScript`标准的制作过程，包含了[`Stage 0`到`Stage 4`](https://tc39.github.io/process-document/)5个阶段，每个阶段提交至下一阶段都需要`TC39`审批通过。各个阶段介绍如下：

1. Stage 0（Strawman阶段）- 该阶段是一个开放提交阶段，任何在TC39
   
   注册过的贡献都或TC39成员都可以进行提交。提交内容可以是一个提议、想法、初步描述。提交网址如下：

   [Stage 0 Proposals](https://github.com/tc39/ecma262/blob/master/stage0.md)

2. Stage 1（Proposal阶段）- 该阶段是对所提交新特性的正式建议。在这个阶段需具备以下条件：
   
   - TC39指定一名成员作为Champion
- TC39审阅通过
   - 有实现的 Demo 或者 Polyfill
- 初步编写标准，包括：问题描述、解决方案示例、语法语义API、关键的算法及抽象、实现在的复杂度等
   
3. Stage 2（Draft阶段）- 该阶段是会出现标准中的第一个版本。在这个阶段必须要具备以下条件：
   
   - 更规范化语法特性和语意的说明，并使用ECMAScript标准的正式语言描述该特性的语法、语义、API
- 该特性应该有两个实验性的实现，其中一个可以基于Babel等转译器实现
   
4. Stage 3（Canidate阶段）- 该阶段的提议已接近完成，只需要得到提议实现方的反馈，并由用户来进一步推动。在这个阶段应具备以下条件：
   
   - 编写Test 262测试例，且至少2个用例通过测试
- TC39指定的审稿人审核通过
   - 开发者的足够认可

5. Stage 4（Finished阶段）- 该阶段的会被包括到标准之中。在这个阶段应具备以下条件：
   
   - Test 262验收测试通过
- 两个符合规范的实现通过
   - TC39审核通过
- 开发者的支持和认可

接下来，经过ECMA的审核后，该提议将正式被添加到标准中。一般来说只有到了`Stage 4`，该特性才会被确定加入到标准中，然后会在下一次的ECMAScript标准中出现该提议， 当然也并非是百分百的，也可能需要更长的时间。

https://itbilu.com/javascript/js/V1APADgrG.html