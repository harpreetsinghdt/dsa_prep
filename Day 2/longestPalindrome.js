// var longestPalindrome = function (s) {
// 	 let max = "";
//    for (let i = 0; i < s.length; i++) {
//      for (const [l, r] of [ [i, i], [i, i + 1],]) {
//        let left = l, right = r;
//        while (left >= 0 && right < s.length && s[left] === s[right]) {
//          left--;
//          right++;
//        }
//        if (right - left - 1 > max.length) {
//          max = s.slice(left + 1, right);
//        }
//      }
//    }
//    return max;
// };
// function longestPalindrome(s) {
//   let longest = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
// 			console.log(s.slice(i, j));
//       const substring = s.slice(i, j);
//       if (isPalindrome(substring) && substring.length > longest.length) {
//         longest = substring;
//       }
//     }
//   }
//   return longest;
// }

// function isPalindrome(s) {
// 	console.log(s, s.split("").reverse().join(""));
//   return s === s.split("").reverse().join("");
// }

var longestPalindrome = function (s) {
  let check = function (i, j) {
    let left = i;
    let right = j - 1;
    console.log(left, right);
    while (left < right) {
      console.log(s.charAt(left), s.charAt(right));
      if (s.charAt(left) !== s.charAt(right)) {
        console.log("return false");
        return false;
      }
      console.log("left inc, right dec");
      left++;
      right--;
    }
    console.log("return true");
    return true;
  };

  for (let length = s.length; length > 0; length--) {
    console.log(length);
    for (let start = 0; start <= s.length - length; start++) {
      console.log(length, start);
      if (check(start, start + length)) {
        return s.substring(start, start + length);
      }
    }
  }

  return "";
};
console.log(longestPalindrome("nconoc"));
