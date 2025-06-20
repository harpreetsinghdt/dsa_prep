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
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();

    // Left child
    if (i < arr.length && arr[i] !== null) {
      const left_child = new TreeNode(arr[i]);
      current.left = left_child;
      queue.push(current.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      const right_child = new TreeNode(arr[i]);
      current.right = right_child;
      queue.push(current.right);
    }
    i++;
  }

  return root;
}
// 1. Recursive Approach (DFS)
var countNodes = function (root) {
  if (!root) return 0;
  const left = countNodes(root.left);
  const right = countNodes(root.right);
  return left + right + 1;
};

// Main execution
// const arr = [1, null, 2, 3];
const arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
// const arr = [1, 2, 3, 4, 5, 10, 8, null, null, 6, 7, 9];
const root = buildTreeFromArray(arr);
console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log(countNodes(root));
