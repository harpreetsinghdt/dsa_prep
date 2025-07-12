// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";
//   if (strs.length === 1) return strs[0];

//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     let temp = "";

//     for (let char = 0; char < prefix.length && char < strs[i].length; char++) {
//       if (strs[i][char] === prefix[char]) {
//         temp += prefix[char];
//       } else {
//         break;
//       }
//     }
//     prefix = temp;
//     if (prefix === "") {
//       return "";
//     }
//   }
//   return prefix;
// }

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];
const strs1 = ["dog", "racecar", "car"];
const strs2 = ["dog"];
const strs3 = [""];
console.log(longestCommonPrefix(strs));
// console.log(longestCommonPrefix(strs1));
// console.log(longestCommonPrefix(strs2));
// console.log(longestCommonPrefix(strs3));
