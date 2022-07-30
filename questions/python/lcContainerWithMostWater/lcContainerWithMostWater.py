# Leet Code 11. Container With Most Water
# tests in test_csAscendDescendRepat.py

#  QUESTION:
# You are given an integer array height of length n. There are n vertical lines
# drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
# Find two lines that together with the x-axis form a container, such that the
# container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.

# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49

# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
# In this case, the max area of water (blue section) the container can contain is 49.

#########################
# SOLUTION #1
#########################

def maxarea(height):
    a = 0
    b = len(height) - 1
    max_volume = 0
    distance = b
    while distance:
        min_wall_height = min(height[a], height[b])
        max_volume = max(max_volume, distance * min_wall_height)
        if min_wall_height == height[a]:
            a += 1
        else:
            b -= 1
        distance -= 1
    return max_volume
