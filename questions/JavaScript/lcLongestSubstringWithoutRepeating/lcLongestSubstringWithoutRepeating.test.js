const lengthOfLongestSubstring = require("./lcLongestSubstringWithoutRepeating");

test("lengthOfLongestSubstring", () => {
  expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
  expect(lengthOfLongestSubstring("au")).toEqual(2);
  expect(lengthOfLongestSubstring("ahskciwccskjawojfs")).toEqual(7);
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  expect(lengthOfLongestSubstring("")).toEqual(0);
});
// "dvdf"
// "au"
// "ahskciwccskjawojfs"
// "abcabcbb"
// "bbbbb"
// "pwwkew"
// ""
