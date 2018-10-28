// 创建10个a标签，点击标签弹出对应的序号
for(var i = 0; i < 10; i ++) {
  (function(i) {
    var a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e) {
      e.preventDefault()
      alert(i)
    })
    document.body.appendChild(a)
  })(i)
}