var val = 1;
Object.defineProperty(global, 'a', {
  enumerable: true,
  configurable: true,
  get() {
    return val ++;
  },
  set(val) {
    
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}