// 闭包
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}

fun(0).fun(1).fun(2).fun(3);
// a -> fun(0)
// n -> 0 o -> undefined => undefined
// a -> { fun: fn(m) }
// b -> a.fun(1)
// m -> 1, n -> 0
// n -> 1, o -> 0 => 0
// b -> { fun: fn(m) }
// c -> b.fun(2)
// m -> 2, n -> 1
// n -> 2, o -> 1 => 1
// c -> { fun: fn(m) }
// d -> c.fun(3)
// m -> 3, n -> 2
// n -> 3, o -> 2 => 2
// d -> { fun: fn(m) }

const a = fun(0);
// n -> 0 o -> undefined => undefined
// a -> { fun: fn(m) }
a.fun(1);
// m -> 1, n -> 0
// n -> 1 o -> 0 => 0
a.fun(2);
// m -> 2, n -> 0
// n -> 2, o -> 0 => 0
a.fun(3);
// m -> 3, n -> 0
// n -> 3, 0 -> 0 => 0

// fun指向
// 第一个fun：全局函数
// 第二个fun：对象中的属性值
// 第三个fun：指向第一个fun
