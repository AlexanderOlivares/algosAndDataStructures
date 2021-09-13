// Edabit Map the Letters in a String
// tests in "./edbtMapChars.test.js"

/* QUESTION:

Given a word, create an object that stores the indexes of each
letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays
are values.

*/

///////////////////////
// SOLUTION #1
///////////////////////

function mapLetters(word) {
  let map = {};
  for (let i = 0; i < word.length; i++) {
    let cur = word[i];
    if (!map[cur]) {
      map[cur] = [i];
    } else {
      map[cur].push(i);
    }
  }
  return map;
}

module.exports = mapLetters;
