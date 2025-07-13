function diagonalOrder(mat) {
  let res = [];

  let n = mat.length;
  let m = mat[0].length;

  // There will be n+m-1 diagonals in total
  for (let line = 1; line <= n + m - 1; line++) {
    // Get column index of the first element in
    // this diagonal. The index is 0 for first 'n'
    // lines and (line - n) for remaining lines
    let startCol = Math.max(0, line - n);

    // Get count of elements in this diagonal
    // Count equals minimum of line number, (m-startCol) and n
    let count = Math.min(line, m - startCol, n);

    // Process elements of this diagonal
    for (let j = 0; j < count; j++) {
      // Calculate row and column indices
      // for each element in the diagonal
      let row = Math.min(n, line) - j - 1;
      let col = startCol + j;

      res.push(mat[row][col]);
    }
  }

  return res;
}

function diagonalOrder1(mat) {
  let res = [];
  let n = mat.length;
  let m = mat[0].length;

  // Process all diagonals starting from the first column
  for (let row = 0; row < n; row++) {
    let i = row,
      j = 0;

    // Follow each diagonal going up and right
    while (i >= 0 && j < m) {
      res.push(mat[i][j]);
      i--;
      j++;
    }
  }

  // Process remaining diagonals starting from
  // the bottom row (except first column)
  for (let col = 1; col < m; col++) {
    let i = n - 1,
      j = col;

    // Follow each diagonal going up and right
    while (i >= 0 && j < m) {
      res.push(mat[i][j]);
      i--;
      j++;
    }
  }

  return res;
}

function diagonalOrder2(mat) {
  let res = [];
  let n = mat.length;
  let m = mat[0].length;

  for (let row = 0; row < n; row++) {
    // console.log(mat[i]);
    let i = row;
    let j = 0;
    while (i >= 0 && j < m) {
      // console.log(i, j);
      // console.log(mat[i][j]);
      res.push(mat[i][j]);
      i--;
      j++;
    }
  }
  for (let col = 1; col < m; col++) {
    let i = n - 1;
    j = col;
    while (i >= 0 && j < m) {
      res.push(mat[i][j]);
      i--;
      j++;
    }
  }

  return res;
}

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

let res = diagonalOrder2(mat);
console.log(res.join(" "));
