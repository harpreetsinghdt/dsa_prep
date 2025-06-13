/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// brute force approach
// var subarraySum = function (nums, k) {
//   let subArrCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const ielement = nums[i];
//     if (ielement === k) {
//       subArrCount++;
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       const jelement = nums[j];
//       if (ielement + jelement === k) {
//         subArrCount++;
//         break;
//       }
//     }
//   }
//   return subArrCount;
// };

var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let subArrCount = 0;
  let currSum = 0;
  for (const num of nums) {
    currSum += num;
    const target = currSum - k;
    if (map.has(target)) {
      subArrCount += map.get(target);
    }
    map.set(currSum, (map.get(currSum) || 0) + 1);
  }
  return subArrCount;
};
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([2, 1, 2, 3], 3));
