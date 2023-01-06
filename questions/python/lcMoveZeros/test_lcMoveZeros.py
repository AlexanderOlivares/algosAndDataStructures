import unittest
from lcMoveZeros import moveZeroes


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
        solution1.assertEqual(moveZeroes([0]), [0])
        solution1.assertEqual(moveZeroes(
            [-1, -12, 8, 0, 9]), [-1, -12, 8, 9, 0])
        solution1.assertEqual(moveZeroes([0, 0, 0, 7, 0]), [7, 0, 0, 0, 0])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
