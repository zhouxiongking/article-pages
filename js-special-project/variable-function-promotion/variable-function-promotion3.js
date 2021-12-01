var name = 'null';
var age = 38;
var length = 10;
var say = 'speak';

function demo(arg) {
  console.log(obj1, arg);

  function arg() {}

  var obj1 = {
    name: '熊大',
    age: 88,
    say: function() {
      return (name, age) => {
        console.log(`我是${this.name}, 年龄：${age}`);
      };
    }
  }
}

var length;
console.log(length);
length = 108;
console.log(length);

var obj2 = {
  name: '熊二',
  age: 58,
  say: obj1.say,
};

if (
  console.log('undefined') ||
  (!!'' + '1' && typeof typeof null && !!length)
) {
  setTimeout(() => {
    obj1.say('熊三', 88);
  })
  obj2.say('光头强', 77);
} else {
  setTimeout(() => {
    obj2.say('肥波', 199);
  });
}

new Promise((resolve, reject) => {
  resolve(188);
}).then(age => {
  obj2.say('光头强', age);
});

demo(18);