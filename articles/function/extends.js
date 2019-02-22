/**
 * 继承
 */
/*
 // 定义一个父类Animal
 function Animal(name) {
 // 属性
 this.type = 'Animal';
 this.name = name;
 // 实例方法
 this.sleep = function () {
 return this.name + '正在睡觉！';
 }
 }

 // 原型方法
 Animal.prototype.eat = function (food) {
 return this.name + '正在吃：' + food;
 };

 // 子类Cat
 function Cat(name, color) {
 this.name = name;
 this.color = color;
 }

 Cat.prototype = new Animal();

 var cat = new Cat('加菲猫');

 console.log(cat.type);  // Animal
 console.log(cat.name);  // 加菲猫
 console.log(cat.sleep()); // 加菲猫正在睡觉！
 console.log(cat.eat('猫粮'));  // 加菲猫正在吃：猫粮

 console.log(cat instanceof Cat);    // true,是子类的实例
 console.log(cat instanceof Animal); // true,是父类的实例

 // 父类原型上增加属性
 Animal.prototype.bodyType = 'small';
 // 父类原型上增加方法
 Animal.prototype.run = function () {
 return this.name + '正在奔跑';
 };

 console.log(cat.bodyType);  // small
 console.log(cat.run());  // 加菲猫正在奔跑

 var cat2 = new Cat('英短猫', '灰色');
 console.log(cat2.color);

 var animal = new Animal();
 Cat.prototype = animal;

 function Animal() {
 this.feature = ['fat', 'thin', 'tall'];
 }

 function Cat() {}

 Cat.prototype = new Animal();

 var cat1 = new Cat();
 var cat2 = new Cat();

 console.log(cat1.feature);
 console.log(cat2.feature);
 cat1.feature.push('small');

 console.log(cat1.feature);
 console.log(cat2.feature);

 Cat.prototype.play = function () {};
 Cat.prototype.introduce = 'this is a cat';

 Cat.prototype = new Animal();

 var cat1 = new Cat();
 console.log(cat1.introduce);
 // console.log(cat2.introduce);

 // cat1.introduce = 'hello';
 // console.log(cat2.introduce);


 function Animal(parentAge) {
 // 属性
 this.name = 'Animal';
 this.age = parentAge;
 // 实例方法
 this.sleep = function () {
 return this.name + '正在睡觉！';
 }
 }

 Animal.prototype.eat = function (food) {
 return this.name + '正在吃：' + food;
 };

 function Cat(name) {
 Animal.call(this, 11);
 this.name = name || 'tom';
 }

 var cat = new Cat('tony');
 console.log(cat.sleep());  // tony正在睡觉！
 console.log(cat.age);
 // console.log(cat.eat());  // TypeError: cat.eat is not a function


 var cat = new Cat('tony');
 console.log(cat instanceof Cat);    // true
 console.log(cat instanceof Animal); // false


function Animal(parentAge) {
    // 属性
    this.name = 'Animal';
    this.age = parentAge;
    // 实例方法
    this.sleep = function () {
        return this.name + '正在睡觉！';
    }
}

Animal.prototype.eat = function (food) {
    return this.name + '正在吃：' + food;
};

function Cat(name, age) {
    var animal = new Animal(age);
    for (var key in animal) {
        // 实例属性和方法
        if (animal.hasOwnProperty(key)) {
            this[key] = animal[key];
        } else {
            // 原型属性和方法
            Cat.prototype[key] = animal[key];
        }
    }

    this.name = name;
}

Cat.prototype.eat = function (food) {
    return this.name + '正在吃：' + food;
};

var cat = new Cat('tony', 12);
console.log(cat.age);
console.log(cat.sleep());
console.log(cat.eat('猫粮'));

console.log(cat instanceof Cat);   // true
console.log(cat instanceof Animal);// false
 */

function Animal(parentAge) {
    // 属性
    this.name = 'Animal';
    this.age = parentAge;
    // 实例方法
    this.sleep = function () {
        return this.name + '正在睡觉！';
    };
    this.feature = ['fat', 'thin', 'tall'];
}

Animal.prototype.eat = function (food) {
    return this.name + '正在吃：' + food;
};

function Cat(name) {
    Animal.call(this);
    this.name = name;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var cat = new Cat('tony');
console.log(cat.name);   // tony
console.log(cat.sleep()); // tony正在睡觉！
console.log(cat.eat('猫粮'));  // tony正在吃：猫粮

var cat1 = new Cat();
var cat2 = new Cat();
// 先输出两个实例的feature值
console.log(cat1.feature);  // [ 'fat', 'thin', 'tall' ]
console.log(cat2.feature);  // [ 'fat', 'thin', 'tall' ]
// 改变cat1实例的feature值
cat1.feature.push('small');
// 再次输出两个实例的feature值，发现cat2实例也受到影响
console.log(cat1.feature);  // [ 'fat', 'thin', 'tall', 'small' ]
console.log(cat2.feature);  // [ 'fat', 'thin', 'tall', 'small' ]

console.log(cat1 instanceof Cat);
console.log(cat1 instanceof Animal);

function Cat(name) {
    Animal.call(this);
    this.name = name;
}

(function () {
    var Super = function () {};
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();
    Cat.prototype.constructor = Cat;
})();

var cat = new Cat('tony');
console.log(cat.name);   // tony
console.log(cat.sleep()); // tony正在睡觉！
console.log(cat.eat('猫粮'));  // tony正在吃：猫粮


