// LeetCode 49. Group Anagrams
// tests in "./lcGroupAnagrams.test.js"

/* QUESTION:

Given an array of strings strs, group the anagrams together. You can return
the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

*/

const isAnagram = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "");
  }
  return !s2.length;
};

const groupAnagrams = strs => {
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

//   let res = [];
//   let map = new Map();
//   for (let i = 0; i < matches.length; i++) {
//     let subArr = [];
//     for (let j = 0; j < matches[i].length; j++) {
//       if (!map.has(matches[i][j])) {
//         map.set(matches[i][j], matches[i][j]);
//         //console.log(matches[i][j])
//         subArr.push(matches[i][j]);
//       }
//     }
//     subArr.length && res.push(subArr);
//     //res.push(subArr);
//   }
//   console.log(res);
//   return res.map(e => e.sort()).sort();
// };
// };
///////////////////////
// SOLUTION #2
///////////////////////

// const groupAnagrams = strs => {
//   return true;
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams(["", ""]));
// console.log(groupAnagrams(["pool", "loop", "alex"])); //.toEqual([["alex"], ["loop", "pool"]]);

module.exports = groupAnagrams;
