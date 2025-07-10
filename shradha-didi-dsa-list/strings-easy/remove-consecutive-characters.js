// function removeConsecutiveChars(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     // console.log(s.charAt(i) !== s.charAt(i - 1));
//     if (s.charAt(i) !== s.charAt(i - 1)) {
//       result += s.charAt(i);
//     }
//   }
//   return result;
// }

// function removeConsecutiveChars(s) {
//   return [...s].filter((char, i, arr) => char != arr[i + 1]).join("");
// }
function removeConsecutiveChars(s) {
  return s.replace(/(.)\1+/g, "$1");
}

const s = "aabb";
// const s = "aabaa";
// const s = "abcddcba";
console.log(removeConsecutiveChars(s));
