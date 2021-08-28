// LeetCode 1446. Consecutive Characters
// tests in maxContSubstring.test.js

/* QUESTION:

The power of the string is the maximum length of a non-empty substring that contains only one unique character.
Given a string s, return the power of s.

*/

///////////////////////
// SOLUTION #1 O(n)
///////////////////////

const maxPower = s => {
  let pointer = 1;
  let maxConsecutive = 1;
  let currentMax = 1;

  while (pointer < s.length) {
    if (s[pointer] !== s[pointer - 1]) {
      currentMax = 1;
    } else {
      currentMax++;
      maxConsecutive = Math.max(currentMax, maxConsecutive);
    }
    pointer++;
  }

  return maxConsecutive;
};

///////////////////////
// SOLUTION #2
///////////////////////

const maxPowerRegex = s => {
  const consecutiveRepeatedLetters = s.match(/(.)\1{1,}/g);
  if (!consecutiveRepeatedLetters) return 1;
  return Math.max(...consecutiveRepeatedLetters.map(match => match.length));
};

module.exports = maxPower;
module.exports = maxPowerRegex;
