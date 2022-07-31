# Leet Code 34. Find First and Last Position of Element in Sorted Array
# tests in test_lcFirstAndLastPosition


#  QUESTION:
# Given an array of integers nums sorted in non-decreasing order, find the
# starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].
# You must write an algorithm with O(log n) runtime complexity.

# Example 1:

# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]

#########################
# SOLUTION #1
#########################

def search_range(nums, target):
    try:
        start = nums.index(target)
        end = start + 1
        if nums[start] == nums[len(nums) - 1]:
            return [start, len(nums) - 1]
        while nums[end] == nums[start]:
            end += 1
        return [start, end - 1]
    except:
        return [-1, -1]
