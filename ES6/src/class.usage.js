function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function() {
  return this.x + this.y;
} 

var m = new MathHandle(1, 2);
console.log(m.add())
m.add();

// class是语法糖
class MathHandle2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}

var m2 = new MathHandle2(2, 3);
console.log(m2.add());

console.log(typeof MathHandle2) // function

function Animal() {
  this.eatList = ['apple', 'banana', 'orange']
}

function Dog() {
}

Dog.prototype = new Animal();

let dog1 = new Dog();
let dog2 = new Dog();

dog1.eatList.push('pen');
console.log(dog2.eatList); // [ 'apple', 'banana', 'orange', 'pen' ]  引用类型相互影响

class A{
  constructor(x) {
    this.eatList = [1, 2, 3];
  }

  add() {

  }
}

class aa extends A{
  constructor(){
    super();
  }
}

var aaa = new aa();
var aaa2 = new aa();
aaa.eatList.push(4);
console.log(aaa2.eatList); // 不相互影响