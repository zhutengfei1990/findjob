/**
 * 大数相加
 * 使用字符串来表示数字
 */
function add(a, b) {
  const len = Math.max(a.length, b.length);
  const p1 = a.padStart(len, '0');
  const p2 = b.padStart(len, '0');

  let j; // 进位
  let y; // 余数
  let sum = '';
  for(let i = len - 1; i >= 0; i--) {
    const temp = Number.parseInt(p1[i]) + Number.parseInt(p2[i]) + j;
    y = temp%10;
    j = temp >=10 ? 1 : 0;
    sum = y + sum;
  }
  
  if (j === 1) {
    sum = '1' + sum;
  }
  return sum;
}