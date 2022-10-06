import unittest
from lcCheckRowColContainsAll import checkValid


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(checkValid(
            [[1, 2, 3], [3, 1, 2], [2, 3, 1]]), True)
        solution1.assertEqual(checkValid(
            [[1, 2, 3, 4], [4, 3, 2, 1], [3, 1, 4, 2], [2, 4, 1, 3]]), True)

        solution1.assertEqual(checkValid(
            [[1, 2, 3, 5], [4, 3, 2, 1], [3, 1, 4, 2], [2, 4, 1, 3]]), False)
        solution1.assertEqual(checkValid(
            [[1, 1, 1], [1, 2, 3], [1, 2, 3]]), False)
        solution1.assertEqual(checkValid(
            [[1, 2, 8], [4, 7, 5], [9, 6, 3]]), False)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
