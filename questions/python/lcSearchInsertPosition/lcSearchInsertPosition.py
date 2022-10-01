# Leet Code 35. Search Insert Position
# tests in test_lcSearchInsertPosition.py

#  QUESTION:

# Given a sorted array of distinct integers and a target value, return the index
# if the target is found. If not, return the index where it would be if it were
# inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

#########################
# SOLUTION #1
#########################

def searchInsert(nums, target):
    left = 0
    right = len(nums) - 1
    floor = 0
    while left <= right:
        mid_point = (right + left) // 2
        if nums[mid_point] == target:
            return mid_point
        if nums[mid_point] > target:
            right = mid_point - 1
        else:
            left = mid_point + 1
            floor = left
    return floor
