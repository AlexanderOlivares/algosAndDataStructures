// LeetCode 3. Longest Substring Without Repeating Characters
// tests in lcLongestSubstringWithoutRepeating.test.js

/* QUESTION:

Given a string s, find the length of the longest substring
without repeating characters.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/
///////////////////////
// SOLUTION #1
///////////////////////

const lengthOfLongestSubstring = s => {
  if (!s) return 0;

  let maxUniqSub = 1;
  let localSub = [s[0]];
  let r = 1;

  while (r < s.length) {
    if (!localSub.includes(s[r])) {
      localSub.push(s[r]);
      r++;
    } else {
      localSub.shift();
    }
    maxUniqSub = Math.max(localSub.length, maxUniqSub);
  }

  return maxUniqSub;
};

module.exports = lengthOfLongestSubstring;
