// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/
function main(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [4, 5, 1, 2];
console.log(main(arr).join(" "));
console.log(main(arr1).join(" "));

// Time complexity: O(n), as we are visiting each element exactly once.
// Space complexity: O(1), as we are not using any extra space
