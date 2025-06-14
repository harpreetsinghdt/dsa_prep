// function findFactorial(num) {
//   let factorial = 1;
//   for (let i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }

function findFactorial(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial(num - 1);
  console.log(num, factorial);
  return factorial;
}

console.log(findFactorial(5)); // 120
