// Edabit Find the Lowest Neighbor of a 2D Array Element
// tests in "./edbtLowestNeighbor.test.js"

/* QUESTION:

Create a function that returns the lowest neighbor of a given (x, y) coordinate
element in a 2D array. The function will be passed three parameters:

arr, x, y

arr will be a 2D array holding integer values and will always be symmetrical in 
size (e.g. 2x2, 3x3, 4x4). x will hold the row coordinate, while y will hold the 
column coordinate. You will have to check the horizontal, vertical and diagonal 
neighbor elements. If there isn't any lower neighbors, return the value of the 
given (x, y) coordinate.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const lowestNeighbor = (arr, x, y) => {
  const xOffest = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const yOffest = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
  let min = arr[x][y];
  for (let i = 0; i < 8; i++) {
    const xCoord = x + xOffest[i];
    const yCoord = y + yOffest[i];
    if (!arr[xCoord] || !arr[yCoord]) continue;
    min = Math.min(min, arr[xCoord][yCoord]);
  }
  return min;
};

module.exports = lowestNeighbor;
