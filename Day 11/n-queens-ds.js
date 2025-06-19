/**
 * @param {number} n
 * @return {string[][]}
 */
var isSafe = function (mat, row, col, n) {
  // Check horizontal left
  for (let j = 0; j < col; j++) {
    if (mat[row][j] === 1) {
      return false;
    }
  }
  // Check vertical up
  for (let i = 0; i < row; i++) {
    if (mat[i][col] === 1) {
      return false;
    }
  }
  // Check left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (mat[i][j] === 1) {
      return false;
    }
  }
  // Check right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (mat[i][j] === 1) {
      return false;
    }
  }
  return true;
};

var solveNQueens = function (n) {
  const res = [];
  const mat = Array.from({ length: n }, () => Array(n).fill(0));

  function backtrack(row) {
    if (row === n) {
      const board = [];
      for (let i = 0; i < n; i++) {
        let rowStr = "";
        for (let j = 0; j < n; j++) {
          rowStr += mat[i][j] === 1 ? "Q" : ".";
        }
        board.push(rowStr);
      }
      res.push(board);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(mat, row, col, n)) {
        mat[row][col] = 1;
        backtrack(row + 1);
        mat[row][col] = 0;
      }
    }
  }

  backtrack(0);
  return res;
};

const n = 4;
const ans = solveNQueens(n);
console.log(ans);
