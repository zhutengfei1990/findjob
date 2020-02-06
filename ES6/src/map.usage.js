const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(([key, value]) => map.set(key, value));

// 数组去重
console.log([... new Set([1, 2, 2, 4])]);

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
let {aa, bb} = {'aa': 1, 'bb': 2}
console.log(aa, bb);
