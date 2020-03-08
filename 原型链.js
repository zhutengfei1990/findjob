function Elme(id) {
  this.elem = document.getElementById(id)
}

Elme.prototype.html = function(val) {
  var elem = this.elem;
  if(val) {
    elem.innerHTML = val
    return this // 链式操作
  } else {
    return elem.innerHTML;
  }
}

Elme.prototype.on = function(type, fn) {
  var elem = this.elem
  elem.addEventListener(type, fn)
  return this
}

var div1 = new Elme('main')
div1.html('hello world').on('click', function() {
  alert('clicked')
})

console.log('rebase test');
console.log('merge test');
console.log('submit 1');
console.log('submit 2');
console.log('submit 3');
console.log('merge 1');
console.log('merge 2');
console.log('merge 3');
console.log('another branch');
console.log('1.1');
console.log('2.1');
