// 闭包的实际应用中主要用于封装变量，收敛权限
function isFirstLoad() {
  var _list = []
  return function(id) {
    if(_list.indexOf(id) > -1) {
      return false
    } else {
      _list.push(id)
      return true
    }
  }
}

// 使用
var firstLoad = isFirstLoad();
firstLoad(10) // true
firstLoad(10) // false