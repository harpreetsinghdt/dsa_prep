function subsetsWithDup(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort to handle duplicates

  function backtrack(start, current) {
    result.push([...current]);
    for (let i = start; i < nums.length; i++) {
      // Skip duplicates if not the first occurrence in this level
      if (i > start && nums[i] === nums[i - 1]) continue;
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}
console.log(subsetsWithDup([1, 2, 3]));
console.log(subsetsWithDup([1, 2, 2]));
