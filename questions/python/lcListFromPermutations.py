# LeetCode 1920. Build Array from Permutation
# tests in test_lcListFromPermutations.py

#  QUESTION:

# Given a zero-based permutation nums (0-indexed), build an array ans of the
# same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

# A zero-based permutation nums is an array of distinct integers from 0 to
# nums.length - 1 (inclusive).

# Constraints:

# 1 <= nums.length <= 1000
# 0 <= nums[i] < nums.length
# The elements in nums are distinct.

#########################
# SOLUTION #1
#########################

def buildArray(nums):
    return [nums[nums[i]] for i in range(0, len(nums))]


#########################
# SOLUTION #2
#########################

def buildArray2(nums):
    res = []
    for i in range(0, len(nums)):
        res.append(nums[nums[i]])
    return res
