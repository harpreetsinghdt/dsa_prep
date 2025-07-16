// A Javascript program to find a common
// element in all rows of a
// row wise sorted array

// Returns common element in all rows
// of mat[M][N]. If there is no
// common element, then -1 is
// returned
function findCommon(mat) {
  // Specify number of rows and columns
  let M = mat.length;
  let N = mat[0].length;
  // An array to store indexes
  // of current last column
  let column = new Array(M);
  console.log(column);
  // To store index of row whose current
  // last element is minimum
  let min_row;
  // Initialize current last element of all rows
  let i;
  for (i = 0; i < M; i++) column[i] = N - 1;
  console.log(column);
  // Initialize min_row as first row
  min_row = 0;

  // Keep finding min_row in current
  // last column, till either
  // all elements of last column become
  // same or we hit first column.
  while (column[min_row] >= 0) {
    // Find minimum in current last column
    for (i = 0; i < M; i++) {
      if (mat[i][column[i]] < mat[min_row][column[min_row]]) min_row = i;
    }
    console.log(min_row);
    // eq_count is count of elements equal to
    // minimum in current last
    // column.
    let eq_count = 0;

    // Traverse current last column
    // elements again to update it
    for (i = 0; i < M; i++) {
      // Decrease last column index of a row whose value is more
      // than minimum.
      if (mat[i][column[i]] > mat[min_row][column[min_row]]) {
        if (column[i] == 0) return -1;

        // Reduce last column index by 1
        column[i] -= 1;
      } else eq_count++;
    }

    // If equal count becomes M,
    // return the value
    if (eq_count == M) return mat[min_row][column[min_row]];
  }
  return -1;
}

// Driver Code
let mat = [
  [1, 2, 3, 4, 5],
  [2, 3, 4, 7, 8],
  [0, 1, 2, 3, 4],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
];
let result = findCommon(mat);
console.log(result);
