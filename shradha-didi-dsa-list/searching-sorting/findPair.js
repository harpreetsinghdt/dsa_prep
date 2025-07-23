function findPair(arr, x) {
  // Sort the array first
  arr.sort((a, b) => a - b);

  let n = arr.length;

  // For each element, search for its complement
  for (let i = 0; i < n; i++) {
    // Try finding arr[i] + x
    let target = arr[i] + x;

    // Binary search for target
    if (binarySearch(arr, i + 1, n - 1, target)) {
      return true;
    }
  }

  return false;
}

// Binary search function
function binarySearch(arr, left, right, key) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === key) {
            return true;
        } else if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

let arr = [5, 20, 3, 2, 50, 80];
let x = 78;
if (findPair(arr, x)) {
  console.log("Yes");
} else {
  console.log("No");
}