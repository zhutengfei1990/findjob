// 递归调用 --- 耗费内存，因为需要记录很多调用栈信息
function fib(n) {
  if (n <= 1) { return 1; }
  return fib(n - 1) + fib(n - 2);
}

// 尾递归 --- 只记录一次调用，节省内存
function fib2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) { return ac2 };
  return fib2(n - 1, ac2, ac1 + ac2);
}