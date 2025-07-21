function commonElements(arr1, arr2, arr3) {
  // Map to mark the common elements
  let mp = new Map();

  // Mark all the elements in the first array with value=1
  arr1.forEach((ele) => {
    mp.set(ele, 1);
  });

  // Mark all the elements which are common in first and
  // second array with value = 2
  arr2.forEach((ele) => {
    if (mp.has(ele) && mp.get(ele) === 1) {
      mp.set(ele, 2);
    }
  });

  // Mark all the elements which are common in first,
  // second and third array with value = 3
  arr3.forEach((ele) => {
    if (mp.has(ele) && mp.get(ele) === 2) {
      mp.set(ele, 3);
    }
  });

  let commonElements = [];
  mp.forEach((value, key) => {
    if (value === 3) {
      commonElements.push(key);
    }
  });

  return commonElements;
}

// Sample Input
let arr1 = [1, 5, 10, 20, 30];
let arr2 = [5, 13, 15, 20];
let arr3 = [5, 20];

let common = commonElements(arr1, arr2, arr3);
if (common.length == 0) console.log(-1);
console.log(common.join(" "));

/**
Time complexity: O((n1 + n2 + n3)*log n1), where inserting arr1[] takes O(n1 * log(n1)), and lookups for arr2[] and arr3[] take O(n2 * log(n1) + n3 * log(n1))
Auxiliary Space: O(n1)
 */
