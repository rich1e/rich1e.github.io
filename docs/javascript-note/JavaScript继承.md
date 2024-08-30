# JS 继承

<!--
 * @Author: rich1e
 * @Date: 2022-07-11 10:51:00
 * @LastEditors: rich1e
 * @LastEditTime: 2022-07-27 12:47:33
-->

[[toc]]

## 原型链继承

> 将父类的实例作为子类的原型

```js
// 父类构造函数
function World() {
  // 私有属性
  this.planet = "Earth";
  this.member = [];

  // 私有方法
  this.getMember = function () {
    console.log(this.member);
  };
}

// 父类原型
World.prototype = {
  // 公共方法
  from: function () {
    console.log(this.planet);
  },
  // 公共属性
  self: {
    population: "70亿",
  },
};

// 子类构造函数
function People() {}

People.prototype = new World(); // 将父类的实例作为子类的原型
People.prototype.constructor = People; // 修复构造函数指向

const asian = new People();
asian.member.push("Asia");
console.log(asian.getMember()); // ['Asia']
console.log(asian.from()); // Earth
console.log(asian.self.population); // 70亿

const europe = new People();
europe.member.push("European");
console.log(asian.getMember()); // ['Asia', 'European']
europe.planet = "Moon";
console.log(europe.from()); // Moon
console.log(asian.from()); // Earth
europe.self.population = "60亿";
console.log(asian.self.population); // 60亿
```

优点

- 父类原型方法和属性实现复用

缺点

- 子类构建实例时不能向父类传递参数
- 父类的引用类型属性会被所有子类实例共享
- 继承单一

## 借用构造函数继承

> 子类构造函数中调用父类构造函数

```js
// 父类构造函数
function World(language) {
  // 私有属性
  this.planet = "Earth";
  this.member = [];
  this.language = language;

  // 私有方法
  this.getMember = function () {
    console.log(this.member);
  };

  // 私有方法
  this.say = function () {
    console.log(this.language);
  };
}

// 父类原型
World.prototype = {
  // 公共方法
  from: function () {
    console.log(this.planet);
  },
  // 公共属性
  self: {
    population: "70亿",
  },
};

// 子类构造函数
function People(language) {
  World.call(this, language);
}

const asian = new People("你好！");
asian.member.push("Asia");
console.log(asian.getMember()); // ['Asia']
console.log(asian.from()); // Uncaught TypeError: asian.from is not a function
console.log(asian.say()); // 你好！

const europe = new People("Hello!");
europe.member.push("European");
console.log(europe.getMember()); // ['European']
console.log(europe.from()); // Uncaught TypeError: europe.from is not a function
console.log(europe.say()); // Hello!
```

优点

- 子类构造函数中可向父类传参
- 避免了引用类型的属性被所有实例共享
- 可以继承多个构造函数属性（call 多个）

缺点

- 只能继承父类构造函数的属性和方法，不能继承父类原型的属性和方法
- 方法都在父类构造函数中定义，无法实现函数复用
- 子类实例的方法每次都是单独创建，影响性能

## 组合式继承

> 组合式继承综合了原型链继承和借用构造函数继承，将两者的优点结合了起来。
> 使用原型链继承原型上的属性和方法，使用构造函数继承实例属性，这样既可以把方法定义在原型上实现重用，又可以让每个实例都有自己的属性。

```js
// 父类构造函数
function World(language) {
  // 父类属性
  this.planet = "Earth";
  this.member = [];
  this.language = language;

  // 私有方法
  this.getMember = function () {
    console.log(this.member);
  };

  // 私有方法
  this.say = function () {
    console.log(this.language);
  };
}

// 父类原型
World.prototype = {
  // 公共属性
  from: function () {
    console.log(this.planet);
  },
  // 公共属性
  self: {
    population: "70亿",
  },
};

// 子类构造函数
function People(language) {
  World.call(this, language); // 第二次调用父类
}

People.prototype = new World(); // 第一次调用父类，将父类的实例作为子类的原型
People.prototype.constructor = People; // 修复构造函数指向

const asian = new People("你好！");
asian.member.push("Asia");
console.log(asian.getMember()); // ['Asia']
console.log(asian.from()); // Earth
console.log(asian.say()); // 你好！

const europe = new People("Hello!");
europe.member.push("European");
console.log(europe.getMember()); // ['European']
europe.planet = "Moon";
console.log(asian.from()); // Earth
console.log(europe.say()); // Hello!
```

