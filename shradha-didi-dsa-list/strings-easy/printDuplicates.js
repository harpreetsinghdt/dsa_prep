// function printDuplicates(s) {
//   s = s.split("").sort().join("");
//   console.log(s);
//   let i = 0;
//   while (i < s.length) {
//     let count = 1;
//     while (i + count < s.length && s[i] === s[i + count]) {
//       count++;
//     }
//     if (count > 1) {
//       console.log([s[i], count]);
//     }
//     i += count;
//   }
// }

function printDuplicates(s) {
  let freq = {};

  for (let c of s) {
    freq[c] ? freq[c]++ : (freq[c] = 1);
  }
  for (let key in freq) {
    if (freq[key] > 1) {
      console.log(key, freq[key]);
    }
  }
}
let s = "geeksforgeeks";
printDuplicates(s);
