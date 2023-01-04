import unittest
from lcSearch2DMatrix import searchMatrix


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(searchMatrix(
            [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), True)
        solution1.assertEqual(searchMatrix(
            [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), False)
        solution1.assertEqual(searchMatrix(
            [[1, 3, 9], [10, 11, 12], [23, 30, 34]], 1), True)
        solution1.assertEqual(searchMatrix(
            [[1, 3, 9], [10, 11, 12], [23, 30, 34]], 34), True)
        solution1.assertEqual(searchMatrix(
            [[1, 3, 9], [10, 11, 12], [23, 30, 34]], 4), False)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
