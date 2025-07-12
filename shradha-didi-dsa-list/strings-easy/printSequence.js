function printSequence(arr, input) {
  let op = "";
  let n = input.length;
  for (let i = 0; i < n; i++) {
    if (input[i] == " ") {
      op += "0".charCodeAt(0);
    } else {
      // console.log(input[i].charCodeAt(0), "A".charCodeAt(0));
      let pos = input[i].charCodeAt(0) - "A".charCodeAt(0);
      op += arr[pos];
    }
  }
  return op;
}

// Driver Function
let str = [
  "2",
  "22",
  "222",
  "3",
  "33",
  "333",
  "4",
  "44",
  "444",
  "5",
  "55",
  "555",
  "6",
  "66",
  "666",
  "7",
  "77",
  "777",
  "7777",
  "8",
  "88",
  "888",
  "9",
  "99",
  "999",
  "9999",
];

let input = "GEEKSFORGEEKS";
console.log(printSequence(str, input));
