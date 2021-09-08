const moveZeroes = require("./lcMoveZeros");

test("moveZeroes", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes([0])).toEqual([0]);
  expect(moveZeroes([1, 2, 3, 0, 4, 5, 0])).toEqual([1, 2, 3, 4, 5, 0, 0]);
  expect(moveZeroes([0, 1, 0, 0, 12])).toEqual([1, 12, 0, 0, 0]);
  expect(moveZeroes([1, 0, 0, 0, 0, 12, 0])).toEqual([1, 12, 0, 0, 0, 0, 0]);
});
