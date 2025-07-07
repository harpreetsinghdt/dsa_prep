import buildTreeFromArray from "../buildTreeFromArray.js";

function isSymmetric(root) {
  if (!root) return true;
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }
  return isMirror(root.left, root.right);
}

const arr = [1, 2, 2, 3, 4, 4, 3];
const arr1 = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = buildTreeFromArray(arr);
const root1 = buildTreeFromArray(arr1);
// console.log("Tree structure:", JSON.stringify(root, null, 2));
console.log(isSymmetric(root));
console.log(isSymmetric(root1));
