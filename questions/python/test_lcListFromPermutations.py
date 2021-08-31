import unittest
import lcListFromPermutations


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(lcListFromPermutations.buildArray(
            [0, 2, 1, 5, 3, 4]), [0, 1, 2, 4, 5, 3])
        solution1.assertEqual(lcListFromPermutations.buildArray(
            [5, 0, 1, 2, 3, 4]), [4, 5, 0, 1, 2, 3])
        solution1.assertEqual(lcListFromPermutations.buildArray(
            [3, 1, 2, 5, 0, 4]), [5, 1, 2, 4, 3, 0])

    def test_scratch(solution2):
        solution2.assertEqual(lcListFromPermutations.buildArray2(
            [0, 2, 1, 5, 3, 4]), [0, 1, 2, 4, 5, 3])
        solution2.assertEqual(lcListFromPermutations.buildArray2(
            [5, 0, 1, 2, 3, 4]), [4, 5, 0, 1, 2, 3])
        solution2.assertEqual(lcListFromPermutations.buildArray(
            [3, 1, 2, 5, 0, 4]), [5, 1, 2, 4, 3, 0])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
