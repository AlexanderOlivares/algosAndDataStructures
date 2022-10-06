# Leetcode 2133. Check if Every Row and Column Contains All Numbers
# tests in "./test_lcCheckRowColContainsAll"

#  QUESTION:

# An n x n matrix is valid if every row and every column contains all
# the integers from 1 to n (inclusive).

# Given an n x n integer matrix matrix, return true if the matrix is
# valid. Otherwise, return false.

#########################
# SOLUTION #1
#########################

# [[1, 2, 3]
# ,[3, 1, 2]
# ,[2, 3, 1]

# [[1, 2, 8]
# ,[4, 7, 5]
# ,[9, 6, 3]

# [[1, 2, 3, 4], [4, 3, 2, 1], [3, 1, 4, 2], [2, 4, 1, 3]]


def checkValid(matrix):
    n = len(matrix)
    rows = [set() for _ in range(n)]
    cols = [set() for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if matrix[i][j] in rows[i] or matrix[j][i] in cols[i]:
                return False

            rows[i].add(matrix[i][j])
            cols[i].add(matrix[j][i])

            if max(rows[i]) > n or max(cols[i]) > n:
                return False
    return True
