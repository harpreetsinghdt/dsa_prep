/**
 * @param {number[]} prices
 * @return {number}
 * sliding window example
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {    
    if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    } 
    if (prices[i] < buy) {
      buy = prices[i];
    }
  }
  return profit;
};
const res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
