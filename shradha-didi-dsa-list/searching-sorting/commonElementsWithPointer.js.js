// Function to find common elements in three arrays
function commonElements(arr1, arr2, arr3) {
  let i = 0,
    j = 0,
    k = 0;
  let common = [];

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;

      while (i < arr1.length && arr1[i] === arr1[i - 1]) i++;
      while (j < arr2.length && arr2[j] === arr2[j - 1]) j++;
      while (k < arr3.length && arr3[k] === arr3[k - 1]) k++;
    } else if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr3[k]) j++;
    else k++;
  }

  return common;
}

// Driver code
function main() {
  let arr1 = [1, 5, 10, 20, 30];
  let arr2 = [5, 13, 15, 20];
  let arr3 = [5, 20];
  let common = commonElements(arr1, arr2, arr3);
  if (common.length == 0) console.log(-1);
  console.log(common.join(" "));
}

main();
