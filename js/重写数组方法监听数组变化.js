function observifyArray(arr) {
  const arrayMethods = ['push', 'pop'];
  let arrayAugmentations = Object.create(Array.prototype);
  arrayMethods.forEach(method => {
    arrayAugmentations[method] = function(...args) {
      Array.prototype[method].apply(this, args);
      //通知
      // dep.notify();
      console.log('数组发生变化');
    }
  });
  
  Object.setPrototypeOf(arr, arrayAugmentations);
}

// function observify(value) {
//   if (Array.isArray(value)) {
//     observifyArray(value);
//   }
// }

const arr = [1, 2, 3];
observifyArray(arr);
arr.push(4)