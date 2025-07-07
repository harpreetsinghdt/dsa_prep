// 🔹 1. XOR Trick: A^A = 0, A^0 = A
// Find the single number (all others appear twice)
function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b, 0);
}
//console.log(singleNumber([1,2,3,2,1,5,6,7,6,7]))

// 🔹 2. Check if a Number is Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
// console.log(isPowerOfTwo(16));

// 🔹 3. Count Set Bits (Brian Kernighan’s Algorithm)
function countBits(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}
// console.log(countBits(10));

// 🔹 4. Hamming Distance
function hammingDistance(x, y) {
  return countBits(x ^ y);
}
// console.log(hammingDistance(1, 4));

// 🔹 5. Sum of Two Integers Without + or -
function getSum(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
// console.log(getSum(1, 2));
console.log(~10);
console.log(~-10);

// 🔹 6. Swap Two Numbers Without Temp Variable
function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
