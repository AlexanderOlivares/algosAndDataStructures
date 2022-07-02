const longestNonRepeatingSubstring = require("./edbtLongestNonRepeatingSubstring");

test("longestNonRepeatingSubstring solution #1", () => {
  expect(longestNonRepeatingSubstring("abcabcbb")).toEqual("abc");
  expect(longestNonRepeatingSubstring("aaaaaa")).toEqual("a");
  expect(longestNonRepeatingSubstring("abcde")).toEqual("abcde");
  expect(longestNonRepeatingSubstring("abcda")).toEqual("abcd");
  expect(longestNonRepeatingSubstring("aaccddeeffb")).toEqual("ac");
  expect(longestNonRepeatingSubstring("abdde")).toEqual("abd");
  expect(longestNonRepeatingSubstring("ccdddcccc")).toEqual("cd");
  expect(longestNonRepeatingSubstring("cdxdxccxc")).toEqual("cdx");
  expect(longestNonRepeatingSubstring("abddefgh")).toEqual("defgh");
  expect(longestNonRepeatingSubstring("abcdabcd")).toEqual("abcd");
  expect(longestNonRepeatingSubstring("abddebcc")).toEqual("debc");
  expect(longestNonRepeatingSubstring("xyxxyzyzy")).toEqual("xyz");
  expect(longestNonRepeatingSubstring("kjlmjsdeee")).toEqual("lmjsde");
  expect(longestNonRepeatingSubstring("kjlmjsdfew")).toEqual("lmjsdfew");
  expect(longestNonRepeatingSubstring("kjlmjsdfewii")).toEqual("lmjsdfewi");
  expect(longestNonRepeatingSubstring("kjlmjjiiiidfewii")).toEqual("idfew");
  expect(longestNonRepeatingSubstring("kjlmjjiiiidfiwii")).toEqual("kjlm");
});
