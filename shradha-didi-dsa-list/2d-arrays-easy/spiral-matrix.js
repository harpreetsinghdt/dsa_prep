var spiralOrder = function (mat) {
  if (!mat.length || !mat[0].length) return [];
  let res = [];
  let top = 0,
    bottom = mat.length - 1;
  let left = 0,
    right = mat[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(mat[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(mat[i][right]);
    }
    right--;

    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      res.push(mat[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      res.push(mat[i][left]);
    }
    left++;
  }
  return res;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(spiralOrder(matrix));
console.log(spiralOrder(matrix1));
