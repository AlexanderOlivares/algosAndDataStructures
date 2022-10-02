const { isPalindrome, isPalindrome2 } = require("./lcIsPalindrome");
// const { isPalindrome2 } = require("./lcIsPalindrome");

test("isPalindrome", () => {
  expect(isPalindrome("race a car")).toEqual(false);
  expect(isPalindrome("alexiscool")).toEqual(false);
  expect(isPalindrome("alexxel")).toEqual(false);
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  expect(isPalindrome("a9a")).toEqual(true);
  expect(isPalindrome(" ")).toEqual(true);
  expect(isPalindrome("a")).toEqual(true);
  expect(isPalindrome("00 00")).toEqual(true);
  expect(isPalindrome("alexxela")).toEqual(true);
});

test("isPalindrome solution #2", () => {
  expect(isPalindrome2("race a car")).toEqual(false);
  expect(isPalindrome2("alexiscool")).toEqual(false);
  expect(isPalindrome2("alexxel")).toEqual(false);
  expect(isPalindrome2("A man, a plan, a canal: Panama")).toEqual(true);
  expect(isPalindrome2("a9a")).toEqual(true);
  expect(isPalindrome2(" ")).toEqual(true);
  expect(isPalindrome2("a")).toEqual(true);
  expect(isPalindrome2("00 00")).toEqual(true);
  expect(isPalindrome2("alexxela")).toEqual(true);
});
