// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//   const freq = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) {
// 		console.log(s.charCodeAt(i));
//     freq[s.charCodeAt(i) - 97]++;
//     freq[t.charCodeAt(i) - 97]--;
//   }
//   return freq.every((count) => count === 0);
// };
// const res = isAnagram("anagram", "nagaram");
// console.log(res);

// function isAnagram(str1, str2) {
  // const normalize = (str) =>
  //   str
  //     .toLowerCase()
  //     .replace(/[^a-z]/g, "")
  //     .split("")
  //     .sort()
  //     .join("");
  // console.log(normalize(str1));
  // console.log(normalize(str2));
  // return normalize(str1) === normalize(str2);
// }
// console.log(isAnagram(" WE@ li34st en", "si #43lentwe")); // true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = new Map();
  // Increment counts for str1
  for (const char of str1.toLowerCase()) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  // Decrement counts for str2
  for (const char of str2.toLowerCase()) {
    if (!freq.has(char)) return false;
    freq.set(char, freq.get(char) - 1);
  }
  // Check if all counts are zero
  return [...freq.values()].every(count => count === 0);
}
console.log(isAnagram("listen", "silent")); // true
