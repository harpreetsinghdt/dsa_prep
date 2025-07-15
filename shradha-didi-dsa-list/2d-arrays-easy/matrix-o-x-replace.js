function replaceSurrounded(mat) {
  let rows = mat.length;
  let cols = mat[0].length;

  function floodFillUtil(mat, i, j, prevV, newV) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return;
    if (mat[i][j] != prevV) return;

    mat[i][j] = newV;
    floodFillUtil(mat, i + 1, j, prevV, newV);
    floodFillUtil(mat, i - 1, j, prevV, newV);
    floodFillUtil(mat, i, j + 1, prevV, newV);
    floodFillUtil(mat, i, j - 1, prevV, newV);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] == "O") mat[i][j] = "-";
    }
  }

  for (let i = 0; i < rows; i++) {
    if (mat[i][0] == "-") {
      floodFillUtil(mat, i, 0, "-", "O");
    }
  }
  for (let i = 0; i < rows; i++) {
    if (mat[i][cols - 1] == "-") {
      floodFillUtil(mat, i, cols - 1, "-", "O");
    }
  }
  for (let i = 0; i < cols; i++) {
    if (mat[0][i] == "-") {
      floodFillUtil(mat, 0, i, "-", "O");
    }
  }
  for (let i = 0; i < cols; i++) {
    if (mat[rows - 1][i] == "-") {
      floodFillUtil(mat, rows - 1, i, "-", "O");
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] == "-") mat[i][j] = "X";
    }
  }

  return mat;
}

let mat = [
  ["X", "O", "X", "O", "X", "X"],
  ["X", "O", "X", "X", "O", "X"],
  ["X", "X", "X", "O", "X", "X"],
  ["O", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "O", "X", "O"],
  ["O", "O", "X", "O", "O", "O"],
];
console.log(replaceSurrounded(mat));
