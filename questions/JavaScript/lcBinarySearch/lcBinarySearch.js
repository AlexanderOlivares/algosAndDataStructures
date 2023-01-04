// Leetcode 704. Binary Search
// tests in "./"

/* QUESTION:
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. 
Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

///////////////////////
// SOLUTION #1
///////////////////////

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

module.exports = search;
