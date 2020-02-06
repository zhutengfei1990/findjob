(function (window, undefined) {

  function _invoke(action, data, callback) {
    var schema = 'myapp://utils/' + action

    schema += '?a=a'
    var key
    for(key in data) {
      if(data.hasOwnProperty(key)) {
        schema += '&' + key + data[key]
      }
    }

    var callbackName = ''
    if (typeof callback === 'string') {
      callbackName = callback;
    } else {
      callbackName = action + Date.now()
      window[callbackName] = callback
    }
  }

  window.invoke = {
    share: function(data, callback) {
      _invoke('share', data, callback)
    },
    scan: function(data, callback) {

    },
    login: function (data, callback) {

    }
  }
})(window)