// JavaScript program to find the maximum area of
// rectangle in a 2D matrix.

// Function to find the maximum area of
// rectangle in a histogram.
function getMaxArea(arr) {
  let n = arr.length;
  let s = [];
  let res = 0;

  for (let i = 0; i < n; i++) {
    while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
      // The popped item is to be considered as the
      // smallest element of the histogram
      let tp = s.pop();

      // For the popped item previous smaller element is
      // just below it in the stack (or current stack top)
      // and next smaller element is i
      let width = s.length === 0 ? i : i - s[s.length - 1] - 1;

      res = Math.max(res, arr[tp] * width);
    }
    s.push(i);
  }

  // For the remaining items in the stack, next smaller does
  // not exist. Previous smaller is the item just below in
  // stack.
  while (s.length > 0) {
    let tp = s.pop();
    let curr = arr[tp] * (s.length === 0 ? n : n - s[s.length - 1] - 1);
    res = Math.max(res, curr);
  }

  return res;
}

// Function to find the maximum area of rectangle
// in a 2D matrix.
function maxArea(mat) {
  let n = mat.length,
    m = mat[0].length;

  // Array to store matrix
  // as a histogram.
  let arr = new Array(m).fill(0);

  let ans = 0;

  // Traverse row by row.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 1) {
        arr[j]++;
      } else {
        arr[j] = 0;
      }
    }

    ans = Math.max(ans, getMaxArea(arr));
  }

  return ans;
}

const mat = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

console.log(maxArea(mat));
