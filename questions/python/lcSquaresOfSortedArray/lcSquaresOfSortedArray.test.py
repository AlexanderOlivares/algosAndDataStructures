import unittest
from lcSquaresOfSortedArray import sortedSquares


class Test_lcSquaresOfSortedArray(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(sortedSquares(
            [-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])
        solution1.assertEqual(sortedSquares(
            [-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])
        solution1.assertEqual(sortedSquares([1, 2, 3, 4]), [1, 4, 9, 16])
        solution1.assertEqual(sortedSquares([4]), [16])
        solution1.assertEqual(sortedSquares(
            [-7, -3, 0, 1, 2]), [0, 1, 4, 9, 49])
        solution1.assertEqual(sortedSquares([1, 2, 2]), [1, 4, 4])
        solution1.assertEqual(sortedSquares([0]), [0])
        solution1.assertEqual(sortedSquares([1, 3, 6]), [1, 9, 36])
        solution1.assertEqual(sortedSquares(
            [-10000, -9999, -7, -5, 0, 0, 10000]), [0, 0, 25, 49, 99980001, 100000000, 100000000])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
