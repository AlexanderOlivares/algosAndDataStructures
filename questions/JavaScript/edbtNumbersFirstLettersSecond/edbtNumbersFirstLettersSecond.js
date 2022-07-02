// Edabit Numbers First, Letters Second
// tests in "./edbtNumbersFirstLettersSecond.test.js"

/* QUESTION:
Write a function that sorts array while keeping the array
structure. Numbers should be first then letters both in 
ascending order.
*/

///////////////////////
// SOLUTION #1
///////////////////////

function numThenChar(arr) {
  const subArrayLengths = arr.map(sub => sub.length);

  let nums = [];
  let chars = [];

  arr.flat().forEach(item => {
    Number.isFinite(item) ? nums.push(item) : chars.push(item);
  });

  const sortedItems = [...nums.sort((a, b) => a - b), ...chars.sort()];

  return subArrayLengths.map(subArrLength =>
    Array.from({ length: subArrLength }, () => sortedItems.shift())
  );
}

module.exports = numThenChar;
