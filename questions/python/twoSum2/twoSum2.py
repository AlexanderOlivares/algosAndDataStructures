# Leetcode 167. Two Sum II - Input Array Is Sorted
# tests in "./test_twoSum2.py"

#  QUESTION:

# Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
# find two numbers such that they add up to a specific target number. Let these two numbers
# be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

# Return the indices of the two numbers, index1 and index2, added by one as an integer
# array [index1, index2] of length 2.

# The tests are generated such that there is exactly one solution. You may not use the same
# element twice.

# Your solution must use only constant extra space.

#########################
# SOLUTION #1
#########################

def twoSum(nums, target):
    dict = {}
    for i in range(len(nums)):
        if nums[i] in dict:
            return [dict[nums[i]] + 1, i + 1]
        dict[target - nums[i]] = i