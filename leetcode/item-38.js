/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a1, a2) => {
    return a1[0] - a2[0];
  });
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    console.log('last:', last);
    console.log('intervals[i]:', intervals[i]);
    if (intervals[i][0] > last[1]) {
      result.push(intervals[i]);
    } else {
      last[1] = Math.max(last[1], intervals[i][1]);
    }
    console.log('result:', result);
  }
  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));