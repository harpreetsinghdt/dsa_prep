var setZeroes = function (mat) {
  let n = mat.length;
  let m = mat[0].length;
  let zeroRows = new Set();
  let zeroCols = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        mat[i][j] = 0;
      }
    }
  }

  return mat;
};
const mat = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const mat1 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(setZeroes(mat));
console.log(setZeroes(mat1));
