// JavaScript program to check whether
// permutation of two arrays satisfy
// the condition a[i] + b[i] >= k.

// Check whether any permutation
// exists which satisfy the condition.
function isPossible(a, b, n, k) {
  // Sort the array a[]
  // in increasing order.
  a.sort(function (a, b) {
    return a - b;
  });

  // Sort the array b[]
  // in decreasing order.
  b.sort((a, b) => b - a);

  // Checking condition on each index.
  for (let i = 0; i < n; i++) if (a[i] + b[i] < k) return false;

  return true;
}

let a = [2, 1, 3];
let b = [7, 8, 9];
let k = 10;
let n = a.length;

if (isPossible(a, b, n, k)) console.log("Yes");
else console.log("No");
