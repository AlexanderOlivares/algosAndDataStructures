import unittest
from lcRotateArray import rotate, rotate2


class Test_LcListFromPermuations(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), [
                              5, 6, 7, 1, 2, 3, 4])
        solution1.assertEqual(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])
        solution1.assertEqual(rotate([1], 1), [1])
        solution1.assertEqual(rotate([1], 0), [1])
        solution1.assertEqual(rotate([2, 3, 4], 0), [2, 3, 4])
        solution1.assertEqual(rotate([1, 2, 3, 4, 5, 6, 7], 386), [
                              7, 1, 2, 3, 4, 5, 6])

    def test_scratch(solution2):
        solution2.assertEqual(rotate2([1, 2, 3, 4, 5, 6, 7], 3), [
                              5, 6, 7, 1, 2, 3, 4])
        solution2.assertEqual(rotate2([-1, -100, 3, 99], 2), [3, 99, -1, -100])
        solution2.assertEqual(rotate2([1], 1), [1])
        solution2.assertEqual(rotate2([1], 0), [1])
        solution2.assertEqual(rotate2([2, 3, 4], 0), [2, 3, 4])
        solution2.assertEqual(rotate2([1, 2, 3, 4, 5, 6, 7], 386), [
                              7, 1, 2, 3, 4, 5, 6])


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
