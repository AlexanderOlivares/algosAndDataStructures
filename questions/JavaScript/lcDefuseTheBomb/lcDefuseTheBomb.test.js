const decrypt = require("./lcDefuseTheBomb");

test("kLengthApart", () => {
  expect(decrypt([5, 7, 1, 4], 5)).toEqual([24, 18, 21, 22]);
  expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
  expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
  expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  expect(decrypt([2, 4, 9, 3], -5)).toEqual([21, 20, 22, 27]);
});
