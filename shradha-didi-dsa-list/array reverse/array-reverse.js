// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/
function main(arr) {
  let tempErr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    tempErr.push(arr[i]);
  }
  return tempErr;
}

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [4, 5, 1, 2];
console.log(main(arr).join(" "));
console.log(main(arr1).join(" "));

// Time complexity: O(n)
// Space complexity: O(n), as i am using tempErr as extra space
