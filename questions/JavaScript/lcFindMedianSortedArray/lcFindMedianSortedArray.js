// LeetCode 4. Median of Two Sorted Arrays
// tests in lcFindMedianSortedArray.test.js

/* QUESTION:

Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/

///////////////////////
// SOLUTION #1
///////////////////////

const findMedianSortedArrays = (nums1, nums2) => {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = sorted.length;

  if (len % 2 !== 0) {
    return sorted[Math.floor(len / 2)];
  }

  const lowerBound = Math.floor(len / 2) - 1;
  const upperBound = len / 2;

  return (sorted[lowerBound] + sorted[upperBound]) / 2;
};

module.exports = findMedianSortedArrays;
