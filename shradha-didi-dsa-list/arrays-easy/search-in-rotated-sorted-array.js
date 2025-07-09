function search(nums, target) {
  const n = nums.length;
  let st = 0,
    end = n - 1;
  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[st] <= nums[mid]) {
      if (nums[st] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        st = mid + 1;
      }
    } else {
      if (nums[mid] <= target && taregt <= nums[end]) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
