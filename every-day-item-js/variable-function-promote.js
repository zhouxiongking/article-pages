// https://github.com/lgwebdream/FE-Interview/issues/40
// Done~~~~~
var a = 1;
(function a () {
    'use strict';
    a = 2;
    console.log(a); 
})();

// 2
// window.a = 1 window.a = 2 
// 1. 在作用域空间寻找变量
// 2. 函数声明和变量声明，函数声明优先于变量声明的
// a -> fn
// 3. 非匿名立即执行函数，函数变量是只读的，不能进行赋值。


