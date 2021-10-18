// 题目1
(function() {
  a = 5;
  console.log(window.a);
  var a = 10;
  console.log(a);
})();

// 
(function() {
  var a;
  a = 5;
  console.log(window.a); // undefined
  a = 10;
  console.log(a);  // 10
})();

// 题目2
function test() {
  console.log(1, foo);
  console.log(2, bar);
  var foo = 'Hello';
  console.log(3, foo);
  var bar = function () {
      return 'world';
  }
  function foo() {
      return 'hello';
  }
}
test();

// 
function test() {
  function foo() {
    return 'hello';
  }
  var foo;
  var bar;
  console.log(1, foo); // function foo
  console.log(2, bar); // undefined
  foo = 'Hello';
  console.log(3, foo); // hello
  bar = function () {
    return 'world';
  };
  console.log(4, bar); // function bar
}
