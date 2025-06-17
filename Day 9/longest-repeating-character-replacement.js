/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const freq = new Array(26).fill(0);
  let maxCount = 0;
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s.charCodeAt(right) - 65; // 'A' is 65
    freq[char]++;
    maxCount = Math.max(maxCount, freq[char]);
    while (right - left + 1 - maxCount > k) {
      const leftChar = s.charCodeAt(left) - 65;
      freq[leftChar]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
// console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("GLLEMZQDDAABABBAZXQZ", 2));
