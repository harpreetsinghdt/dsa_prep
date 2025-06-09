function getMaxSumOfFiveContiguousElements(arr) {
  let maxSum = -Infinity;
  let currSum;

  for (let i = 0; i <= arr.length - 5; i++) {
    currSum = 0;

    for (let j = i; j < i + 5; j++) {
      currSum += arr[j];
    }

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
const res = getMaxSumOfFiveContiguousElements([
  5, 1, 7, 1, 5, 1, 1, 4, 3, 6, 2, 1, 9, 2, 0,
]);
console.log(res);
