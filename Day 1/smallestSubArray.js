function smallestSubArray(arr, targetSum) {
  let minwindowSize = Infinity;
  let currWindowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd <= arr.length; windowEnd++) {
    currWindowSum += arr[windowEnd];
    while (currWindowSum >= targetSum) {
      minwindowSize = Math.min(minwindowSize, windowEnd - windowStart + 1);
      currWindowSum -= arr[windowStart];
      windowStart++;
    }
  }
	return minwindowSize;
}
const res = smallestSubArray([4, 2, 1, 1, 8, 0, 2, 6, 1, 0], (targetSum = 10));
console.log(res);
