function solveMaze(maze) {
  const n = maze.length;
  const solution = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

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

  function findPath(x, y) {
    if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
      solution[x][y] = 1;
      return true;
    }

    if (isValid(x, y)) {
      solution[x][y] = 1;
      if (findPath(x, y + 1)) return true;
      if (findPath(x + 1, y)) return true;
      if (findPath(x, y - 1)) return true;
      if (findPath(x - 1, y)) return true;

      solution[x][y] = 0;
      return false;
    }

    return false;
  }

  if (findPath(0, 0)) {
    return solution;
  } else {
    return false;
  }
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const result = solveMaze(maze);
if (result) {
  console.log(result.map((row) => row.join(" ")).join("\n"));
}