优点

- 父类的方法可以被复用
- 父类的引用属性不会被共享
- 子类构建实例时可以向父类传递参数

缺点

- 调用了两次父类构造函数（增加内存消耗），子类的构造函数会代替原型上的那个父类构造函数。

1. 第一次调用给子类的原型添加了父类实例，继承了父类构造函数和原型上所有的属性和方法；
2. 第二次调用给子类的构造函数添加了父类构造函数的属性和方法，从而覆盖了子类原型中的同名参数。

## 原型式继承

> 创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的一个新实例。本质上就是完成了一次浅复制操作。

```js
// 原型式继承
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

const world = {
  member: ["Africa", "North America", "South America", "Antarctica", "Oceania"],
  language: "",
  continent: "",
  getMember: function () {
    console.log(this.member);
  },
  say: function () {
    console.log(this.language);
  },
  from: function () {
    console.log(this.continent);
  },
};

const asian = object(world);
asian.language = "你好！";
asian.continent = "Asia";
asian.member.push("Asia");
console.log(asian.getMember()); // ['Africa', 'North America', 'South America', 'Antarctica', 'Oceania', 'Asia']
console.log(asian.from()); // Asia
console.log(asian.say()); // 你好！

const europe = object(world);
europe.language = "Hello!";
europe.continent = "European";
europe.member.push("European");
console.log(europe.getMember()); // ['Africa', 'North America', 'South America', 'Antarctica', 'Oceania', 'Asia', 'European']
console.log(europe.from()); // European
console.log(europe.say()); // Hello!
```

优点

- 不用单独创建构造函数

缺点

- 父类的引用属性会被所有子类实例共享
- 子类构建实例时不能向父类传递参数

## 寄生式继承

> 寄生式继承是与原型式继承紧密相关的一种思路，即创建一个仅用于封装继承函数过程的函数，该函数在内部以某种方式来增强对象，最后返回对象。

```js
// 原型式继承
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function createAnother(original) {
  // 通过调用函数创建一个新对象
  // object 函数不是必需的，任何能返回新对象的函数都适用此模式
  var clone = object(original);
  // 以某种方式来增强这个对象
  clone.sayHi = function () {
    console.log("hello, world");
  };
  // 返回这个对象
  return clone;
}

const world = {
  member: ["Africa", "North America", "South America", "Antarctica", "Oceania"],
  language: "",
  continent: "",
  getMember: function () {
    console.log(this.member);
  },
  say: function () {
    console.log(this.language);
  },
  from: function () {
    console.log(this.continent);
  },
};

const asian = object(world);
asian.language = "你好！";
asian.continent = "Asia";
asian.member.push("Asia");
console.log(asian.getMember()); // ['Africa', 'North America', 'South America', 'Antarctica', 'Oceania', 'Asia']
console.log(asian.from()); // Asia
console.log(asian.say()); // 你好！
console.log(asian.sayHi()); // hello, world
```

优点

- 新对象不仅具有 `world` 对象的属性和方法，还有自己的 `sayHi()` 方法

缺点

- 使用寄生式继承来为对象添加函数，会由于不能做到函数复用造成效率降低，这一点与构造函数模式类似

## 寄生组合式继承

> 借用构造函数继承属性，通过原型链的混成形式继承方法。背后的基本思路是：不必为了指定子类的原型而调用超类的构造函数，我们所需要的无非就是超类原型的一个副本而已。

```js
// 复制父类的原型对象
function create(original) {
  function F() {}
  F.prototype = original;
  return new F();
}

function inherit(subClass, superClass) {
  // 第一步，创建父类原型的一个副本
  const parent = create(superClass.prototype);
  // 第二步，为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性
  parent.constructor = subClass;
  // 最后一步，将新创建的对象赋值给子类的原型
  subClass.prototype = parent;
}

// 父类构造函数
function World(continent) {
  // 私有属性
  this.planet = "Earth";
  this.continent = continent;
  this.member = [];

  // 私有方法
  this.getMember = function () {
    console.log(this.member);
  };

  this.setMember = function (continent) {
    this.member.push(continent);
  };

  if (continent) {
    this.setMember(continent);
  }
}

// 父类原型
World.prototype = {
  // 公共属性
  from: function () {
    console.log(this.planet);
  },
  self: {
    population: "70亿",
  },
};

// 子类构造函数
function People(continent, language, complexion) {
  World.call(this, continent);
  this.complexion = complexion;
  this.language = language;

  // 自定义方法
  this.say = function () {
    console.log(this.language);
  };
}

inherit(People, World);

const asian = new People("Asia", "你好！", "yellow");
console.log(asian.getMember()); // ['Asia']
console.log(asian.from()); // Earth
console.log(asian.say()); // 你好！
```

