function isSafe(grid, r, c) {
  let row = grid.length;
  let col = grid[0].length;

  // r is in range, c is in range, value
  // is 'L' (land) and not yet visited
  return r >= 0 && r < row && c >= 0 && c < col && grid[r][c] === "L";
}

function dfs(grid, r, c) {
  let rNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
  let cNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

  // Mark this cell as visited
  grid[r][c] = "W";

  // Recur for all connected neighbors
  for (let k = 0; k < 8; ++k) {
    let newR = r + rNbr[k];
    let newC = c + cNbr[k];
    if (isSafe(grid, newR, newC)) {
      dfs(grid, newR, newC);
    }
  }
}

// The main function that returns
// count of islands in a given matrix
function countIslands(grid) {
  let row = grid.length;
  let col = grid[0].length;

  let count = 0;
  for (let r = 0; r < row; ++r) {
    for (let c = 0; c < col; ++c) {
      // If a cell with value 'L' (land) is found,
      // then a new island is found
      if (grid[r][c] === "L") {
        // Visit all cells in this island.
        dfs(grid, r, c);

        // increment the island count
        ++count;
      }
    }
  }
  return count;
}

// Test case with grid containing 'L' for land and 'W' for water
let grid = [
  ["L", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
  ["L", "W", "L", "L", "W"],
];

console.log(countIslands(grid)); // Expected output: 4
