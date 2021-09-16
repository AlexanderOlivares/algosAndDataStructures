// Codewars (6kyu) Fold an Array
// tests in "./cwFoldArray.test.js"

/* QUESTION:

In this kata you have to write a method that folds a given 
array of integers by the middle x-times.

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Fold 2-times:
[1,2,3,4,5] -> [9,6]

As you see, if the count of numbers is odd, the middle number 
will stay. Otherwise the fold-point is between the middle-numbers,
so all numbers would be added in a way.

The array will always contain numbers and will never be null. The 
parameter runs will always be a positive integer greater than 0 
and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

*/

///////////////////////
// SOLUTION #1
///////////////////////

// helper function "fold"
const fold = arr => {
  let l = 0;
  let r = arr.length - 1;
  let folded = [];

  while (l < r) {
    folded.push(arr[l] + arr[r]);
    l++;
    r--;
  }

  if (l === r) folded.push(arr[l]);

  return folded;
};

function foldArray(array, runs) {
  let copy = array.slice();

  if (runs === 1) return fold(copy);

  let foldedArr = fold(copy);
  return foldArray(foldedArr, runs - 1);
}

///////////////////////
// SOLUTION #2
///////////////////////

// A more concise recursive solution
const foldArray2 = (array, runs) => {
  let foldedArr = [];

  let copyArr = array.slice();

  while (copyArr.length) {
    foldedArr.push(copyArr.pop() + (copyArr.shift() || 0));
  }

  return runs - 1 ? foldArray2(foldedArr, runs - 1) : foldedArr;
};

module.exports = foldArray;
