# Object.create()

[[toc]]

## 使用构造函数创建

```js
/**
 * @see https://cloud.tencent.com/developer/article/1832376
 */
const createObject = function (proto, propertiesObject) {
  if (typeof proto !== "object" && proto !== null) {
    throw new Error("the first param must be an object or null");
  }
  if (typeof propertiesObject === null) {
    throw "TypeError";
  }
  // 创建一个空的构造函数
  function Fn() {}
  // Fn.prototype 属性指向参数对象 proto，继承 proto 的属性
  Fn.prototype = proto;
  // 返回 Fn 的实例
  const obj = new Fn();

  // 处理传参 null 的情况
  if (proto === null) {
    obj.__proto__ = proto;
  }

  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};
```

## 使用空对象创建

```js
Object.create = function (proto, propertiesObject) {
  if (typeof proto != "object" && proto !== null) {
    throw new Error("the first param must be an object or null");
  }
  if (typeof propertiesObject === null) {
    throw "TypeError";
  }
  let obj = {};
  obj.__proto__ = proto;
  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};
```
