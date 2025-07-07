/**
 * @param {number} n
 * @return {string[][]}
 */
var isSafe = function (mat, row, col, n) {
  // horizontal
  for (let j = 0; j < col; j++) {
    if (mat[row][j] === "Q") {
      return false;
    }
  }
  // vertical
  for (let i = 0; i < row; i++) {
    if (mat[i][col] === "Q") {
      return false;
    }
  }
  // left diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (mat[i][j] === "Q") {
      return false;
    }
  }
  // right diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (mat[i][j] === "Q") {
      return false;
    }
  }
  return true;
};
var placeQueens = function (mat, row, n, res) {
  if (row === n) {
    const board = mat.map((rowArr) => rowArr.join(""));
    res.push(board);
    return res;
  }
  for (let col = 0; col < n; col++) {
    if (isSafe(mat, row, col, n)) {
      mat[row][col] = "Q";
      placeQueens(mat, row + 1, n, res);
      mat[row][col] = ".";
    }
  }
  return false;
};
var solveNQueens = function (n) {
  const res = [];
  const mat = Array.from({ length: n }, () => Array(n).fill("."));
  console.log(mat);

  placeQueens(mat, (row = 0), n, res);
  return res;
};
const n = 4;
const ans = solveNQueens(n);
console.log(ans);
