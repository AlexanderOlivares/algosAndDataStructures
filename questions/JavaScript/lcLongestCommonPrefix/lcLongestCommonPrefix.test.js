const longestCommonPrefix = require("./lcLongestCommonPrefix");
const longestCommonPrefix2 = require("./lcLongestCommonPrefix");

test("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["leets", "leetcode", "leet", "leed"])).toEqual(
    "lee"
  );
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix(["cir", "car"])).toEqual("c");
  expect(
    longestCommonPrefix(["caseflower", "casmayflow", "caseflight"])
  ).toEqual("cas");
  expect(longestCommonPrefix(["a"])).toEqual("a");
  expect(longestCommonPrefix([""])).toEqual("");
  expect(longestCommonPrefix(["flower", "flower", "flower", "flower"])).toEqual(
    "flower"
  );
  expect(longestCommonPrefix(["aca", "cba"])).toEqual("");
  expect(longestCommonPrefix(["babb", "caa"])).toEqual("");
});

test("longestCommonPrefix2", () => {
  expect(longestCommonPrefix2(["leets", "leetcode", "leet", "leed"])).toEqual(
    "lee"
  );
  expect(longestCommonPrefix2(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestCommonPrefix2(["dog", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix2(["cir", "car"])).toEqual("c");
  expect(
    longestCommonPrefix2(["caseflower", "casmayflow", "caseflight"])
  ).toEqual("cas");
  expect(longestCommonPrefix2(["a"])).toEqual("a");
  expect(longestCommonPrefix2([""])).toEqual("");
  expect(
    longestCommonPrefix2(["flower", "flower", "flower", "flower"])
  ).toEqual("flower");
  expect(longestCommonPrefix2(["aca", "cba"])).toEqual("");
  expect(longestCommonPrefix2(["babb", "caa"])).toEqual("");
});
