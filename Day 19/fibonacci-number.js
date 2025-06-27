// var fib = function (n, memo = {}) {
//   if (n <= 1) return n;
//   if (n in memo) {
//     return memo[n];
//   }
//   return fib(n - 1, memo) + fib(n - 2, memo);
// };
// console.log(fib(6));

// var fib = function (n, memo = {}) {
//   if (n <= 1) return n;
//   const dp = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };
// console.log(fib(5));

var fib = function (n, memo = {}) {
  if (n <= 1) return n;
  let dp1 = 0;
  let dp2 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp1 + dp2;

    dp1 = dp2;
    dp2 = temp;
  }
  return dp2;
};
console.log(fib(6));
