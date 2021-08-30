// LeetCode 242. Valid Anagram
// tests in lcIsValidAnagram.test.js

/* QUESTION:

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

*/

///////////////////////
// SOLUTION #1
///////////////////////

var isAnagram = function (s, t) {
  let map = new Map();

  for (let i of s) {
    map.set(i, map.get(i) + 1 || 1);
  }

  for (let i of t) {
    if (!map.get(i)) return false;
    map.set(i, map.get(i) - 1);
  }

  // if freq of all letters is 0 then all letters were used and it is an anagram
  return Array.from(map.values()).every(freq => freq === 0);
};

///////////////////////
// SOLUTION #2
///////////////////////

const sorted = str => str.split("").sort().join("");

var isAnagram2 = function (s, t) {
  return sorted(s) === sorted(t);
};

module.exports = isAnagram;
module.exports = isAnagram2;
