// https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/

function main(arr) {
  const len = arr.length;
  if (len == 1) {
    return { "Minimun element is:": arr[0], "Maxiimun element is:": arr[0] };
  }
  let mini, maxi;
  if (arr[0] > arr[1]) {
    mini = arr[1];
    maxi = arr[0];
  } else {
    mini = arr[0];
    maxi = arr[1];
  }
  for (let i = 2; i < len; i++) {
    if (mini > arr[i]) {
      mini = arr[i];
    } else if (maxi < arr[i]) {
      maxi = arr[i];
    }
  }
  return { "Minimun element is:": mini, "Maxiimun element is:": maxi };
}
const arr = [1000, 11, 445, 102, 3303, 3000];
console.log(main(arr));

// Time complexity: O(n)
// Space complexity: O(1), auxilary space, no extra space was needed.
