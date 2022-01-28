// https://github.com/xiaoyu2er/blog/issues/1
// 涉及到undefined和empty的区别
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});