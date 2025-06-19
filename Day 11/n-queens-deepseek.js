function solveNQueens(n) {
  const res = [];

  function backtrack(row, cols, diag1, diag2, path) {
    if (row === n) {
      // Convert column indices to the required board format
      const board = path.map((col) => {
        const rowStr = new Array(n).fill(".");
        rowStr[col] = "Q";
        return rowStr.join("");
      });
      res.push(board);
      return;
    }
    for (let col = 0; col < n; col++) {
      const d1 = row - col; // Positive diagonal
      const d2 = row + col; // Negative diagonal
      if (!cols.has(col) && !diag1.has(d1) && !diag2.has(d2)) {
        // Place the queen and mark the column and diagonals as occupied
        cols.add(col);
        diag1.add(d1);
        diag2.add(d2);
        // Proceed to the next row with the updated state
        backtrack(row + 1, new Set(cols), new Set(diag1), new Set(diag2), [
          ...path,
          col,
        ]);
        // Backtrack: remove the queen and unmark the column and diagonals
        cols.delete(col);
        diag1.delete(d1);
        diag2.delete(d2);
      }
    }
  }

  // Start the backtracking from row 0 with empty sets and path
  backtrack(0, new Set(), new Set(), new Set(), []);
  return res;
}

// Example: Solve for N = 4
const n = 4;
const solutions = solveNQueens(n);
console.log(solutions);
// Print all solutions
console.log(`All solutions for ${n}-Queens problem:`);
solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  solution.forEach((row) => console.log(row));
  console.log(); // Add a newline for better readability
});
