// LeetCode 917. Reverse Only Letters
// tests in lcReverseOnlyLetters.test.js

/* QUESTION:

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const reverseOnlyLetters = s => {
  let arr = s.split("");
  let letters = [];
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      letters.push(s[i]);
      arr[i] = " ";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = letters.pop();
    }
  }
  return arr.join("");
};

///////////////////////
// SOLUTION #2
///////////////////////

const reverseOnlyLetters2 = s => {
  const reg = new RegExp(/[a-zA-Z]/g);
  const letters = s.match(reg);
  let nonLetters = s.replace(reg, " ").split("");
  for (let i = 0; i < nonLetters.length; i++) {
    if (nonLetters[i] === " ") {
      nonLetters[i] = letters.pop();
    }
  }
  return nonLetters.join("");
};

module.exports = {
  reverseOnlyLetters,
  reverseOnlyLetters2,
};
