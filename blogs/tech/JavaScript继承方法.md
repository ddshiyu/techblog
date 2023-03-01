---
title: js的继承方式
date: 2023-02-09
categories:
 - 技术
tags:
 - 继承
publish: true
---
:::tip
不管是面试还是平常工作，js的继承都是逃脱不了的，它是JavaScript这门语言的核心所在，今天在总结手敲一下
:::
<!-- more -->
我们先提供一个父类
```javascript
function Animal (name, weight) {
  this.name = name
  this.weight = weight
  this.teeth = 30
}
Animal.prototype.color = 'white'
Animal.prototype.legs = [1, 2, 4]
Animal.prototype.run = function () {
  console.log('奔跑方法')
}
```
## 一、原型链继承
```javascript
function Dog (speed) {
  this.speed = speed
}
function Duck (speed) {
  this.speed = speed
}
Dog.prototype = new Animal('狗', 30)
Duck.prototype = new Animal('鸭子', 10)
const animal = new Animal('猪', 29)
const dog = new Dog()
const duck = new Duck()
console.log(dog.name);
console.log(dog.weight);
console.log(dog.color);
dog.run()
// 可以传参，也可以使用原型上的方法
dog.name = 'pig'
dog.color = 'black'
// push会发生更改父类属性，直接赋值不会更改
// dog.legs.push(6)
dog.legs = [4]
console.log(animal.name)
console.log(duck.name)
console.log(duck.color)
console.log(duck.legs)
console.log(dog.color)
console.log(dog.legs)
```


**缺点：**

1. **所有实例共享了原型链上的属性方法，引用类型共享引用地址，故某个实例修改了引用类型的数据，其他实例也会发生变化**
2. **不能传递实例属性参数**
## 二、借用构造函数继承
它的核心方法是call
```javascript
function Tiger () {
  Animal.call(this)
}
const tiger = new Tiger()
console.log(tiger.color); // undefined 不能访问到原型上的属性
console.log(tiger.teeth); // 30 可以访问实例属性
```

**缺点：**

1. **无法继承原型上的属性**
2. **无法实现构造函数的复用。（每次用每次都要重新调用）**
3. **每个新实例都有父类构造函数的副本，臃肿。**
## 三、组合继承（组合原型链继承和借用构造函数继承）
它是对上面两个方法的组合
```javascript
function Lion(name, weight) {
  Animal.call(this, name, weight)
}
Lion.prototype = new Animal()
Lion.prototype.constructor = Lion // 构造函数指回原来的函数
const lion = new Lion('狮子', 200)
console.log(lion.name);
console.log(lion.color);
```

**缺点：**

1. **第一次调用Animal()：给Lion.prototype写入两个属性name，color。**
2. **第二次调用Animal()：给lion写入两个属性name，color。**
## 四、原型式继承
```javascript
const person = {
  name: 'John',
  age: 36,
  say: function () {
    console.log('hi')
  }
}
// 类似Object.create()
function object(obj) {
  function F () {}
  F.prototype = obj
  return new F()
}
const student = object(person)
console.log(student.name)
console.log(student.age)
student.say() // hi, 方法也可以继承
```

**缺点：**

1. **原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。**
2. **无法传递参数**
## 五、寄生式继承
```javascript
function jisheng(obj) {
  const clone = object(obj)
  clone.sayHi = function () {
    console.log('sayhi') // 多了一种添加公共方法
  }
  return clone
}
const teacher = jisheng(person)
console.log(teacher.name)
console.log(teacher.age)
teacher.sayHi() // hi, 方法也可以继承
```

**缺点：**

1. **原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。**
2. **无法传递参数**
## 六、寄生组合式继承
```javascript
function Monkey () {
  Animal.call(this)
}
const con = object(Animal.prototype)
Monkey.prototype = con
Monkey.prototype.constructor = Monkey
const monkey = new Monkey()
console.log(monkey.color)
```

**这是最为常用且使用的方法，只调用了一次父类构造函数**
## 总结
这些都是ES5以及之前的实现方式，ES6时代添加了class的写法，继承使用extend关键字，更加贴近类似java等面向对象编程语言的语法

