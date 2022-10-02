// LeetCode 49. Group Anagrams
// tests in "./lcGroupAnagrams.test.js"

/* QUESTION:

Given an array of strings strs, group the anagrams together. You can return
the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

*/
///////////////////////
// SOLUTION #1
///////////////////////

const sortStr = str => str.split("").sort().join("");

// added sorting for ease of testing
const groupAnagrams = strs => {
  let map = new Map();
  for (let i of strs) {
    const sorted = sortStr(i);
    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), i].sort());
    } else {
      map.set(sorted, [i]);
    }
  }
  return Array.from(map.values()).sort();
};

///////////////////////
// SOLUTION #2
///////////////////////

const isAnagram = (s1, s2) => {
  const strSort = s => s.split("").sort().join("");
  return strSort(s1) == strSort(s2);
};

const groupAnagrams2 = strs => {
  let matches = [];
  let anaMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    isAna = [];
    if (anaMap.has(i)) continue;
    for (let j = i + 1; j < strs.length; j++) {
      if (anaMap.has(j)) continue;
      if (isAnagram(strs[i], strs[j])) {
        if (!anaMap.has(i)) {
          isAna.push(strs[i]);
        }
        isAna.push(strs[j]);
        anaMap.set(i, true);
        anaMap.set(j, true);
      }
    }
    matches.push(isAna.length ? isAna.sort() : [strs[i]]);
  }
  return matches.sort();
};

module.exports = {
  groupAnagrams,
  groupAnagrams2,
};
