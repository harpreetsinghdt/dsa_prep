// var isPalindrome = function (s) {
//   // let str = s.toLowerCase().replace(/[ ,:]/g, "");
//   let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   console.log(str);
//   let len = str.length;
//   console.log(len);
//   // let mid = Math.floor(len / 2);
//   // console.log(mid);

//   let st = 0;
//   let end = len - 1;
//   while (st < end) {
//     if (str[st] !== str[end]) {
//       console.log(str[st], str[end], "not matched");
//       return false;
//     }
//     console.log(str[st], str[end], "matched");
//     st++;
//     end--;
//   }

//   return true;
// };

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters
    while (left < right && !isAlphaNumeric(s[left])) {
      console.log("left b", left);
      left++;
      console.log("left a", left);
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      console.log("right b", right);
      right--;
      console.log("right a", right);
    }

    // Compare lowercase characters
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      console.log("return false");
      return false;
    }
    left++;
    right--;
    console.log(left, right);
  }

  return true;
};

function isAlphaNumeric(char) {
  return /[a-z0-9]/i.test(char);
}

const s = "A, man, a plan, a canal: Pana>ma";
// const s = "race a car";
// const s = "madam kanak madam";
console.log(isPalindrome(s));
