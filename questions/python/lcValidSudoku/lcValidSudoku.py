# 36. Valid Sudoku
# tests in "./test_lcValidSudoku.py"

#  QUESTION:

# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
# according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

# Note:
# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.

#########################
# SOLUTION #1
#########################

def check_surrounding(board, center_squares):
    surrounding_coords = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]

    for center_square in center_squares:
        seen = {}
        for coords in surrounding_coords:
            start_x = center_square[0]
            start_y = center_square[1]
            offset_x = coords[0]
            offset_y = coords[1]
            found = board[start_x - offset_x][start_y - offset_y]
            if found != ".":
                if found in seen:
                    return False
                seen[found] = True
    return True


def isValidSudoku(board):
    for row in board:
        row_dict = {}
        for i in range(len(row)):
            if row[i] != ".":
                if row[i] in row_dict:
                    return False
                row_dict[row[i]] = True

    for i in range(len(board)):
        col_dict = {}
        for j in range(len(row)):
            if board[j][i] != ".":
                if board[j][i] in col_dict:
                    return False
                col_dict[board[j][i]] = True

    center_squares = [[1, 1], [1, 4], [1, 7], [4, 1],
                      [4, 4], [4, 7], [7, 1], [7, 4], [7, 7]]

    return check_surrounding(board, center_squares)
