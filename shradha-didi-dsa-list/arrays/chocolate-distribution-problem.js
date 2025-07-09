// Sliding Window approach
// function main(arr, m) {
//   const n = arr.length;
//   arr.sort((a, b) => a - b);
//   let minDiff = Infinity;
//   for (let i = 0; i + m - 1 < n; i++) {
//     let diff = arr[i + m - 1] - arr[i];
//     if (diff < minDiff) {
//       minDiff = diff;
//     }
//   }
//   return minDiff;
// }
// const arr = [7, 3, 2, 4, 9, 12, 56];
// const m = 3;
// console.log(main(arr, m));

// Time Complexity: n*log(n), where n is the size of arr[].
// Auxiliary Space: O(1)

// Naive approach - generate subsets
function generateSubsets(arr, m) {
  const result = [];

  function backtrack(start, current) {
    if (current.length === m) {
      result.push([...current]);
      console.log("return called", ...current);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      console.log("elem", arr[i]);
      current.push(arr[i]);

      console.log(i + 1, current, current.length);
      console.log("backtrack called");

      backtrack(i + 1, current);

      let pp = current.pop();
      console.log("poped", pp);
    }
  }

  backtrack(0, []);
  return result;
}

const arr = [7, 3, 2, 4, 9, 12, 56];
const m = 3;
const subsets = generateSubsets(arr, m);

console.log(subsets);
console.log(`Total subsets: ${subsets.length}`);
