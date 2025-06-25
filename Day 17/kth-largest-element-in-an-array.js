/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const sorted = nums
    .sort((a, b) => b - a)
    .slice(k - 1)
    .slice(0, 1)[0];

  return sorted;

  // console.log(sorted);
  // nums.sort((a, b) => b - a); // Sort in descending order
  // return nums[k - 1];
};
// const nums = [3, 2, 1, 5, 6, 4],
//   k = 2;
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 2;
const res = findKthLargest(nums, k);
console.log(res);
