var findMedianSortedArrays = function (nums1, nums2) {
  for (let i = 0; i < nums2.length; i++) {
    nums1 = searchInput(nums1, nums2[i]);
    console.log("nums1: ", nums1);
  }
  const length = nums1.length;
  if (length % 2 !== 0) {
    return nums1[Math.floor(length / 2)];
  } else {
    const n = length / 2;
    return (nums1[n - 1] + nums1[n]) / 2;
  }
};

function searchInput(arr, a) {
  let l = 0;
  let r = arr.length - 1;
  let t = -1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === a) {
      t = m;
      break;
    } else if (arr[m] > a) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  if (t === -1) {
    t = l;
  }
  for (let i = arr.length; i > t; i--) {
    arr[i] = arr[i - 1];
  }
  arr[t] = a;
  return arr;
}

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(findMedianSortedArrays(arr1, arr2));
