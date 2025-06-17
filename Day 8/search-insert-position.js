/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 4));
console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([-1, 0, 3, 5, 9, 12], 9)); // 4
// console.log(searchInsert([-1, 0, 3, 5, 9, 12], 2)); // -1
// console.log(searchInsert([5], 5)); // 0
// console.log(searchInsert([], 1)); // -1
