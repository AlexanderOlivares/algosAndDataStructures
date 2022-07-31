import unittest
from lcRemoveDuplicates import removeDuplicates


class Test_lcRemoveDuplicates(unittest.TestCase):

    def test_function(solution1):

        solution1.assertEqual(removeDuplicates([1, 1, 2]), 2)
        solution1.assertEqual(removeDuplicates(
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
        solution1.assertEqual(removeDuplicates([1, 1, 1, 3]), 2)
        solution1.assertEqual(removeDuplicates(
            [1, 1, 1, 1, 1, 4, 6, 6, 8, 9]), 5)
        solution1.assertEqual(removeDuplicates([1, 1]), 1)
        solution1.assertEqual(removeDuplicates(
            [4, 4, 6, 7, 7, 8, 9]), 5)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
