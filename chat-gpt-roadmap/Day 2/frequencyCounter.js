const getFreqMap = (str) => {
  const freq = new Map();
  for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
};
const getFreqArr = (str) => {
  const freq = [];
  for (const char of str) {
    // console.log(char, freq[char]);
    if (freq[char] == undefined) {
      freq[char] = 1;
    } else {
      freq[char] += 1;
    }
  }
  return freq;
};
const getFreqObj = (str) => {
  const freq = {};
  for (const char of str) {
    // console.log(char, freq[char]);
    if (freq[char] == undefined) {
      freq[char] = 1;
    } else {
      freq[char] += 1;
    }
  }
  return freq;
};
const res = getFreqMap("harpreet siiengh");
const res1 = getFreqArr("harpreet siiengh");
const res2 = getFreqArr("harpreet siiengh");
// console.log(res);
// console.log(res1);
console.log(res2);
