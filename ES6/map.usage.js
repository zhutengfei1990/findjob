const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(([key, value]) => map.set(key, value));

console.log(map);