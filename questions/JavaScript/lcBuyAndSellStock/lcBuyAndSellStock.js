// LeetCode 121. Best Time to Buy and Sell Stock
// tests in "./lcBuyAndSellStock.test.js"

/* QUESTION:

You are given an array prices where prices[i] is the price
of a given stock on the ith day.

You want to maximize your profit by choosing a single day 
to buy one stock and choosing a different day in the future 
to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

///////////////////////
// SOLUTION #1
///////////////////////

const maxProfit = price => {
  let l = 0;
  let r = 1;
  let max = 0;
  while (r < price.length) {
    if (price[l] < price[r]) {
      max = Math.max(price[r] - price[l], max);
      r++;
    } else {
      l++;
      r = l + 1;
    }
  }
  return max;
};

module.exports = maxProfit;
