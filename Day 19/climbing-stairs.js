// function climbStairs(n) {
//   if (n === 0 || n === 1) return 1;
//   return climbStairs(n - 1) + climbStairs(n - 2); //+ climbStairs(n - 3);
// }

// function climbStairs(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n === 0 || n === 1) return 1;

//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// }

// function climbStairs(n) {
//   if (n === 0 || n === 1) return 1;

//   const dp = new Array(n + 1);
//   dp[0] = 1;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

function climbStairs(n) {
  if (n === 0 || n === 1) return 1;

  let prev = 1; // ways for 0 steps
  let curr = 1; // ways for 1 step

  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

const n = 4;
const res = climbStairs(n);
console.log(res);
