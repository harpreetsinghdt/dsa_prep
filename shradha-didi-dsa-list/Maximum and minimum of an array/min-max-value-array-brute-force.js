function main(arr) {
  function getMin() {
    let mini = Infinity;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < mini) mini = arr[i];
    }
    return mini;
  }
  function getMax() {
    let maxi = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxi) maxi = arr[i];
    }
    return maxi;
  }
  console.time("loopTimer");
  // const startTime = performance.now(); // Start time
  const min_val = getMin();
  const max_val = getMax();
  // const endTime = performance.now(); // End time
  // const duration = endTime - startTime; // Calculate duration

  // console.log(`Loop took ${duration.toFixed(3)} milliseconds.`);
  console.timeEnd("loopTimer");
  return { "Minimun element is:": min_val, "Maxiimun element is:": max_val };
}
// console.log(main([3, 5, 4, 1, 9]));
// console.log(main([22, 14, 8, 17, 35, 3]));

const arr = [1000, 11, 445, 1, 330, 3000];
console.log(main(arr));

// Time complexity: O(N)
// Space complexity (Auxiliary space): O(1)
