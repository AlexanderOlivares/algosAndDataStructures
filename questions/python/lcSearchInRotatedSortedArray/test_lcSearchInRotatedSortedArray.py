import unittest
from lcSearchInRotatedSortedArray import search


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(search([4, 5, 6, 7, 0, 1, 2], 0), 4)
        solution1.assertEqual(search([4, 5, 6, 7, 0, 1, 2], 3), -1)
        solution1.assertEqual(search([1], 0), -1)
        solution1.assertEqual(search([8], 8), 0)
        solution1.assertEqual(search([5, 6, 8, 11, 14, 18, 22, 1, 3, 4], 3), 8)
        solution1.assertEqual(search([6, 7, 8, 10, 13, 2, 3, 4], 13), 4)
        solution1.assertEqual(search([6, 7, 8, 10, 13, 2, 3, 4], 17), -1)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
