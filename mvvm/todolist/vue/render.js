
// render函数：返回vnode
// _c：创建vnode节点
// _v: 创建字符串节点
// _l：创建数组
// _s：toString
// 为什么监听get，因为如果一个变量没有被使用到，那么get就不会调用，所以set也不用监听；set会进行updateComponent,浪费性能
with(this)
{
  return _c('div',{
    attrs:{"id":"app"}
  },[_c('input',{
    directives:[{
      name:"model",
      rawName:"v-model",
      value:(title),
      expression:"title"
    }],
    attrs:{"type":"text"}
    ,domProps:{"value":(title)},
    on:{
      "input":function($event){if($event.target.composing)return;title=$event.target.value}
    }}),
    _v(" "),
    _c('button',
    {on:{"click":add}},
    [_v("submit")]),
    _v(" "),
    _l((list),function(li){return _c('ul',[_c('li',[_v(_s(li))])])})
  ],2)
}