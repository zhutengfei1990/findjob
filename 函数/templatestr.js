// this is {{name}} object; obj = { name: '123' }
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/g;
  if (!reg.test(template)) {
    return template;
  }

  const result =  template.replace(reg, (matched, key, key2) => {
    return data[key];
  });

  return result;
}

const template = '我是{{name}}aaa，年龄{{age}}bbb';
const data = {
  name: '庆余年',
  age: 1
}

console.log(render(template, data));