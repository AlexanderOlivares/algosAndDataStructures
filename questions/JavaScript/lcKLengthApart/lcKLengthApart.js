// LeetCode 1437. Check If All 1's Are at Least K Places Away
// tests in lcReverseOnlyLetters.test.js

/* QUESTION:

Given an array nums of 0s and 1s and an integer k,
return True if all 1's are at least k places away from each other,
otherwise return False.

Constraints:

1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1

*/

///////////////////////
// SOLUTION #1
///////////////////////

const kLengthApart = (nums, k) => {
  let left = 0;

  // i is the right pointer
  for (let i = 1; i < nums.length; i++) {
    if (nums[left] === 1 && nums[i] === 1) {
      if (i - left <= k) return false;
      left = i;
    }

    if (nums[left] !== 1) {
      left++;
    }
  }

  return true;
};

module.exports = kLengthApart;
