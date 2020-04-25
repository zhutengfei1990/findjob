/**
 * 快排(升序)
 */
function qsort(arr, start, end) {
  let i = start;
  let j = end;
  if (start > end) {
    return;
  }
  const base = arr[start];
  while(i != j) {
    while(i < j && arr[j] >= base) {
      j --;
    }
    while(i < j && arr[i] <= base) {
      i ++;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  arr[start] = arr[j]
  arr[j] = base;
  qsort(arr, start, j - 1);
  qsort(arr, j + 1, end);
}

const arr = [4,3,1,-1];
qsort(arr, 0, arr.length - 1)
console.log(arr);