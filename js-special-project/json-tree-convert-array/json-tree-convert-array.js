let flatArr = [
  {id: 1, title: '标题1', parent_id: 0},
  {id: 2, title: '标题2', parent_id: 0},
  {id: 3, title: '标题2-1', parent_id: 2},
  {id: 4, title: '标题3-1', parent_id: 3},
  {id: 5, title: '标题4-1', parent_id: 4},
  {id: 6, title: '标题2-2', parent_id: 2},
];

// 扁平的数组结构转换为JSON树形结构
function convert(list) {
  const result = [];
  const map = list.reduce((pre, cur) => {
    pre[cur.id] = cur;
    return pre;
  }, {});
  for (let item of list) {
    if (item.parent_id === 0) {
      result.push(item);
      continue;
    }
    if (item.parent_id in map) {
      const parent = map[item.parent_id];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return result;
}

const res = convert(flatArr);
console.log(res);

// JSON树形结构转换为扁平数组结构
function flatten(data) {
  return data.reduce((pre, cur) => {
    // concat
    const { id, title, parent_id, children = [] } = cur;
    return pre.concat([{ id, title, parent_id }], flatten(children));
  }, []);
}

const flattenRes = flatten(res);
console.log(flattenRes);




