// LeetCode 1652. Defuse The Bomb
// tests in lcDefuseTheBomb.test.js

/* QUESTION:

You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Constraints:

n == code.length
1 <= n <= 100
1 <= code[i] <= 100
-(n - 1) <= k <= n - 1

*/

///////////////////////
// SOLUTION #1
///////////////////////

const rotate = arr => arr.slice(1).concat(arr.slice(0, 1));

const decrypt = (code, k) => {
  const res = [];
  let wasRevesed = false;

  // if negative reverse the array so it rotates correctly
  if (k <= 0) {
    code = rotate(code.reverse());
    wasRevesed = true;
  }

  for (let i = 0; i < code.length; i++) {
    let sum = 0;
    code = rotate(code);

    for (let j = 0, curr = 0; j < Math.abs(k); j++) {
      if (curr >= code.length) {
        curr = 0;
      }
      sum += code[curr];
      curr++;
    }

    res.push(sum);
  }

  return wasRevesed ? rotate(res.reverse()) : res;
};

module.exports = decrypt;
