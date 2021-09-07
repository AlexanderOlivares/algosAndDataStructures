const longestCommonPrefix = require("./lcLongestCommonPrefix");

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
