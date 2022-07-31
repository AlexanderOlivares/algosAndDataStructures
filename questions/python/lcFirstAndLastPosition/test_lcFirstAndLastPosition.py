import unittest
from lcFirstAndLastPosition import search_range


class Test_lcContainerWithMostWater(unittest.TestCase):

    def test_function(solution1):
        solution1.assertEqual(search_range([5, 7, 7, 8, 8, 10], 8), [3, 4])
        solution1.assertEqual(search_range([5, 7, 7, 8, 8, 10], 6), [-1, -1])
        solution1.assertEqual(search_range(
            [1, 3, 4, 4, 4, 4, 6, 8, 8, 9], 4), [2, 5])
        solution1.assertEqual(search_range([1, 3, 4, 4, 5], 5), [4, 4])
        solution1.assertEqual(search_range([], 0), [-1, -1])
        solution1.assertEqual(search_range([2, 2], 2), [0, 1])
        solution1.assertEqual(search_range([1, 2, 3], 9), [-1, -1])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
