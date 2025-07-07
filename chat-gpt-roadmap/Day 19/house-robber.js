// function rob(nums) {
//   function robFrom(i) {
//     if (i >= nums.length) return 0;
//     const currVal = nums[i];
//     const first = robFrom(i + 1);
//     const second = currVal + robFrom(i + 2);
//     return Math.max(first, second);
//   }
//   return robFrom(0);
// }

// function rob(nums) {
//   const memo = new Array(nums.length).fill(-1);

//   function robFrom(i) {
//     if (i >= nums.length) return 0;
//     if (memo[i] !== -1) return memo[i];

//     memo[i] = Math.max(robFrom(i + 1), nums[i] + robFrom(i + 2));
//     return memo[i];
//   }

//   return robFrom(0);
// }

// function rob(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return nums[0];

//     const dp = new Array(nums.length);
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);

//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
//     }

//     return dp[nums.length - 1];
// }

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

const nums = [1, 2, 3, 1];
console.log(rob(nums));
