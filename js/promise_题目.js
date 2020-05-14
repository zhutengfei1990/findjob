// 1 3 2
new Promise(() => {
  console.log(1);
  throw new Error(2);
})
console.log(3);
