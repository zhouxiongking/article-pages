// https://www.wenjiangs.com/doc/groupby
// Done~~~
// 数组分组,将传入的数据按指定特征进行分组。
// 输入: 数组值，函数或者属性
// 输出: 对象
//      key: 数组所有元素经过处理后的值
//      value: 相同key的数组元素集合
/**
   groupBy([6.1, 4.2, 6.3], Math.floor);
   // { 4: [4.2], 6: [6.1, 6.3] }
   groupBy(['one', 'two', 'three'], 'length');
   // { 3: ['one', 'two'], 5: ['three'] }
 */
function groupBy(arr, fn) {
   // [6.1, 4.2, 6.3] -> [6, 4, 6];
   return arr.map(item => {
      if (typeof fn === 'function') {
         return fn(item);
      } else {
         return item[fn];
      }
   }).reduce((pre, cur, i) => {
      if(!pre[cur]) {
         pre[cur] = [arr[i]];
      } else {
         pre[cur] = pre[cur].concat(arr[i]);
      }
      return pre;
   }, {});
}
groupBy([6.1, 4.2, 6.3], Math.floor);
groupBy(['one', 'two', 'three'], 'length');