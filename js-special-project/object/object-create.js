var girlFriend = {
  name: '萝莉',
  age: 18,
  getName: function() {
    return this.name;
  },
  address: {
    name: '北京市',
    code: '100000'
  }
};

// 1. 基于Object()构造函数
var girlFriend = new Object();
girlFriend.name = '萝莉';
girlFriend.age = 18;
girlFriend.getName = function() {
  return this.name;
};
girlFriend.address = {
  name: '北京市',
  code: '100000'
};

// 2. 基于对象字面量
var girlFriend = {
  name: '萝莉',
  age: 18,
  getName: function() {
    return this.name;
  },
  address: {
    name: '北京市',
    code: '100000'
  }
};

// 3. 基于工厂方法，将通用的属性值赋值过程抽象到一个公共的方法里
// 工厂方法设计模式
function createGirlFriend(name, age, address) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.address = address;
  o.getName = function() {
    return this.name;
  };
  return o;
}
var girlFriend = createGirlFriend('萝莉', 18, {
  name: '北京市',
  code: '100000'
});
// Object 

// 4. 基于构造函数的方法
function GirlFriend(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.getName = function() {
    // 指向对象的实例
    return this.name;
  };
}
var girlFriend = new GirlFriend('萝莉', 18, {
  name: '北京市',
  code: '100000'
});
var girlFriend2 = new GirlFriend('萝莉', 18, {
  name: '北京市',
  code: '100000'
});
console.log(girlFriend.getName === girlFriend2.getName);

// 5. 基于原型的模式
function GirlFriend() {}
GirlFriend.prototype.name = '萝莉';
GirlFriend.prototype.age = 18;
GirlFriend.prototype.address = {
  name: '北京市',
  code: '100000'
};
GirlFriend.prototype.getName = function() {
  return this.name;
}
var girlFriend1 = new GirlFriend();
var girlFriend2 = new GirlFriend();
console.log(girlFriend1.getName === girlFriend2.getName);
console.log(girlFriend2.name);
girlFriend1.name = '萝莉3';
console.log(girlFriend2.name);







// 6. 构造函数和原型相结合
function GirlFriend (name, age, address) {
  // 实例属性
  this.name = name;
  this.age = age;
  this.address = address;
}
// 原型属性
GirlFriend.prototype.getName = function () {
  return this.name;
};
var girlFriend1 = new GirlFriend('萝莉1', 18, {
  name: '北京市',
  code: '100000'
});
var girlFriend2 = new GirlFriend('萝莉2', 19, {
  name: '北京市',
  code: '100000'
});






