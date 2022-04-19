// https://blog.csdn.net/katherine5980/article/details/114882308
// 实现一个可以通过参数缓存任意函数返回值的函数
// 同一个参数下次调用不计算直接拿缓存，缓存数据不能太多要有清理策略
// 缓存数据最多为5个

// LRU策略
function record(func, maxRecordSize) {
  let map = new Map();
  return function () {
    let key = Array.prototype.slice.call(arguments)[0];
    let maxFrequency = 0;
    let minFrequency = Infinity;
    let minFrequencyKey = '';
    map.forEach((value, key) => {
      maxFrequency = Math.max(maxFrequency, value.frequency);
      if (value.frequency < minFrequency) {
        minFrequency = value.frequency;
        minFrequencyKey = key;
      }
    })
    if (map.has(key)) {
      let item = map.get(key);
      map.set(key, { ...item, frequency: maxFrequency + 1 });  // 调整权重
      return item.result;
    } else {
      console.log("compute!")
      let result = func.apply(this, arguments);
      if (map.size >= maxRecordSize) { // 删除一个
        console.log("DEL", minFrequencyKey)
        map.delete(minFrequencyKey);
      }
      map.set(key, { result: result, frequency: maxFrequency + 1 });
      console.log("SET", key, { result: result, frequency: maxFrequency + 1 })
      return result;
    }
  };
}