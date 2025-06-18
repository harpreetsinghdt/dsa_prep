const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// console.log(stringArray);
stringArray.join(); // 'Blue,Humpback,Beluga'
// console.log(stringArray);
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']
// console.log(stringArray);

// console.log(numberArray);
numberArray.join(); // '40,1,5,200'
// console.log(numberArray);
numberArray.sort(); // [1, 200, 40, 5]
// console.log(numberArray);
numberArray.sort(compareNumbers); // [1, 5, 40, 200]
// console.log(numberArray);

// console.log(numericStringArray);
numericStringArray.join(); // '80,9,700'
// console.log(numericStringArray);
numericStringArray.sort(); // ['700', '80', '9']
// console.log(numericStringArray);
numericStringArray.sort(compareNumbers); // ['9', '80', '700']
// console.log(numericStringArray);

// console.log(mixedNumericArray);
mixedNumericArray.join(); // '80,9,700,40,1,5,200'
// console.log(mixedNumericArray);
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
// console.log(mixedNumericArray);
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
// console.log(mixedNumericArray);

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(items);
