// JavaScript Program to find all paths for a rat in a maze
// from source (0,0) to destination (n-1, n-1)

const dir = "DLRU";
const dc = [0, -1, 1, 0]; // down, left, right, up	
const dr = [1, 0, 0, -1]; // down, left, right, up

// Check if a cell is valid (inside the maze and open)
function isValid(r, c, n, maze) {
  return r >= 0 && c >= 0 && r < n && c < n && maze[r][c] === 1;
}

// Function to find all valid paths
function findPath(r, c, maze, path, res) {
  const n = maze.length;

  // If destination is reached, store the path
  if (r === n - 1 && c === n - 1) {
    res.push(path);
    return;
  }

  // Mark current cell as blocked
  maze[r][c] = 0;

  for (let i = 0; i < n; i++) {
    const nr = r + dr[i],
      nc = c + dc[i];
    if (isValid(nr, nc, n, maze)) {
      findPath(nr, nc, maze, path + dir[i], res);
    }
  }

  // Unmark current cell
  maze[r][c] = 1;
}

// Function to find all paths and return them
function ratInMaze(maze) {
  const result = [];
  const n = maze.length;
  const path = "";

  if (maze[0][0] !== 0 && maze[n - 1][n - 1] !== 0) {
    findPath(0, 0, maze, path, result);
  }

  return result;
}

// Driver Code
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const result = ratInMaze(maze);

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result);
  console.log(result.join(" "));
}
