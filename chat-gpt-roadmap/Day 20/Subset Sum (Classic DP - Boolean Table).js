function subsetSum(arr, sum) {
  const n = arr.length;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i <= n; i++) dp[i][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][sum];
}
