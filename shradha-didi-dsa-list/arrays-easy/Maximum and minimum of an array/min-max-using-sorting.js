// https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/

function main(arr) {
  const startTime = performance.now(); // Start time
  arr.sort((a, b) => a - b);
  const min_val = arr[0];
  const max_val = arr[arr.length - 1];
  const endTime = performance.now(); // End time
  const duration = endTime - startTime; // Calculate duration

  console.log(`Loop took ${duration.toFixed(3)} milliseconds.`);
  return { "Minimun element is:": min_val, "Maxiimun element is:": max_val };
}
// console.log(main([3, 5, 4, 1, 9]));
// console.log(main([22, 14, 8, 17, 35, 3]));
const arr = [1000, 11, 445, 1, 330, 3000];
console.log(main(arr));

// Time complexity: O(n log n), n= number of elements in the array, as we are using a sorting algorithm.
// Auxilary space: O(1), as we are not using any extra space.
