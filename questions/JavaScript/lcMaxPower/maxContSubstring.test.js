const { maxPower, maxPowerRegex } = require("./maxContSubstring");

test("maxContSubstring", () => {
  expect(maxPower("leetcode")).toEqual(2);
  expect(maxPower("abbcccddddeeeeedcba")).toEqual(5);
  expect(maxPower("triplepillooooow")).toEqual(5);
  expect(maxPower("hooraaaaaaaaaaay")).toEqual(11);
  expect(maxPower("tourist")).toEqual(1);

  expect(maxPowerRegex("leetcode")).toEqual(2);
  expect(maxPowerRegex("abbcccddddeeeeedcba")).toEqual(5);
  expect(maxPowerRegex("triplepillooooow")).toEqual(5);
  expect(maxPowerRegex("hooraaaaaaaaaaay")).toEqual(11);
  expect(maxPowerRegex("tourist")).toEqual(1);
});
