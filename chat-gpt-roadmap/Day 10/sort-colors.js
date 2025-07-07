/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

// Usage same as above
var sortColors = function (nums) {
  let l = 0;
  let m = 0;
  let h = nums.length - 1;
  while (m <= h) {
    if (nums[m] === 0) {
      // swap(nums, l, m);
      [nums[l], nums[m]] = [nums[m], nums[l]];
      l++;
      m++;
      console.log(nums);
    } else if (nums[m] == 1) {
      m++;
      console.log(nums);
    } else {
      // swap(nums, h, m);
      [nums[m], nums[h]] = [nums[h], nums[m]];
      h--;
      console.log(nums);
    }
  }
  console.log(nums);
};
sortColors([2, 0, 2, 1, 1, 0]);
// console.log(swap(1, 2));
