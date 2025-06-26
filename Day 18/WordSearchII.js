class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  // Build the Trie
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.word = word;
  }

  const result = [];
  const rows = board.length;
  const cols = board[0].length;

  // Directions: up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const backtrack = (node, row, col) => {
    const char = board[row][col];
    const currNode = node.children[char];

    // If no matching node in trie, return
    if (!currNode) return;

    // If we found a word, add to result and remove from trie to avoid duplicates
    if (currNode.word !== null) {
      result.push(currNode.word);
      currNode.word = null;
    }

    // Mark the cell as visited
    board[row][col] = "#";

    // Explore neighbors
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        if (board[newRow][newCol] !== "#") {
          backtrack(currNode, newRow, newCol);
        }
      }
    }

    // Backtrack: restore the cell
    board[row][col] = char;

    // Optimization: remove empty leaf nodes
    if (Object.keys(currNode.children).length === 0) {
      delete node.children[char];
    }
  };

  // Iterate over each cell in the board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      if (root.children[char]) {
        backtrack(root, row, col);
      }
    }
  }

  return result;
};
const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ],
  words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words));
