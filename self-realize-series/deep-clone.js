// https://juejin.cn/post/6844904121577766919
// https://juejin.cn/post/6844903929705136141

function deepClone(target, map = new Map()) {
  if (!isObject(target)) {
    return target;
  }
  const type = getType(target);
  let cloneObj;
  if (deepTag.includes(type)) {
    cloneObj = getInit(target);
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneObj);
  
  // 克隆set
  if (type === '[object Set]') {
    target.forEach(value => {
      cloneObj.add(deepClone(value, map));
    });
    return cloneObj;
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
        cloneTarget.set(key, clone(value,map));
    });
    return cloneTarget;
  }

  // 克隆对象和数组
  if (type === '[object Array]' || type === '[object Object]') {
    for (const key in target) {
      cloneObj[key] = deepClone(target[key], map);
    }
    return cloneObj;
  }
}

function isObject(target) {
  const type = typeof target;
  return type !== null && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target);
}

function getInit(target) {
  const ctor = target.constructor;
  return new ctor();
}
