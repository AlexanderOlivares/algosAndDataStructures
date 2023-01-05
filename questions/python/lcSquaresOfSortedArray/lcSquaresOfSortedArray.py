# Leetcode 977. Squares of a Sorted Array
# tests in "./lcSquaresOfSortedArray.test.py"

#  QUESTION:
# Given an integer array nums sorted in non-decreasing order, return an array
# of the squares of each number sorted in non-decreasing order.

# Squaring each element and sorting the new array is very trivial, could you
# find an O(n) solution using a different approach?

#########################
# SOLUTION #1
#########################

def sortedSquares(nums):
    if len(nums) == 1:
        return [nums[0] ** 2]

    min_index = nums.index(min(nums, key=abs))
    r = min_index + 1
    l = min_index - 1 if min_index > 0 else 0

    res = []

    if (r - l > 1):
        res.append(nums[min_index] ** 2)

    for _ in range(len(nums)):
        # check index in range given the middle out approach
        p1 = nums[l] if 0 <= l < len(nums) else None
        p2 = nums[r] if 0 <= r < len(nums) else None

        if (p1 is not None and p2 is not None):
            if (abs(p1) < abs(p2)):
                res.append(p1 ** 2)
                l -= 1
            elif (abs(p1) >= abs(p2)):
                res.append(p2 ** 2)
                r += 1
        elif (p1 and p2 is None):
            res.append(p1 ** 2)
            l -= 1
        elif (p2 and p1 is None):
            res.append(p2 ** 2)
            r += 1

    return res
