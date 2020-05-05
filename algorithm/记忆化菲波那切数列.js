  // 避免重复计算
  const map = new Map();
  function fib(n) {
    if (map.has(n)) {
      return map.get(n);
    }
    let result = 0;
    if (n <= 2) {
      result = 1;
    } else {
      result = fib(n - 1) + fib(n - 2);
    }
    map.set(n, result);
    return result
  }

  console.log(fib(4));