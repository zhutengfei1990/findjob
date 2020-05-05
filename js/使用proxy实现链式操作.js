const pipe = function (value) {
  const funcStack = [];
  const oproxy = new Proxy({}, {
    get(pipeObject, fnName) {
      if (fnName === 'get') {
        return funcStack.reduce((val, fn) => {
          return fn(val);
        }, value)
      }
      funcStack.push(global[fnName]);
      return oproxy;
    }
  })
  return oproxy;
}
global.double = double = n => n + 2;
global.pow = pow = n => n * n;

console.log(pipe(2).double.pow.get);
