var name = 'null';
var age = 38;
var length = 10;
var say = 'speak';

function demo(arg) {
  function arg() {}
  // 变量提升和函数提升
  var obj1;
  console.log(obj1, arg); // undefined fn() {}
 
  function arg() {}

  obj1 = {
    name: '熊大',
    age: 88,
    say: function() {
      return (name, age) => {
        console.log(`我是${this.name}, 年龄：${age}`);
      };
    }
  };

  var length;
  console.log(length); // undefined
  length = 108;
  console.log(length); // 108

  var obj2 = {
    name: '熊二',
    age: 58,
    say: obj1.say,
  };
  // !'' -> true !!'' -> false + '1' -> 'false1' -> true
  // typeof null -> 'object'
  // typeof 'object' -> 'string' -> true
  // true
  if (
    console.log('undefined') ||
    (!!'' + '1' && typeof typeof null && !!length)
  ) {
    // 宏任务
    setTimeout(() => {
      // this -> obj1 obj1.name -> 熊大 age -> 88
      // 我是 熊大, 年龄：88
      obj1.say()('熊三', 88);
    });
    // this -> obj2 this.name -> 熊二 age -> 77
    // 我是 熊二, 年龄：77
    // 同步任务
    obj2.say()('光头强', 77);
  } else {
    setTimeout(() => {
      obj2.say()('肥波', 199);
    });
  }

  // 微任务
  new Promise((resolve, reject) => {
    resolve(188);
  }).then(age => {
    // age -> 188
    // this -> obj2 
    // obj2.name -> 熊二 age -> 188
    //  我是 熊二, 年龄：188
    obj2.say()('光头强', age);
  });
}

demo(18);