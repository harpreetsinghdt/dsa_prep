// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Function to build the tree from array representation
function buildTreeFromArray(arr) {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  console.log("root", root);
  const queue = [root];
  console.log("queue", queue);
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    console.log("i=", i);

    const current = queue.shift();
    console.log("current", current);
    console.log("queue", queue);

    // Left child
    if (i < arr.length && arr[i] !== null) {
      const left_child = new TreeNode(arr[i]);
      console.log("left_child:", left_child);
      current.left = left_child;
      queue.push(current.left);
      console.log("left queue", queue);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      const right_child = new TreeNode(arr[i]);
      console.log("right_child:", right_child);
      current.right = right_child;
      queue.push(current.right);
      console.log("right queue", queue);
    }
    i++;
  }

  return root;
}

// Inorder traversal using recursion
function inorderTraversal(root) {
  const res = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return res;
}

// Main execution
// const arr = [1, null, 2, 3];
const arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
// const arr = [1, 2, 3, 4, 5, 10, 8, null, null, 6, 7, 9];
const root = buildTreeFromArray(arr);
console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log("Inorder traversal:", inorderTraversal(root));
