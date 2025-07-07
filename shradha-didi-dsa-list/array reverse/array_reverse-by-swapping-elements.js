// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/
function main(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    let tmp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = tmp;
  }
  return arr;
}

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [4, 5, 1, 2];
console.log(main(arr).join(" "));
console.log(main(arr1).join(" "));

// Time complexity: O(n),, the loop runs through half of the array, so it's linear with respect to the array size.
// Space complexity: O(1), no extra space is required, therefore we are reversing the array in-place.
