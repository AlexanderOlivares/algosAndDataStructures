import unittest
from lcSearchInsertPosition import searchInsert


class Test_lcRemoveDuplicates(unittest.TestCase):

    def test_function(solution1):

        solution1.assertEqual(searchInsert([1, 3, 5, 6], 5), 2)
        solution1.assertEqual(searchInsert([1, 3, 5, 6], 2), 1)
        solution1.assertEqual(searchInsert([1, 3, 5, 6], 7), 4)
        solution1.assertEqual(searchInsert([3, 4, 8, 9, 12, 39, 121], 1), 0)
        solution1.assertEqual(searchInsert([3, 4, 8, 9, 12, 39, 121], 3), 0)
        solution1.assertEqual(searchInsert([3, 4, 8, 9, 12, 39, 121], 121), 6)
        solution1.assertEqual(searchInsert([3, 4, 8, 9, 12, 39, 121], 120), 6)
        solution1.assertEqual(searchInsert([1], 1), 0)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
