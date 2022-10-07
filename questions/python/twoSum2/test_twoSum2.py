import unittest
from twoSum2 import twoSum


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(twoSum([-2, 3, 6, 7, 11, 17], 17), [2, 4])

    def test_scratch(solution1):
        solution1.assertEqual(twoSum([2, 7, 11, 15], 9), [1, 2])

    def test_scratch(solution1):
        solution1.assertEqual(twoSum([2, 3, 4], 6), [1, 3])

    def test_scratch(solution1):
        solution1.assertEqual(twoSum([-1, 0], -1), [1, 2])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
