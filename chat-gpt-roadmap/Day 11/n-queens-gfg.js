// JavaScript Program to solve the n-queens problem

// Function to check if it is safe to place
// the queen at board[row][col]
function isSafe(mat, row, col) {
  const n = mat.length;

  // Check this col on upper side
  for (let i = 0; i < row; i++) if (mat[i][col] === 1) return false;

  // Check upper diagonal on left side
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
    if (mat[i][j] === 1) return false;

  // Check upper diagonal on right side
  for (let i = row - 1, j = col + 1; j < n && i >= 0; i--, j++)
    if (mat[i][j] === 1) return false;

  return true;
}

function placeQueen(row, mat) {
  const n = mat.length;

  // base case: If all queens are placed
  // then return true
  if (row === n) return true;

  // Consider the row and try placing
  // queen in all columns one by one
  for (let i = 0; i < n; i++) {
    // Check if the queen can be placed
    if (isSafe(mat, row, i)) {
      mat[row][i] = 1;
      if (placeQueen(row + 1, mat)) return true;
      mat[row][i] = 0;
    }
  }
  return false;
}

// Function to find the solution
// to the N-Queens problem
function nQueen(n) {
  // Initialize the board
  const mat = Array.from({ length: n }, () => Array(n).fill(0));

  // If the solution exists
  if (placeQueen(0, mat)) {
    // to store the columns of the queens
    const ans = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1) {
          ans.push(j + 1);
        }
      }
    }
    return ans;
  } else return [-1];
}

const n = 4;
const ans = nQueen(n);
console.log(ans.join(" "));
