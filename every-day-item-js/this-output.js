// Done~~~~
var name = 'window';

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name);
  },
  show2: () => console.log(this.name),
  show3: function () {
    // this -> person2
    return function () {
      console.log(this);
    };
  },
  show4: function () {
    // this -> person2
    return () => console.log(this.name);
  }
};
var person2 = { name: 'person2' };

// call -> 改变this的指向
person1.show1(); // this -> person1 -> person1
person1.show1.call(person2); // this -> person2 -> person2

// 箭头函数 -> 1. this继承上一个函数作用域
// 2. this 在函数定义的那一刻才确定的
person1.show2(); // this -> window -> window
person1.show2.call(person2); // this -> window -> window

// var fn = person1.show3(); window.fn();
person1.show3()(); // this -> window {}
// fn.call(person2) 
person1.show3().call(person2); // this -> person2 { name: 'person2' };
// var fn = person1.show3.call(person2); this -> person2
// window.fn(); this -> window
person1.show3.call(person2)(); // this -> window {}

// var fn = person1.show4(); this -> person1
// fn();  
person1.show4()(); // person1
// fn.call(person2)
person1.show4().call(person2); // this -> person1 -> person1
// var fn = person1.show4.call(person2); // this -> person2
// fn();
person1.show4.call(person2)(); // person2