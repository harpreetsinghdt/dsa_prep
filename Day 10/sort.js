// Creating, displaying, and sorting an array
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

// Sorting array of objects
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

// Sorting non-ASCII characters
const items1 = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items1.sort((a, b) => a.localeCompare(b));
// console.log(items1);

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

// Sorting with map

// sort() returns the reference to the same array
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
// console.log(numbers[0]); // 10

// In case you want sort() to not mutate the original array, but return a shallow-copied array like other array methods (e.g., map()) do, use the toSorted() method. Alternatively, you can do a shallow copy before calling sort(), using the spread syntax or Array.from().
const numbers1 = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
// const sorted1 = [...numbers1].sort((a, b) => a - b);
const arr = Array.from(numbers1);
const sorted1 = arr.sort((a, b) => a - b);
sorted1[0] = 10;
// console.log(numbers1[0]); // 3

// Using sort() on sparse arrays
const arr1 = ["a", "c", , "b"];
// console.log(arr1.sort()); // ['a', 'b', 'c', empty]
// console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]

// Calling sort() on non-array objects
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
// console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 22 },
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);

// Sort by name (alphabetical)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);

const items2 = [
  { name: "Apple", type: "fruit", price: 1.2 },
  { name: "Carrot", type: "vegetable", price: 0.8 },
  { name: "Banana", type: "fruit", price: 1.0 },
];

// Sort by type (fruits first), then by price (ascending)
items2.sort((a, b) => {
  if (a.type === b.type) {
    return a.price - b.price;
  }
  return a.type === "fruit" ? -1 : 1;
});
console.log(items2);
