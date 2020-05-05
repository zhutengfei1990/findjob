/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  if (s.length === 1) {
    return s;
  }
  let result = '';
  for(let i = 0; i < s.length - 1; i ++) {
      // let len1 = expandCenter(s, i, i);
      // let len2 = expandCenter(s, i, i + 1);
      const str1 = expandCenter(s, i, i); 
      const str2 = expandCenter(s, i, i + 1); 
      let len1 = str1.length;
      let len2 = str2.length;
      
      const len = Math.max(len1, len2);
      if (len > max) {
        max = len;
        if (len1 > len2) {
          result = str1
        } else {
          result = str2;
        }
      }
  }
  return result;
  // return s.substring(start, end + 1);
};

function expandCenter(s, left, right) {
  let i = left;
  let j = right;
  while(i >=0 && j < s.length && s[i] === s[j]) {
      i --;
      j ++;
  }
  // return j - i - 1;
  if (i + 1 === j || i === j) {
    return '';
  } else {
    return s.substring(i + 1, j);
  }
}

console.log(longestPalindrome("cbbd"));