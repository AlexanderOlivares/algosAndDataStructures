import unittest
from lcFindMinimumInRoatedArray import findMin


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(findMin([3, 4, 5, 1, 2]), 1)
        solution1.assertEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0)
        solution1.assertEqual(findMin([11, 13, 15, 17]), 11)
        solution1.assertEqual(findMin([2, 3, 4, 5, 6, 1]), 1)
        solution1.assertEqual(findMin([6, 2, 3, 4, 5]), 2)
        solution1.assertEqual(findMin([1, 2, 3, 4, 5]), 1)
        solution1.assertEqual(findMin([8, 0]), 0)
        solution1.assertEqual(findMin([0, 8]), 0)
        solution1.assertEqual(findMin([6, 7, 8, 10, 13, 2, 3, 4]), 2)
        solution1.assertEqual(
            findMin([5, 18, 201, 100, -111, -87, -63, -22, -15]), -111)
        solution1.assertEqual(findMin([1]), 1)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
