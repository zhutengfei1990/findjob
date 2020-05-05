// 面试官
// 笔试题2:给定两个有序数组(从小到大)nums1和nums2，他们的大小分别为m和n，找出两个数组合并后的中位数
// 面试官
// 示例1
// nums1 = [1, 3]
// nums2 = [2]
// 中位数是2.0

// 示例2
// nums1 = [1, 2]
// nums2 = [3, 4]
// 中位数是 (2 + 3)/2 = 2.5

function f(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const mid = Math.floor(len / 2);
  let result = 0;
  if (len % 2 !== 0) {
    result = arr[mid];
  } else {
    result = (arr[mid] + arr[mid - 1])/2 
  }
  return result.toFixed(1);
}

console.log(f([1,3], [2]));
console.log(f([1,2], [3,4]));