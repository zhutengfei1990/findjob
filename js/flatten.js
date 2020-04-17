function flatten(array) {
  while(array.some(item => Array.isArray(item))) {
    array = Array.prototype.concat.apply([], array);
  }
  return array;
}
let arr = [1,2,3,[4,5,[6,7]]];

function flatten2(array) {
  return array.flat(Infinity);
}

// 一层
function oneDeep(array) {
  return array.reduce((acc, val) => acc.concat(avl), []);
}

function oneDeep2(array) {
  return [].concat(...array);
}

// 无限层
function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d -1) : val), []) : arr.slice();
}