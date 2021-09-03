const findMedianSortedArrays = require("./lcFindMedianSortedArray");

test("findMedianSortedArrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0);
  expect(findMedianSortedArrays([], [1])).toEqual(1);
  expect(findMedianSortedArrays([2], [])).toEqual(2);
  expect(findMedianSortedArrays([2, 8, 5], [1, 9])).toEqual(5);
  expect(findMedianSortedArrays([12, 2, 3, 7], [1, 9, 4, 81, 13])).toEqual(7);
});
