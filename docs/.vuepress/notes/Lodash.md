#lodash 

`omit` 函数可以删除对象中指定的元素，返回一个新的对象。它接受一个对象和一个数组作为参数，数组中的元素为要删除的对象的属性名。

```js
const _ = require('lodash');

const obj = { a: 1, b: 2, c: 3 };
const result = _.omit(obj, ['a', 'b']);
console.log(result); // { c: 3 }
```

`pickBy` 函数可以根据指定的条件删除对象中的元素，返回一个新的对象。它接受一个对象和一个函数作为参数，函数中定义了删除元素的条件。

```js
const _ = require('lodash');

const obj = { a: 1, b: 2, c: 3 };
const result = _.pickBy(obj, (value, key) => key !== 'a');
console.log(result); // { b: 2, c: 3 }
```

`remove` 删除数组中的元素和对象数组中的元素。

```js
var fruits = ['Apple', 'Banana', 'Orange', 'Celery'];

_.remove(fruits,function(x){ 
      return x === 'Apple' 
})
// ['Banana', 'Orange', 'Celery']
```

```js
var mm = [{username: '张三', age: 33}, {username: '李四', age: 44}]

_.remove(mm,function(x){ 
        return x.username == '李四'
})
// [{username: '张三', age: 33}]
```