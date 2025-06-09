/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let n = nums.length;
//   let zeroes = [];
//   for (let i = 0; i < n; i++) {
//     if (nums[i] == 0) {
//       zeroes.push(0);
//     }
//   }
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     if (nums[i] != 0) {
//       ans.push(nums[i]);
//     }
//   }
//   ans = ans.concat(zeroes);
//   for (let i = 0; i < n; i++) {
//     nums[i] = ans[i];
//   }
//   return nums;
// };
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
const res = moveZeroes([0, 1, 0, 3, 12]);
console.log(res);
