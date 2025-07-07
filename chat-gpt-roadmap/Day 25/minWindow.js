// 1. Minimum Window Substring
// 📌 Find the smallest window that contains all characters of t.

function minWindow(s, t) {
  const map = {};
  for (let char of t) map[char] = (map[char] || 0) + 1;

  let left = 0,
    right = 0,
    minLen = Infinity,
    minStart = 0,
    counter = t.length;

  while (right < s.length) {
    if (map[s[right]] > 0) counter--;
    map[s[right]]--;
    right++;

    while (counter === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minStart = left;
      }
      map[s[left]]++;
      if (map[s[left]] > 0) counter++;
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
