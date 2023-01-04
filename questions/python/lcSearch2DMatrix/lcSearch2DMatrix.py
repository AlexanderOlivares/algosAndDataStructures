# Leetcode 74. Search a 2D Matrix
# tests in "./test_lcSearch2DMatrix.py"

#  QUESTION:
# You are given an m x n integer matrix matrix with the following two properties:

# Each row is sorted in non-decreasing order.
# The first integer of each row is greater than the last integer of the previous row.
# Given an integer target, return true if target is in matrix or false otherwise.

# You must write a solution in O(log(m * n)) time complexity.


#########################
# SOLUTION #1
#########################


def searchMatrix(matrix, target):
    flat = sum(matrix, [])
    start = 0
    end = len(flat) - 1

    while (start <= end):
        mid = (start + end) // 2

        if (flat[mid] == target):
            return True
        if (flat[mid] > target):
            end = mid - 1
        else:
            start = mid + 1

    return False
