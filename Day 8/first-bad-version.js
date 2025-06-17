/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

function solution(isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
}
// Example usage with mock API
const isBadVersion = (v) => v >= 4;
const findFirstBadVersion = solution(isBadVersion);

console.log(findFirstBadVersion(5)); // 4
console.log(findFirstBadVersion(10)); // 4
console.log(findFirstBadVersion(3)); // -1 (if no bad versions)
