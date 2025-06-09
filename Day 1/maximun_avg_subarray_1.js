/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, maxWindow) {
  let maxAvg = -Infinity;
  for (let end = 0; end < nums.length - maxWindow + 1; end++) {
    let currSum = 0;
    let currWindow = end;
    while (currWindow < maxWindow + end) {
      currSum += nums[currWindow];
      currWindow++;
    }
    maxAvg = Math.max(maxAvg, currSum / maxWindow);
  }
  return maxAvg;
};

const res = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log(res);
