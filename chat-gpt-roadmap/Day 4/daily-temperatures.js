/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
  let answer = new Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] > temp[i]) {
        answer[i] = j - i;
        break;
      }
    }
  }
  return answer;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73, 78]));
