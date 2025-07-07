function maxSumSubArray(arr, windowSize) {
	let maxVal = -Infinity;
	let currRunningSum = 0;
	for(let i=0;i<arr.length;i++){
		currRunningSum += arr[i];
		if (i >= windowSize - 1) {
      maxVal = Math.max(maxVal, currRunningSum);
      currRunningSum -= arr[i - (windowSize - 1)];
    }
	}
	return maxVal;

}
const res = maxSumSubArray([4, 2, 1, 1, 8, 0, 2, 8, 1, 0], 3);
console.log(res);
