/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freq.has(nums[i])) {
      const currfreq = freq.get(nums[i]);
      freq.set(nums[i], currfreq + 1);
    } else {
      freq.set(nums[i], 1);
    }
  }
  const topKKeys = [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key, _]) => key);
  return topKKeys;
};

const nums = [5, 6, 1, 1, 1, 2, 2, 9],
  k = 2;
const res = topKFrequent(nums, k);
console.log(res);
