// 笔试题1: vue是MVVM框架，也就是双向数据绑定，请用一段js程序来实现数组（Array）变化的监听
// splice 
const arr = [1,2,3];
new Proxy(arr, {
  get(obj, prop) {
    console.log(123);
    return prop in obj ? obj[prop] : 37;
  },
  set(obj, prop, value) {
    console.log(1234);
  }
})
arr.push(1234);



// const arr = [1,2,3];

// const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

// // arr.forEach(item => {
// // })
// const arrProto = Array.prototype;
// const arrMethods = Object.create(arrProto);
// const arrKeys = Object.getOwnPropertyNames()
// class Observer {
//   constructor(value) {
//     this.value = value;
//   }
// }


// function dependArray(value) {
//   for(let i = 0;i < value.length; i ++) {
//     let v = value[i];

//   }
// }

// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get: function() {
//       if (Array.isArray(value)) {
        
//       }
//     },
//     set(newVal) {
//       const value = val;
//       val = newVal;
//       // notify...
//     }
//   })
// }
  

//   methods.forEach(item => {
//     Object.defineProperty(arrMethods, item , {
//       value: function f() {
//         const orig = arrProto[item];
//         let args = Array.from(arguments);
//         orig.apply(this, args);
//       }
//     })  
//   });
// // }

// arr.__proto__ = arrMethods

// arr.push(4);