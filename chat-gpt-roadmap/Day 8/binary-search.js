function binarysearch(arr, target) {
  // arr = arr.sort();
  // console.log(arr);
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// console.log(binarysearch([5], 5));
console.log(binarysearch([11, 12, 13, 14, 15, 17, 19], 17));
// console.log(binarysearch([1, 3, 2, 9, 5, 7], 5));
// console.log(binarysearch([1, 6, 2, 8, 9, 5, 7], 5));
