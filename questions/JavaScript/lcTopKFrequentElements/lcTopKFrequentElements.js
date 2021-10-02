// LeetCode 347. Top K Frequent Elements
// tests in "./lcBuyAndSellStock.test.js"

/* QUESTION:

Given an integer array nums and an integer k, return the k 
most frequent elements. You may return the answer in any order.

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const topKFrequent = (nums, k) => {
  let map = new Map();

  for (let i of nums) {
    map.set(i, map.get(i) + 1 || 1);
  }

  let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  let kFreq = [];

  for (let i = 0; i < k; i++) {
    kFreq.push(sorted[i][0]);
  }

  return kFreq;
};

module.exports = topKFrequent;
