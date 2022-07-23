// Edabit Know Your Neighbor
// tests in "./edbtKnowYourNeighbor.test.js"

/* QUESTION:
Create a function that takes a string as an argument and returns true if each
letter in the string is surrounded by a plus sign. Return false otherwise.
*/

///////////////////////
// SOLUTION #1
///////////////////////

function plusSign(str) {
  const matches = str.match(/(?<=\+)[a-z](?=\+)/g);
  const validLetterCount = str.match(/[a-z]/gi);
  if (!matches) return false;
  return validLetterCount.length == matches.length;
}

module.exports = plusSign;
