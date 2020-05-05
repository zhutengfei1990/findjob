// 无重复的最长子串
function longestSubstr(s) {
  const map = new Map();
  let max = 1;
  for(let i = 0, j = 0; j < s.length ; j ++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    max = Math.max(j - i + 1, max);
    map.set(s[j], j);
  }
  return max;
}
console.log(longestSubstr("abcabcbb"))