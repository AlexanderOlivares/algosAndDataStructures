const isMatch = require("./lcRegExpMatching");

test("isMatch", () => {
  expect(isMatch("aa", "a*")).toEqual(true);
  expect(isMatch("ab", ".*")).toEqual(true);
  expect(isMatch("alexiscool", "alexisc.*l")).toEqual(true);
  expect(isMatch("aa", "a")).toEqual(false);
  expect(isMatch("mississippi", "mis*is*p*.")).toEqual(false);
  expect(isMatch("bcd", "a")).toEqual(false);
  expect(isMatch("bcd", "")).toEqual(false);
  expect(isMatch("bcd", " ")).toEqual(false);
});
