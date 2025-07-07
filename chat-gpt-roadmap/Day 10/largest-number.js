/**
 * @param {number[]} nums
 * @return {string}
 */
// var largestNumber = function (nums) {
// const strNums = nums.map((num) => num.toString());
// strNums.sort((a, b) => {
//   const order1 = a + b;
//   const order2 = b + a;
//   return order2.localeCompare(order1);
// });
// if (strNums[0] == "0") {
//   return "0";
// }
// return strNums.join("");
// };

function largestNumber(nums) {
  nums.sort((a, b) => {
    const strA = a.toString();
    const strB = b.toString();
    console.log((strB + strA).localeCompare(strA + strB));
    return (strB + strA).localeCompare(strA + strB);
  });

  // Handle leading zeros
  if (nums[0] === 0) {
    return "0";
  }

  return nums.join("");
}
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([5, 20]));
