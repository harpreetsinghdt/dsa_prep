/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // The solution is the max between robbing houses 0 to n-2 or 1 to n-1
  return Math.max(
    robHelper(nums, 0, nums.length - 2),
    robHelper(nums, 1, nums.length - 1)
  );
}

// Helper function that solves the original House Robber problem for a subarray
function robHelper(nums, start, end) {
  if (start > end) return 0;

  let prev1 = 0;
  let prev2 = 0;

  for (let i = start; i <= end; i++) {
    const current = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
const nums = [2, 3, 2];
console.log(rob(nums))