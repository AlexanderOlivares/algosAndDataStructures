import unittest
from lcContainerWithMostWater import maxarea


class Test_lcContainerWithMostWater(unittest.TestCase):

    def test_function(solution1):
        solution1.assertEqual(maxarea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
        solution1.assertEqual(maxarea([10, 4, 8, 6, 5]), 20)
        solution1.assertEqual(maxarea([8, 4, 1, 9]), 24)
        solution1.assertEqual(maxarea([4, 1, 5, 6, 7]), 16)
        solution1.assertEqual(maxarea([1, 1]), 1)


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
