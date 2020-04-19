function curry(fn) {
  const slice = Array.prototype.slice;
  const args = slice.call(arguments, 1);
  return function() {
    const innerArgs = slice.call(arguments);
    const finalAgrs = args.concat(innerArgs);
    return fn.apply(null, finalAgrs);
  }
}

function add() {
  const slice = Array.prototype.slice;
  const args = slice.call(arguments);
  return args.reduce((cur, val) => cur + val, 0);
}

const curryAdd = curry(add, 1, 2);
console.log(curryAdd(3,4))