class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function buildTreeFromArray(arr) {
//   if (arr.length === 0 || arr[0] === null) return null;

//   // Create all nodes first (with null children)
//   const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null));
//   console.log(nodes);
//   // Connect children to parents
//   for (let i = 0; i < nodes.length; i++) {
//     if (nodes[i] === null) continue;

//     const leftIndex = 2 * i + 1;
//     const rightIndex = 2 * i + 2;

//     if (leftIndex < arr.length) nodes[i].left = nodes[leftIndex];
//     if (rightIndex < arr.length) nodes[i].right = nodes[rightIndex];
//   }

//   return nodes[0]; // Return root (first element)
// }

function buildTreeFromArray(arr) {
  if (arr.length === 0 || arr[0] === null) return null;

  const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null));
  console.log(nodes);
  let parentIndex = 0;
  let childIndex = 1; // Start with left child of root

  while (childIndex < arr.length) {
    // Find next non-null parent
    while (parentIndex < arr.length && nodes[parentIndex] === null) {
      parentIndex++;
    }

    if (parentIndex >= arr.length) break;

    // Assign left child if exists
    if (childIndex < arr.length) {
      nodes[parentIndex].left = nodes[childIndex];
      childIndex++;
    }

    // Assign right child if exists
    if (childIndex < arr.length) {
      nodes[parentIndex].right = nodes[childIndex];
      childIndex++;
    }

    parentIndex++;
  }
  console.log(nodes);
  return nodes[0];
}

// Inorder Traversal (recursive)
function inorderTraversal(root) {
  const result = [];
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    result.push(node.val);
    helper(node.right);
  };
  helper(root);
  return result;
}

// Execute
const arr = [1, null, 2, 3];
const root = buildTreeFromArray(arr);
console.log("Tree:", JSON.stringify(root, null, 2));
console.log("Inorder traversal:", inorderTraversal(root));
