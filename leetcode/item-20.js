// 二叉树遍历
const data = {
  value: 'A',
  left: {
    value: 'B',
    left: null,
    right: {
      value: 'C',
      left: {
        value: 'D',
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    value: 'E',
    left: null,
    right: {
      value: 'F',
      left: {
        value: 'G',
        left: {
          value: 'H',
          left: null,
          right: null,
        },
        right: {
          value: 'K',
          left: null,
          right: null,
        },
      },
      right: null,
    },
  },
};

// 先序遍历
function preOrder(data) {
  if (data === null) {
    return;
  }
  console.log(data.value);
  preOrder(data.left);
  preOrder(data.right);
}

preOrder(data);

console.log('-----------');

// 中序遍历
function inOrder(data) {
  if (data === null) {
    return;
  }
  inOrder(data.left);
  console.log(data.value);
  inOrder(data.right);
}

inOrder(data);
console.log('---------------');

// 后续遍历
function postOrder(data) {
  if(data === null) {
    return;
  }
  postOrder(data.left);
  postOrder(data.right);
  console.log(data.value);
}

postOrder(data);
console.log('---------------');

// 层序遍历
// 使用队列的思想，先进先出
// 输出当前节点值后，如果有左节点和右节点，则添加到队列里
// 循环处理队列，直到队列中节点都处理完成
function sequenceOrder(data) {
  if (data === null) {
    return;
  }
  const queue = [data];
  while(queue.length) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

sequenceOrder(data);