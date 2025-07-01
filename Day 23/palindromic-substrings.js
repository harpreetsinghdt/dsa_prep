function countPS(s) {
  function isPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  let n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPalindrome(s, i, j)) res++;
    }
  }

  return res;
}
const str = "abaab";
console.log(countPS(str));
