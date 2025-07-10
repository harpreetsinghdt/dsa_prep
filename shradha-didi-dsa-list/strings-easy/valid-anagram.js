// const isAnagram = (s, t) => {
//   const normalize = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-zA-Z0-9]/, "")
//       .split("")
//       .sort()
//       .join("");
//   return normalize(s) === normalize(t);
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
};

const s = "anagram2",
  t = "na2garam";
// const s = "rat",
//   t = "car";
console.log(isAnagram(s, t));

/*
Hash map solution:
Time complexity: O(n) (where n is the length of the strings)
Space Complexity: O(1)  (because the character count is limited to alphabet size)

Sorting solution:
Time Complexity: O(n log n) (due to sorting)
Space Complexity: O(n) (needs to create arrays for sorting)
*/
