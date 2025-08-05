function solveMazeWithPath(maze) {
  const n = maze.length;
  const solution = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  const path = []; // To store the sequence of moves

  function findPath(x, y, direction = "Start") {
    // Add current position and direction to path
    path.push({ x, y, direction });

    // If we've reached the destination
    if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
      solution[x][y] = 1;
      return true;
    }

    if (isValid(x, y)) {
      // Mark as part of solution path
      solution[x][y] = 1;

      // Try moving in all four directions
      if (findPath(x, y + 1, "Right")) return true;
      if (findPath(x + 1, y, "Down")) return true;
      if (findPath(x, y - 1, "Left")) return true;
      if (findPath(x - 1, y, "Up")) return true;

      // If none worked, backtrack
      solution[x][y] = 0;
      path.pop(); // Remove this position from path
      return false;
    }

    path.pop(); // Remove this position from path if invalid
    return false;
  }

  function isValid(x, y) {
    return (
      x >= 0 &&
      x < n &&
      y >= 0 &&
      y < n &&
      maze[x][y] === 1 &&
      solution[x][y] === 0
    );
  }

  if (findPath(0, 0)) {
    return {
      solutionMatrix: solution,
      path: path,
    };
  } else {
    console.log("No solution exists");
    return null;
  }
}

// Example usage:
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const result = solveMazeWithPath(maze);
if (result) {
  console.log("Solution Matrix:");
  console.log(result.solutionMatrix.map((row) => row.join(" ")).join("\n"));

  console.log("\nPath Taken:");
  result.path.forEach((step) => {
    console.log(`Move ${step.direction} to (${step.x}, ${step.y})`);
  });
}
