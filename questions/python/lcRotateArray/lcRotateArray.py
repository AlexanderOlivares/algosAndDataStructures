# Leetcode 189. Rotate Array
# tests in "./test_lcRotateArray.py"

#  QUESTION:
# Given an array, rotate the array to the right by k steps, where k is non-negative.


#########################
# SOLUTION #1
#########################

def rotate(nums, k):
    if not k:
        return nums
    rotations = k % len(nums)
    while rotations > 0:
        nums.insert(0, nums.pop(len(nums) - 1))
        rotations -= 1
    return nums

#########################
# SOLUTION #2
#########################


def rotate2(nums, k):
    length = len(nums)
    rotations = k % length
    nums[:] = nums[length-rotations:] + nums[:length-rotations]
    return nums
