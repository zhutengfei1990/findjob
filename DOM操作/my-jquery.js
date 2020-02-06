(function(window) {
  var JQuery = function (selector) {
    return new JQuery.fn.init()
  }

  JQuery.fn = {
    css: function(key, value) {
      alert('css')
    },
    html: function(value) {
      return 'html'
    }
  }

  var init = JQuery.fn.init = function(selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))

    var i, len = dom ? dom.length : 0 
    for(i = 0; i < len; i ++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }

  init.prototype = JQuery.fn

  window.$ = JQuery
})(window)