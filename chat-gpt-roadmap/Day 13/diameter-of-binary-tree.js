import buildTreeFromArray from "../buildTreeFromArray.js";

function diameterOfBinaryTree(root) {
  let diameter = 0;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return diameter;
}

const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = buildTreeFromArray(arr);
// console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log(diameterOfBinaryTree(root));
