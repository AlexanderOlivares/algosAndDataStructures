const isPalindrome = require("./lcPalindromeNumber");

test("isMatch", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(1)).toEqual(true);
  expect(isPalindrome(-121)).toEqual(false);
  expect(isPalindrome(1221)).toEqual(true);
  expect(isPalindrome(1234321)).toEqual(true);
  expect(isPalindrome(1221)).toEqual(true);
  expect(isPalindrome(1221)).toEqual(true);
  expect(isPalindrome(10)).toEqual(false);
  expect(isPalindrome(-121)).toEqual(false);
  expect(isPalindrome(-101)).toEqual(false);
  expect(isPalindrome(9876)).toEqual(false);
});
