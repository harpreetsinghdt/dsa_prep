var rotate = function (mat) {
  if (!mat.length || !mat[0].length) return [];

  const n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
  return mat;
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(matrix));
console.log(rotate(matrix1));
