function longestKSubstring(s, k) {
  let left = 0,
    maxLen = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) map.delete(leftChar);
      left++;
    }

    if (map.size === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen;
}
const s = "eceba";
const k = 2;
console.log(longestKSubstring(s, k));
