const { foldArray, foldArray2 } = require("./cwFoldArray");

test("cwFoldArray solution 1", () => {
  expect(foldArray([1], 1)).toEqual([1]);
  expect(foldArray([1], 5)).toEqual([1]);
  expect(foldArray([1, 2, 3, 4, 5], 1)).toEqual([6, 6, 3]);
  expect(foldArray([1, 2, 3, 4, 5], 2)).toEqual([9, 6]);
  expect(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([33, 22]);
});

test("cwFoldArray solution 2", () => {
  expect(foldArray2([1], 1)).toEqual([1]);
  expect(foldArray2([1], 5)).toEqual([1]);
  expect(foldArray2([1, 2, 3, 4, 5], 1)).toEqual([6, 6, 3]);
  expect(foldArray2([1, 2, 3, 4, 5], 2)).toEqual([9, 6]);
  expect(foldArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([33, 22]);
});
