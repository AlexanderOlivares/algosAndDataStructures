// LeetCode 20. Valid Parentheses
// tests in "./lcValidParens.test.js"

/* QUESTION:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const isValid = s => {
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  let matches = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      matches.push(s[i]);
    } else {
      if (map.get(matches.pop()) !== s[i]) {
        return false;
      }
    }
  }

  return !matches.length;
};

///////////////////////
// SOLUTION #2
///////////////////////

const isValid2 = s => {
  let len = s.length / 2;
  for (let i = 0; i < len; i++) {
    s = s.replace(/\(\)/, "").replace(/\[\]/, "").replace(/\{\}/, "");
  }
  return !s.length;
};

module.exports = {
  isValid,
  isValid2,
};
