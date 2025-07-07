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

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}

// Main execution
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;
const root = buildTreeFromArray(arr);
// console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log(lowestCommonAncestor(root, p, q));
