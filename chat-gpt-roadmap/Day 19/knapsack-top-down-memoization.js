// Returns the maximum value that
// can be put in a knapsack of capacity W
function knapsackRec(W, val, wt, n, memo) {
  // Base Case
  if (n === 0 || W === 0) return 0;

  // Check if we have previously calculated the same subproblem
  if (memo[n][W] !== -1) return memo[n][W];

  let pick = 0;

  // Pick nth item if it does not exceed the capacity of knapsack
  if (wt[n - 1] <= W) {
    pick = val[n - 1] + knapsackRec(W - wt[n - 1], val, wt, n - 1, memo);
    console.log("pick", pick);
  }

  // Don't pick the nth item
  let notPick = knapsackRec(W, val, wt, n - 1, memo);
  console.log("notPick", notPick);

  // Store the result in memo[n][W] and return it
  memo[n][W] = Math.max(pick, notPick);
  console.log(memo);
  return memo[n][W];
}

function knapsack(W, val, wt) {
  const n = val.length; // 3

  // Memoization table to store the results
  const memo = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1));
  console.log(memo);
  return knapsackRec(W, val, wt, n, memo);
}

// Driver Code
const val = [1, 2, 3]; // n=3
const wt = [4, 5, 1];
const W = 4;

console.log(knapsack(W, val, wt));
