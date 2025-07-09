// function containsDuplicate(arr) {
//   let dup = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (dup.has(arr[i])) {
//       return true;
//     }
//     dup.set(arr[i]);
//   }
//   return false;
// }

// function containsDuplicate(arr) {
//   const seen = new Set();
//   for (const num of arr) {
//     if (seen.has(num)) {
//       return true;
//     }
//     seen.add(num);
//   }
//   return false;
// }

function containsDuplicate(arr) {
  let dup = [];
  for (let i = 0; i < arr.length; i++) {
    if (dup.includes(arr[i])) {
      return true;
    }
    dup.push(arr[i]);
  }
  return false;
}

// const nums = [1, 2, 3, 1];
// const nums = [1, 2, 3, 4];
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
