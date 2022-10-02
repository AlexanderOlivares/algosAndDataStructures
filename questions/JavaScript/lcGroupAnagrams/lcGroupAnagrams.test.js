const { groupAnagrams, groupAnagrams2 } = require("./lcGroupAnagrams");

test("lc group anagrams solution #1", () => {
  expect(groupAnagrams(["tommarvoloriddle", "iamlordvoldemort"])).toEqual(
    [["iamlordvoldemort", "tommarvoloriddle"]].sort()
  );
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
    [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]].sort()
  );
  expect(groupAnagrams(["pool", "loop", "alex"])).toEqual([["alex"], ["loop", "pool"]].sort());
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
  expect(groupAnagrams(["", ""])).toEqual([["", ""]]);
  expect(groupAnagrams(["ac", "c"])).toEqual([["c"], ["ac"]].sort());
});

test("lc group anagrams solution #2", () => {
  expect(groupAnagrams2(["tommarvoloriddle", "iamlordvoldemort"])).toEqual(
    [["iamlordvoldemort", "tommarvoloriddle"]].sort()
  );
  expect(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
    [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]].sort()
  );
  expect(groupAnagrams2(["pool", "loop", "alex"])).toEqual([["alex"], ["loop", "pool"]].sort());
  expect(groupAnagrams2([""])).toEqual([[""]]);
  expect(groupAnagrams2(["a"])).toEqual([["a"]]);
  expect(groupAnagrams2(["", ""])).toEqual([["", ""]]);
  expect(groupAnagrams2(["ac", "c"])).toEqual([["c"], ["ac"]].sort());
});
