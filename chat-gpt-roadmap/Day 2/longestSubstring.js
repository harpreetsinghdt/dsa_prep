const longestSubstring = (s) => {
  let set = new Set(),
    max = 0,
    left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) set.delete(s[left++]);
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
};
const res = longestSubstring("Harpreet");
console.log(res);
