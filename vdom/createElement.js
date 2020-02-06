
/* 数据
{
  tag: 'ul',
  attrs: { id: 'list' },
  children: [
    {
      tag: 'li',
      attrs: { className: 'item' },
      children: ['Item1']
    }, {
      tag: 'li',
      attrs: { className: 'item' },
      children: ['Item2']
    }
  ]
}*/


function creatElement(vnode) {
  var tag = vnode.tag
  var attrs = vnode.attrs || {}
  var children = vnode.children || []
  if (!tag) {
    return null
  }

  // 创建元素
  var elem = document.createElement(tag)
  // 属性
  var attrName
  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      // 设置属性
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  // 子元素
  children.forEach(function(childVnode) {
    // 给elem添加子元素
    elem.appendChild(creatElement(childVnode))
  }) 

  // 返回真实的 DOM 元素
  return elem
}