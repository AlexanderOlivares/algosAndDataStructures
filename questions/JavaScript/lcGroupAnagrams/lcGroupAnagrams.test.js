const groupAnagrams = require("./lcGroupAnagrams");

test("lc group anagrams", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
    [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]].sort()
  );
  expect(groupAnagrams(["pool", "loop", "alex"])).toEqual([["alex"], ["loop", "pool"]].sort());
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
  expect(groupAnagrams(["", ""])).toEqual([["", ""]]);
});
