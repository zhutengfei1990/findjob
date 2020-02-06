// 模拟Function的call方法
Function.prototype.myCall = function () {
  const thisObj = arguments[0] || window;
  thisObj.fn = this;

  const args = [];
  for(let i = 1; i < arguments.length; i ++) {
    args.push(arguments[i])
  } 
  const result = thisObj.fn(...args);

  delete thisObj.fn;
  return result;
}

function f() {
  console.log(this.a);
}

f.myCall({ a: 1})
f.call({ a: 1})

// var obj = {
//   a: 12,
//   fn: function() {
//     console.log(this.a)
//   },
// }

// obj.fn();