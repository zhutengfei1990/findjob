let m = 0;
let n = 0;
let marked = [];
let board = [];
let word = '';
let direction = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0]
];

var exist = function (board, word) {

  function dfs(i, j, start) {
    if (start === m - 1) {
      return board[i][j] === word[start];
    }
    if (board[i][j] === word[start]) {
      marked[i][j] = true;
      for (let k = 0; k < 4; k++) {
        let newX = i + direction[k][0];
        let newY = j + direction[k][1];
        if (inArea(newX, newY) && !marked[newX][newY]) {
          if (dfs(newX, newY, start + 1)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function initMarked(m, n) {
    const arr = [];
    for (let i = 0; i < m; i++) {
      const subArr = [];
      arr[i] = subArr;
    }
    return arr;
  }
  m = board.length;
  if (m === 0) {
    return false;
  }
  n = board[0].length;
  marked = initMarked(m, n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}