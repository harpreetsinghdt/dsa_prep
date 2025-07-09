class Main {
  constructor() {
    this.min = -Infinity;
    this.max = Infinity;
  }
}
function getMinMax(arr, low, high) {
  let minmax = new Main();
  let minmaxleft = new Main();
  let minmaxright = new Main();
  let mid;
  if (low == high) {
    minmax.min = arr[low];
    minmax.max = arr[low];
    return minmax;
  }
  if (high == low + 1) {
    if (arr[low] > arr[high]) {
      minmax.min = arr[high];
      minmax.max = arr[low];
    } else {
      minmax.min = arr[low];
      minmax.max = arr[high];
    }
    return minmax;
  }

  mid = parseInt((low + high) / 2);
  minmaxleft = getMinMax(arr, low, mid);
  minmaxright = getMinMax(arr, mid + 1, high);

  if (minmaxleft.min < minmaxright.min) {
    minmax.min = minmaxleft.min;
  } else {
    minmax.min = minmaxright.min;
  }
  if (minmaxleft.max > minmaxright.max) {
    minmax.max = minmaxleft.max;
  } else {
    minmax.max = minmaxright.max;
  }
  return minmax;
}
const arr = [1000, 11, 445, 102, 3303, 3000];
console.log(getMinMax(arr, 0, arr.length - 1));

// Time complexity: O(n)
// Space complexity: O(log n), as the stack space will be filled for the maximum height of the tree formed during recursive calls same as a binary tree.
