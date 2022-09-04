// range
class RangeList {
  constructor() {
    this.list = [];
  }
  add(arr) {
    const listLength = this.list.length;
    if (!listLength) {
      this.list.push(arr);
    } else {
      // 1. 当插入的区间刚好包含在某一个子区间，则不做任何处理
      const inChildRange = this.list.some((item) => {
        return item[0] <= arr[0] && item[1] >= arr[1];
      });
      if (inChildRange) {
        return;
      }
      // 2. 当插入的区间不在所有的子区间内，直接排序push
      let notInChildRange = false;
      let pushIndex = 0;
      for (let i = 0; i < listLength; i++) {
        if (i < listLength - 1) {
          if (this.list[i][1] < arr[0] && this.list[i + 1][0] > arr[1]) {
            notInChildRange = true;
            pushIndex = i + 1;
            break;
          }
        } else {
          if (this.list[i][1] < arr[0]) {
            notInChildRange = true;
            pushIndex = i + 1;
          }
        }
      }
      if (notInChildRange) {
        this.list.splice(pushIndex, 0, arr);
        return;
      }
      // 3. 当插入的区间有交集的时候,把两个或多个合并为一个,或者扩充某个
      let firstIndex = this.list.findIndex(
        (item) => item[0] <= arr[0] && item[1] >= arr[0]
      );
      if (firstIndex < 0) {
        if (this.list[0][0] > arr[0]) {
          firstIndex = 0;
        } else {
          firstIndex = this.list.findIndex((item, i) => {
            return this.list[i][1] < arr[0] && this.list[i + 1][0] > arr[0];
          });
        }
      }
      let combineIndex = firstIndex;
      let combineCount = combineIndex >= 0 ? 1 : 0;
      while (combineCount > 0 && combineIndex < listLength - 1) {
        if (this.list[combineIndex + 1][0] <= arr[1]) {
          if (this.list[combineIndex + 1][1] <= arr[1]) {
            combineCount++;
            combineIndex++;
          } else {
            combineCount++;
            combineIndex++;
            break;
          }
        } else {
          break;
        }
      }
      if (combineCount > 0) {
        const newArr = [];
        newArr[0] = this.list[firstIndex][0];
        if (this.list[combineIndex][1] > arr[1]) {
          newArr[1] = this.list[combineIndex][1];
        } else {
          newArr[1] = arr[1];
        }
        this.list.splice(firstIndex, combineCount, newArr);
        return;
      }
    }
  }
  remove(arr) {
    if (arr[0] === arr[1]) return;
    const listLength = this.list.length;
    // 1. 不在任何区间，不做处理
    let notInChildRange = false;
    for (let i = 0; i < listLength; i++) {
      if (i < listLength - 1) {
        if (this.list[i][1] < arr[0] && this.list[i + 1][0] > arr[1]) {
          notInChildRange = true;
          break;
        }
      } else {
        if (this.list[i][1] < arr[0]) {
          notInChildRange = true;
        }
      }
    }
    if (notInChildRange) {
      return;
    }
    let leftIndex = this.list.findIndex(
      (item) => item[0] <= arr[0] && item[1] >= arr[0]
    );
    let rightIndex = this.list.findIndex(
      (item) => item[0] <= arr[1] && item[1] >= arr[1]
    );
    // 2. 左右值刚好都在某个区间
    if (leftIndex >= 0 && rightIndex >= 0) {
      let leftArr = [];
      let rightArr = [];
      if (this.list[leftIndex][0] !== arr[0]) {
        leftArr = [this.list[leftIndex][0], arr[0]];
      }
      if (this.list[leftIndex][1] !== arr[1]) {
        rightArr = [arr[1], this.list[rightIndex][1]];
      }
      const delCount = rightIndex - leftIndex + 1;
      let insertArr = [];
      if (leftArr.length) {
        insertArr.push(leftArr);
      }
      if (rightArr.length) {
        insertArr.push(rightArr);
      }
      this.list.splice(leftIndex, delCount, ...insertArr);
      return;
    }
    // 3. 左边值在区间，右边值不在区间
    if (leftIndex >= 0 && rightIndex < 0) {
      let delCount = 0;
      let dealIndex = leftIndex;
      while (dealIndex < listLength) {
        if (this.list[dealIndex][1] <= arr[1]) {
          delCount++;
          dealIndex++;
        } else {
          break;
        }
      }
      const insertArr = [this.list[leftIndex][0], arr[0]];
      this.list.splice(leftIndex, delCount, insertArr);
      return;
    }
    // 4. 左边值不在区间，右边值在区间
    if (leftIndex < 0 && rightIndex >= 0) {
      let delCount = 0;
      let dealIndex = rightIndex;
      while (dealIndex >= 0) {
        if (this.list[dealIndex][0] >= arr[0]) {
          delCount++;
          dealIndex--;
        } else {
          break;
        }
      }
      const insertArr = [arr[1], this.list[rightIndex][1]];
      this.list.splice(dealIndex + 1, delCount, insertArr);
      return;
    }
    // 5. 左边值不在区间，右边值也不在区间
    if (leftIndex < 0 && rightIndex < 0) {
      let delRightIndex;
      let delLeftIndex;
      if (arr[1] > this.list[listLength - 1][1]) {
        delRightIndex = listLength - 1;
      } else {
        delRightIndex = this.list.findIndex((item, i) => {
          return this.list[i][1] < arr[1] && this.list[i + 1][0] > arr[1];
        });
      }
      if (arr[0] < this.list[0][0]) {
        delLeftIndex = 0;
      } else {
        delLeftIndex = this.list.findIndex((item, i) => {
          return this.list[i][1] < arr[0] && this.list[i + 1][0] > arr[0];
        });
      }
      this.list.splice(delLeftIndex + 1, delRightIndex - delLeftIndex);
      return;
    }
  }
  print() {
    const result = this.list.map((item) => {
      return `[${item.join(",")})`;
    });
    console.log(result.join(" "));
  }
}

const r1 = new RangeList();
// 第一组测试
r1.add([1, 5]);
r1.print();
r1.add([10, 20]);
r1.print();
r1.add([10, 20]);
r1.print();
r1.add([20, 21]);
r1.print();
r1.add([2, 4]);
r1.print();
r1.add([3, 8]);
r1.print();

r1.remove([10, 10]);
r1.print();
r1.remove([10, 11]);
r1.print();
r1.remove([15, 17]);
r1.print();
r1.remove([3, 19]);
r1.print();

// 第二组测试
// r1.add([1, 5]);
// r1.print();
// r1.add([18, 20]);
// r1.print();
// r1.add([2, 4]);
// r1.print();
// r1.add([10, 15]);
// r1.print();
// r1.add([4, 7]);
// r1.print();
// r1.add([9, 11]);
// r1.print();

// r1.remove([8, 9]);
// r1.print();
// r1.remove([6, 12]);
// r1.print();
// r1.remove([14, 16]);
// r1.print();
// r1.remove([16, 19]);
// r1.print();
// r1.remove([11, 21]);
// r1.print();
