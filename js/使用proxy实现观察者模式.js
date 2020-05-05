const queueObservers = new Set();
const observe = fn => queueObservers.add(fn);

const observable = obj => new Proxy(obj, {
  set(target, key, value, receiver) {
    console.log(receiver);
    const result = Reflect.set(target, key, value, receiver);
    queueObservers.forEach(observer => observer());
    return result;
  }
})

observe(() => {
  console.log(123);
});

const obj = observable({ a: 1, b: 2});
obj.a = 1;
