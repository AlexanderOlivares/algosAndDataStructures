// LeetCode	9. Palindrome Number
// tests in "./lcPalindromeNumber.test.js"

/* QUESTION:

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const reverseStr = str => str.split("").reverse().join("");

var isPalindrome = function (x) {
  if (x < 0) return false;
  const strNum = x.toString();
  const midpoint = strNum.length / 2;
  if (strNum.length % 2 == 0) {
    if (reverseStr(strNum.slice(0, midpoint)) == strNum.slice(midpoint)) {
      return true;
    }
  } else {
    if (
      reverseStr(strNum.slice(0, Math.floor(midpoint))) ==
      strNum.slice(Math.ceil(midpoint))
    ) {
      return true;
    }
  }
  return false;
};

module.exports = isPalindrome;
