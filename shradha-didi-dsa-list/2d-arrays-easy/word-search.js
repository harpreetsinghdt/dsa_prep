function main(board, word) {
  let rows = board.length; // 0=["A", "B", "C", "E"],1=["S", "F", "C", "S"],2=["A", "D", "E", "E"]
  let cols = board[0].length; // 0:0=A,1=B,2=C,3=E; 1:0=S,1=F,2=C,3=S; 2:0=A,1=D,2=E,3=E;

  function dfs(row, col, index) {
    if (index === word.length) {
      console.log("in dfs 1st true");
      return true;
    }
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      console.log("in dfs false");
      return false;
    }
    const temp = board[row][col];
    board[row][col] = "#";
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);
    board[row][col] = temp;
    console.log("in dfs last true");
    return found;
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      console.log(row, col);
      if (dfs(row, col, 0, word)) {
        console.log("in true");
        return true;
      }
    }
  }
  console.log("in false");
  return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";

console.log(main(board, word));
