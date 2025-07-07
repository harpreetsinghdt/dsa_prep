function topKFrequent(nums, k) {
  const frequencyMap = new Map();
  const bucket = new Array(nums.length + 1).fill().map(() => []);
  const result = [];

  // Count frequencies
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Put numbers in buckets based on frequency
  for (const [num, freq] of frequencyMap) {
    bucket[freq].push(num);
  }

  // Collect top k frequent elements
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
}
const nums = [5, 6, 1, 1, 1, 2, 2, 9],
  k = 2;
const res = topKFrequent(nums, k);
console.log(res);
