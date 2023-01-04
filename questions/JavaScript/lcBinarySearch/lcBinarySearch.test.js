const search = require("./lcBinarySearch");

test("Leetcode 704. Binary Search", () => {
  expect(search([], 1)).toEqual(-1);
  expect(search([1], 1)).toEqual(0);
  expect(search([1], 2)).toEqual(-1);
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  expect(search([-1, 0, 3, 4, 5, 9, 11, 12, 25, 49, 102], 102)).toEqual(10);
  expect(search([-1, 0, 3, 4, 5, 9, 11, 12, 25, 49, 102], -1)).toEqual(0);
});
