# 283. Move Zeroes
# tests in "./test_lcMoveZeros.py"

#  QUESTION:
# Given an integer array nums, move all 0's to the end of it while maintaining
# the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.


#########################
# SOLUTION #1
#########################

def moveZeroes(nums):

    l = 0
    r = 1

    while r < len(nums):
        if nums[l] == 0 and nums[r] == 0:
            r += 1
            continue
        if nums[l] == 0 and nums[r] != 0:
            nums[l], nums[r] = nums[r], nums[l]
        r += 1
        l += 1

    return nums
