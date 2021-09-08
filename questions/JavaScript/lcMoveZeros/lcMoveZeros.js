// LeetCode	283. Move Zeroes
// tests in "./lcMoveZeros.test.js"

/* QUESTION:

Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/

///////////////////////
// SOLUTION #1
///////////////////////

const moveZeroes = nums => {
  let l = 0;
  let r = 1;
  while (r < nums.length) {
    if (!nums[l] && nums[r]) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    } else if (!nums[l] && !nums[r]) {
      r++;
      continue;
    }
    l++;
    r++;
  }
  return nums;
};

module.exports = moveZeroes;
