function main(arr) {
  return arr.reverse();
}

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [4, 5, 1, 2];
console.log(main(arr));
console.log(main(arr1));

// Time Complexity: O(n), the reverse method has linear time complexity.
// Auxiliary Space: O(1) Additional space is not used to store the reversed array, as the in-built array method swaps the values in-place.
