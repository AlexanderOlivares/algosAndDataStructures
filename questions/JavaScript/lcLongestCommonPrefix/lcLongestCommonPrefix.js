// LeetCode 14. Longest Common Prefix
// tests in ./lcLongestCommonPrefix.test.js

/* QUESTION:

Write a function to find the longest common prefix string 
amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const longestCommonPrefix = strs => {
  let res = [];

  for (let i = 0; i < strs[0].length; i++) {
    let reg = new RegExp(`\^${strs[0].slice(0, i + 1)}`);
    if (strs.every(e => reg.test(e))) {
      res.push(strs[0][i]);
    }
  }

  return res.join("");
};

///////////////////////
// SOLUTION #2
///////////////////////

const longestCommonPrefix2 = strs => {
  let sorted = strs.sort((a, b) => a.length - b.length);

  let res = "";

  for (let i = 0; i < sorted[0].length; i++) {
    for (let j = 1; j < sorted.length; j++) {
      if (sorted[j][i] !== sorted[0][i]) {
        return res;
      }
    }
    res += sorted[0][i];
  }

  return res;
};

module.exports = longestCommonPrefix;
