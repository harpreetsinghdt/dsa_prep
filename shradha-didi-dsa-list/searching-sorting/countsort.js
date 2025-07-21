class GfG {
  static countsort(arr) {
    let n = arr.length;

    // find the maximum element
    let maxval = Math.max(...arr);

    // create and initialize count array
    let count = Array(maxval + 1).fill(0);

    // count frequency of each element
    for (let i = 0; i < n; i++) count[arr[i]]++;

    // compute prefix sum
    for (let i = 1; i <= maxval; i++) count[i] += count[i - 1];

    // build output array
    let ans = Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let val = arr[i];
      ans[count[val] - 1] = val;
      count[val]--;
    }

    return ans;
  }
}

// Driver code
let arr = [2, 5, 3, 0, 2, 3, 0, 3];
let sorted = GfG.countsort(arr);
console.log(...sorted);

/***
 * 
 * Time Complexity: O(N+M), where N and M are the size of inputArray[] and countArray[] respectively.
Worst-case: O(N+M).
Average-case: O(N+M).
Best-case: O(N+M).
Auxiliary Space: O(N+M), where N and M are the space taken by outputArray[] and countArray[] respectively.


 */
