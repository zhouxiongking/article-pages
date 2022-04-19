// 运算符题目
// Done~~~
let a = 0;
let b = 1;
let c = b.value?.v;
// 短路运算
// true || false, false || true
a ||= 10; // a = a || 10 => a = 10
b &&= 2; // b = b && 2; -> b = 2 
c ??= 5; // c = undefined ->
        // c = c ?? 5 -> c = 5
console.log(a + b + c); // 17

// ?. 可选链
obj?.value; // undefined
const res = await fn();
// {data: {list: []}}
if (res && res.data && res.data.list) {
  // 业务逻辑
}
if (res?.data?.list) {
  // 业务逻辑
}

// 双问号?? -> 空值合并运算符
p1 ?? p2
// ?? ||
var p1 = null || 1;
var p2 = null ?? 1;
// ?? -> null和undefined
// || -> null和undefined, '', 0

/**
 * 知识点总结：
  1. ||= 和 &&= 都具有短路运算的特性
  2. ?. -> 可选链，a?.b，当a为null或者undefined时，直接返回undefined，不会抛出异常
  3. ?? -> 空值合并运算符，p1 ?? p2，当p1为null或者undefined时，取p2值
  4. 需要注意 ?? 和 || 的差异，|| 对于'', 0也会取后面的值。
 */