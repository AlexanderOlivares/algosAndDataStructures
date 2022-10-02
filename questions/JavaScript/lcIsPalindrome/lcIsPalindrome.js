// LeetCode 125. Valid Palindrome
// tests in "./lcIsPalindrome.test.js"

/* QUESTION:

Given a string s, determine if it is a palindrome, considering
only alphanumeric characters and ignoring cases.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const isPalindrome = s => {
  s = s.toLowerCase();
  let reg = /[^a-z0-9]/i;

  let st = 0;
  let end = s.length - 1;

  while (st <= end) {
    while (reg.test(s[st])) {
      st++;
    }

    while (reg.test(s[end])) {
      end--;
    }

    if (s[st] !== s[end]) return false;

    st++;
    end--;
  }

  return true;
};

///////////////////////
// SOLUTION #2
///////////////////////

const isPalindrome2 = s => {
  let valid = s.toLowerCase().replace(/[^a-z0-9 ]/g, "");

  if (valid.length === 1) return true;

  valid = valid.replace(/ /g, "");

  return valid === valid.split("").reverse().join("");
};

module.exports = {
  isPalindrome,
  isPalindrome2,
};
