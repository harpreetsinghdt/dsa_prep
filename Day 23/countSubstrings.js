function countSubstrings(s) {
  let count = 0;
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let end = 0; end < n; end++) {
    for (let start = 0; start <= end; start++) {
      if (s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
        dp[start][end] = true;
        count++;
      }
    }
  }

  return count;
}