寄生组合式继承能够很完美地实现继承，但也不是没有缺点。`inherit()` 方法中复制了父类的原型，赋给子类，假如子类原型上有自定的方法，也会被覆盖，因此可以通过 `Object.defineProperty` 的方式，将子类原型上定义的属性或方法添加到复制的原型对象上，如此，既可以保留子类的原型对象的完整性，又能够复制父类原型。

```js
// 复制父类的原型对象
function create(original) {
  function F() {}
  F.prototype = original;
  return new F();
}

function inherit(subClass, superClass) {
  // 第一步，创建父类原型的一个副本
  const parent = create(superClass.prototype);
  // 第二步，为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性
  parent.constructor = subClass;

  // 子类原型上定义的属性或方法添加到 parent 复制的原型对象上
  /**
   * @see https://juejin.cn/post/6844904161071333384#heading-6
   */
  for (let key in subClass.prototype) {
    Object.defineProperty(parent, key, {
      value: subClass.prototype[key],
    });
  }

  // 最后一步，将新创建的对象赋值给子类的原型
  subClass.prototype = parent;
}

// 父类构造函数
function World(continent) {
  // 私有属性
  this.planet = "Earth";
  this.continent = continent;
  this.member = [];

  // 私有方法
  this.getMember = function () {
    console.log(this.member);
  };

  this.setMember = function (continent) {
    this.member.push(continent);
  };

  if (continent) {
    this.setMember(continent);
  }
}

// 父类原型
World.prototype = {
  // 公共属性
  from: function () {
    console.log(this.planet);
  },
  self: {
    population: "70亿",
  },
};

// 子类构造函数
function People(continent, language, complexion) {
  World.call(this, continent);
  this.complexion = complexion;
  this.language = language;

  // 自定义方法
  this.say = function () {
    console.log(this.language);
  };
}

People.prototype.from = function () {
  console.log(this.member);
};

inherit(People, World);

const asian = new People("Asia", "你好！", "yellow");
console.log(asian.getMember()); // ['Asia']
console.log(asian.from()); // ['Asia']
console.log(asian.say()); // 你好！
```

总结，寄生组合式继承，集寄生式继承和组合式继承的优点与一身，是实现基于类型继承的最有效方式。

## ES6 Class extends

> ES6 继承的结果和寄生组合继承相似，本质上，`ES6` 继承是一种语法糖。但是，寄生组合继承是先创建子类实例 `this` 对象，然后再将父类的方法添加到 `this` 上，对其增强；而 `ES6` 先创建父类实例对象的属性和方法，加到 `this` 上面（所以必须先调用 `super` 方法），然后再用子类的构造函数修改 `this` 实现继承。

```js
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```

ES6 实现继承的具体原理：

```js
class A {}

class B {}

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
};

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);
```

ES6 继承与 ES5 继承的异同：

相同点

- 本质上 ES6 继承是 ES5 继承的语法糖

不同点：

- ES6 继承中子类的构造函数的原型链指向父类的构造函数，ES5 中使用的是构造函数复制，没有原型链指向。
- ES6 子类实例的构建，基于父类实例，ES5 中不是。

## 总结

- ES6 Class extends 是 ES5 继承的语法糖
- JS 的继承除了构造函数继承之外都基于原型链构建的
- 可以用寄生组合继承实现 ES6 Class extends，但是还是会有细微的差别

## 参考

- 《JavaScript 高级程序设计》（第三版）
- 《你不知道的 Javascript》（上卷）

[Javascript 继承机制的设计思想](https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

[Javascript 面向对象编程（一）：封装](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)

[Javascript 面向对象编程（二）：构造函数的继承](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)

[Javascript 面向对象编程（三）：非构造函数的继承](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)

[理解 JavaScript 中的继承](http://www.yaohaixiao.com/blog/understanding-inheritance-in-javascript/)

[一篇文章理解 JS 继承——原型链/构造函数/组合/原型式/寄生式/寄生组合/Class extends](https://segmentfault.com/a/1190000015727237)

[ES5 与 ES6 继承的区别](https://blog.csdn.net/qq_42908794/article/details/83863886)
