// 1. 函数作为返回值
// 2. 函数作为参数传递

var f1 = function () {
  var a = 100
  console.log(a)
}

function F(fn) {
  var a = 20
  fn()
}

F(f1)