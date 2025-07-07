/**
 * @param {number} n
 * @return {number}
 */
// 1. Recursive (Naive)
// var fib = function (n) {
// if (n <= 1) return n;
// return fib(n - 1) + fib(n - 2);
// };
// 2. Memoization (Top-Down DP)
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log(memo);
  return memo[n];
}
// 3. Iterative (Bottom-Up DP)
// function fib(n) {
//   if (n <= 1) return n;
//   let a = 0,
//     b = 1;
//   for (let i = 2; i <= n; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// }

let i = 0;
while (i <= 6) {
  console.log(fib(i));
  i++;
}
