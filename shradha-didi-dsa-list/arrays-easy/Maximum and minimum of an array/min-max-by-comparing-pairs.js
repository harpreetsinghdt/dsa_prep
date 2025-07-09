function getMinMax(arr) {
  let n = arr.length;
  let mn, mx, i;
  if (n % 2 == 0) {
    mn = Math.min(arr[0], arr[1]);
    mx = Math.max(arr[0], arr[1]);
    i = 2;
  } else {
    mn = mx = arr[0];
    i = 1;
  }
  while (i < n - 1) {
    if (arr[i] < arr[i + 1]) {
      mn = Math.min(mn, arr[i]);
      mx = Math.max(mx, arr[i + 1]);
    } else {
      mn = Math.min(mn, arr[i + 1]);
      mx = Math.max(mx, arr[i]);
    }
    i += 2;
  }
  return [mn, mx];
}
const arr = [1000, 11, 445, 102, 3303, 3000];
console.log(getMinMax(arr, 0, arr.length - 1));

// Time complexity: O(n)
// Space complexity: O(1)
