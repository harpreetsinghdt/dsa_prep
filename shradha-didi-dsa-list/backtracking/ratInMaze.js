const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

const ratInMaze = (maze, x, y, path) => {
  if (x === maze.length - 1 && y === maze[0].length - 1) {
    path.push([x, y]);
    return true;
  }
  if (
    x < 0 ||
    y < 0 ||
    x >= maze.length ||
    y >= maze[0].length ||
    maze[x][y] === 0
  ) {
    return false;
  }
  maze[x][y] = 0;
  path.push([x, y]);
  if (ratInMaze(maze, x + 1, y, path) || ratInMaze(maze, x, y + 1, path)) {
    return true;
  }
  maze[x][y] = 1;
  path.pop();
  return false;
};

console.log(ratInMaze(maze, 0, 0, []));
