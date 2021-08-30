const kLengthApart = require("./lcKLengthApart");

test("kLengthApart", () => {
  expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toEqual(true);
  expect(kLengthApart([1, 1, 1, 1, 1], 0)).toEqual(true);
  expect(kLengthApart([0, 1, 0, 1], 1)).toEqual(true);
  expect(kLengthApart([1, 0, 0, 0], 2)).toEqual(true);
  expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toEqual(false);
  expect(kLengthApart([1, 0, 0, 0, 0, 1], 5)).toEqual(false);
  expect(kLengthApart([0, 1, 1, 0, 1], 4)).toEqual(false);
});
