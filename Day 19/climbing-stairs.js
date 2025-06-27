function climbStairs(n) {
  if (n === 0 || n === 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2); //+ climbStairs(n - 3);
}
const n = 4;
const res = climbStairs(n);
console.log(res);
