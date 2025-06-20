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

function levelOrder(root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    const level = [];
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}

// Main execution
const arr = [3, 9, 20, null, null, 15, 7];
const root = buildTreeFromArray(arr);
console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log("Inorder traversal:", levelOrder(root));
