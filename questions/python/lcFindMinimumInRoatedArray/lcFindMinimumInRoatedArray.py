# Leetcode 153. Find Minimum in Rotated Sorted Array
# tests in "./test_lcFindMinimumInRotatedArray.py"

#  QUESTION:

# Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
# For example, the array nums = [0,1,2,4,5,6,7] might become:

# [4,5,6,7,0,1,2] if it was rotated 4 times.
# [0,1,2,4,5,6,7] if it was rotated 7 times.
# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array
# [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

# Given the sorted rotated array nums of unique elements, return the minimum element of this array.

# You must write an algorithm that runs in O(log n) time.


#########################
# SOLUTION #1
#########################

def findMin(nums):
    l, r = 0, len(nums) - 1
    minimum = nums[l]

    # list is fully rotated and sorted
    if minimum < nums[r]:
        return nums[l]

    while l < r:
        pivot = (r + l) // 2
        print(nums[l], nums[pivot], nums[r])

        if nums[r] < nums[pivot]:
            minimum = min(minimum, nums[r])
            l = pivot + 1
        elif nums[l] < nums[pivot]:
            minimum = min(minimum, nums[l])
            l = pivot + 1
        else:
            minimum = min(minimum, nums[pivot])
            r = pivot - 1

    return minimum
