// Memoization (Top Down)
function fib(n, memo = {}) {
  if (n <= 1) return n;
  console.log(n, memo);
  if (n in memo) {
    console.log("memo", n, memo[n]);
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log(memo);
  return memo[n];
}

// Tabulation (Bottom-Up)
function fib2(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
  return dp[n];
}

function fib3(n) {
  if (n <= 1) return n;

  // To store the curr Fibonacci number
  let curr = 0;

  // To store the previous Fibonacci numbers
  let prev1 = 1;
  let prev2 = 0;

  // Loop to calculate Fibonacci numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    // Calculate the curr Fibonacci number
    curr = prev1 + prev2;

    // Update prev2 to the last Fibonacci number
    prev2 = prev1;

    // Update prev1 to the curr Fibonacci number
    prev1 = curr;
  }

  return curr;
}
// console.log(fib(6));
// console.log(fib2(5));
console.log(fib3(5));
