/*
https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735

Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.

Constraints:
2 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105

*/

// Function returns the second largest element
function getSecondLargest(arr) {
  // Code Here
  let l = -1;
  let sl = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      sl = l;
      l = arr[i];
    } else if (arr[i] < l && arr[i] > sl) {
      sl = arr[i];
    }
  }
  return sl;
}

let gvnArr1 = [12, 35, 1, 10, 34, 1];
const output1 = getSecondLargest(gvnArr1);
console.log(output1);

let gvnArr2 = [10, 5, 10];
const output2 = getSecondLargest(gvnArr2);
console.log(output2);

let gvnArr3 = [10, 10, 10];
const output3 = getSecondLargest(gvnArr3);
console.log(output3);
