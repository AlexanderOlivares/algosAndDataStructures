const { isAnagram, isAnagram2 } = require("./lcValidAnagram");

test("isAnagram", () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
  expect(isAnagram("aplanapanamacanal", "canalaplanapanama")).toEqual(true);
  expect(isAnagram("alexiscool", "coolisalex")).toEqual(true);
  expect(isAnagram("windows", "windowswindows")).toEqual(false);
  expect(isAnagram("rat", "car")).toEqual(false);
  expect(isAnagram("", "car")).toEqual(false);
  expect(isAnagram("ab", "a")).toEqual(false);
});

test("isAnagram solution 2", () => {
  expect(isAnagram2("anagram", "nagaram")).toEqual(true);
  expect(isAnagram2("aplanapanamacanal", "canalaplanapanama")).toEqual(true);
  expect(isAnagram2("alexiscool", "coolisalex")).toEqual(true);
  expect(isAnagram2("windows", "windowswindows")).toEqual(false);
  expect(isAnagram2("rat", "car")).toEqual(false);
  expect(isAnagram2("", "car")).toEqual(false);
  expect(isAnagram2("ab", "a")).toEqual(false);
});
