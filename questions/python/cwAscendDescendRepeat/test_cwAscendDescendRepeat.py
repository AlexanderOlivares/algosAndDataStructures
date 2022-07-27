import unittest
from cwAscendDescendRepeat import ascend_descend


class Test_cwAscendDescendRepeat(unittest.TestCase):

    def test_scratch(solution1):
        solution1.assertEqual(ascend_descend(5, 1, 3), "12321")
        solution1.assertEqual(ascend_descend(14, 0, 2), "01210121012101")
        solution1.assertEqual(ascend_descend(11, 5, 9), "56789876567")
        solution1.assertEqual(ascend_descend(11, -3, 4), "-3-2-101234")
        solution1.assertEqual(ascend_descend(11, 9, 7), "")
        solution1.assertEqual(ascend_descend(11, 9, 9), "99999999999")
        solution1.assertEqual(ascend_descend(0, 4, 9), "")
        solution1.assertEqual(ascend_descend(12, -14, -12), "-14-13-12-13")
        solution1.assertEqual(ascend_descend(1, -4, 1), "-")
        solution1.assertEqual(ascend_descend(10, -2, 3), "-2-1012321")


# RUN TESTS ON SAVE
if __name__ == '__main__':
    unittest.main()
