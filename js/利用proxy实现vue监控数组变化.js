const arr = [1, 2, 3, 4];
const newArr = new Proxy(arr, {
  get(target, key, receiver) {
    console.log('get property', target, key)
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    if (key !== 'length') {
      console.log('set property');
    }
    return Reflect.set(target, key, value, receiver);
  }
});

// arr.push(1);
newArr.push(1);

