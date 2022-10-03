// LeetCode 347. Top K Frequent Elements
// tests in "./lcTopKFrequentElements.test.js"

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

  console.log(map);
  let buckets = Array.from({ length: nums });
  for (let [key, val] of map.entries()) {
    if (buckets[val]) {
      buckets[val].push(key);
    } else {
      buckets[val] = [key];
    }
  }

  let res = [];
  for (let i = buckets.length; i >= 0; i--) {
    if (buckets[i]) {
      buckets[i].forEach(e => res.push(e));
    }
    // sorted for ease of testing
    if (res.length === k) return res.sort();
  }
};

///////////////////////
// SOLUTION #2
///////////////////////

const topKFrequent2 = (nums, k) => {
  let map = new Map();

  for (let i of nums) {
    map.set(i, map.get(i) + 1 || 1);
  }

  let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  let kFreq = [];

  for (let i = 0; i < k; i++) {
    kFreq.push(sorted[i][0]);
  }

  // sorted for ease of testing
  return kFreq.sort();
};

module.exports = {
  topKFrequent,
  topKFrequent2,
};
