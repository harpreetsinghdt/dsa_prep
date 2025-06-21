class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const createBinaryTreeFromArray = (arr) => {
  const n = arr.length;
  if (n == 0) {
    return null;
  }

  let root = new Node(arr[0]);
  console.log(root);
  let queue = [root];

  let i = 1;
  while (i < n) {
    console.log(arr[i]);

    if (arr[i] !== null) {
      root.left = new Node(arr[i], null, null);
    }
    i++;
    if (arr[i] !== null) {
      root.right = new Node(arr[i], null, null);
    }
    i++;
  }
  return root;
};

var lowestCommonAncestor = function (root, p, q) {};

// const arr = [],
//   p = 5,
//   q = 1;
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;
const root = createBinaryTreeFromArray(arr);
console.log(root);
console.log(lowestCommonAncestor(root, p, q));
