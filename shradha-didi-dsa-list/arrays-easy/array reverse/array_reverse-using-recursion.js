// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/
function reverseArrayRec(arr, l, r) {
  if (l >= r) {
    return;
  }
  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseArrayRec(arr, l + 1, r - 1);
  return arr;
}
function main(arr) {
  let n = arr.length;
  return reverseArrayRec(arr, 0, n - 1);
}

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [4, 5, 1, 2];
console.log(main(arr));
console.log(main(arr1));

// Time Complexity: O(n), the recurrence relation will be T(n) = T(n - 2) + O(1), which can be simplified to O(n).
// Auxiliary Space: O(n), as we are using recursion stack.
