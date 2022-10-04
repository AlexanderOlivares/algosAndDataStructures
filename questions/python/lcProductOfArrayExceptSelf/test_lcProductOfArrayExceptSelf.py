import unittest
from lcProductOfArrayExceptSelf import productExceptSelf


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(productExceptSelf([1, 2, 3]), [6, 3, 2])
        solution1.assertEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
        solution1.assertEqual(productExceptSelf([0, 2, 3, 5]), [30, 0, 0, 0])
        solution1.assertEqual(productExceptSelf(
            [-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])
        solution1.assertEqual(productExceptSelf(
            [1, 2, 3, 4, 5]), [120, 60, 40, 30, 24])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
