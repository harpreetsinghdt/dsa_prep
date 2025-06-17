/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let n = height.length;
//   let lmax = [n, 0];
//   let rmax = [n, 0];
//   lmax[0] = height[0];
//   rmax[n - 1] = height[n - 1];
//   for (let i = 1; i < n; i++) {
//     lmax[i] = Math.max(lmax[i - 1], height[i]);
//   }
//   for (let i = n - 2; i >= 0; i--) {
//     rmax[i] = Math.max(rmax[i + 1], height[i]);
//   }
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += Math.min(lmax[i], rmax[i]) - height[i];
//   }
//   return ans;
// };
var trap = function (height) {
  let ans = 0;
  let l = 0,
    r = height.length - 1;
  let lmax = 0,
    rmax = 0;

  while (l < r) {
    lmax = Math.max(lmax, height[l]);
    rmax = Math.max(rmax, height[r]);
    if (lmax < rmax) {
      ans += lmax - height[l];
      l++;
    } else {
      ans += rmax - height[r];
      r--;
    }
  }
  return ans;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
