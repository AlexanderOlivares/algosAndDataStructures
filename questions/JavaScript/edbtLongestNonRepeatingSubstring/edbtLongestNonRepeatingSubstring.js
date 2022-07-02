// Edabit Longest Non Repeating Substring
// tests in "./edbtLongestNonRepeatingSubstring.test.js"

/* QUESTION:
Write a function that returns the longest non-repeating substring for a string input.

Examples
longestNonrepeatingSubstring("abcabcbb") ➞ "abc"
longestNonrepeatingSubstring("aaaaaa") ➞ "a"
longestNonrepeatingSubstring("abcde") ➞ "abcde"
longestNonrepeatingSubstring("abcda") ➞ "abcd"

Notes
If multiple substrings tie in length, return the one which occurs first.
*/

///////////////////////
// SOLUTION #1
///////////////////////

function longestNonRepeatingSubstring(str) {
  let pointer1 = 0;
  let pointer2 = 1;
  let longestFound = [];
  let seen = {};

  seen[str[pointer1]] = true;
  seen[str[pointer2]] = true;

  if (Object.values(seen).length === 1) ++pointer1;
  ++pointer2;

  while (pointer2 <= str.length) {
    if (seen[str[pointer2]] || pointer2 === str.length) {
      const newPointer2 = pointer1 + 1;
      pointer2 = newPointer2;
      pointer1++;
      longestFound.push(Object.keys(seen).join(""));
      seen = {};
      seen[str[pointer1]] = true;
    }
    seen[str[pointer2]] = true;
    pointer2++;
  }

  let longestIndex = 0;
  let longestLength = 0;
  for (let i = 0; i < longestFound.length; i++) {
    if (longestFound[i].length > longestLength) {
      longestLength = longestFound[i].length;
      longestIndex = i;
    }
  }

  return longestFound[longestIndex];
}

module.exports = longestNonRepeatingSubstring;
