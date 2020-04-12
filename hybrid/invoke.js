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

    schema +='callback=' + callbackName;

    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    // 调用schema协议
    iframe.src = schema;
    // iframe.src = 'weixin://dl/scan?k1=v1&k2=v2&callback=_invoke_scan_callback_'
    var body = document.body
    body.append(iframe)
    setTimeout(function() {
      body.removeChild(iframe)
      iframe = null
    })
    
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