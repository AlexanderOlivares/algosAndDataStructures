# Leetcode 238. Product of Array Except Self
# tests in test_lcProductOfArrayExceptSelf.py

#  QUESTION:

# Given an integer array nums, return an array answer such that answer[i] is equal to the product
#  of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# You must write an algorithm that runs in O(n) time and without using the division operation.

#########################
# SOLUTION #1
#########################

def productExceptSelf(nums):
    res = [1]
    running_product = 1
    for i in range(len(nums) - 1):
        res.append(running_product * nums[i])
        running_product *= nums[i]
    running_product = 1
    for i in range(len(res) - 1, -1, -1):
        res[i] = running_product * res[i]
        running_product *= nums[i]
    return res
