import buildTreeFromArray from "../buildTreeFromArray.js";

function isBalanced(root) {
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
  return dfs(root) !== -1;
}

// Main execution
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = buildTreeFromArray(arr);
console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log(isBalanced(root));
