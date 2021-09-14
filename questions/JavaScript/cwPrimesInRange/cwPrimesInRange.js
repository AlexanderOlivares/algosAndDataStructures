// Codewars (5kyu) Find primes in range (complexity matters)
// tests in "./cwPrimesInRange.test.js"

/* QUESTION:

Find all primes between 1 and n
Return array of primes.
Yep.. that's all.

Warning: test requires you to generate all primes 
between 1 and 20 million without timing out.

*/

///////////////////////
// SOLUTION #1
///////////////////////

const isPrime = n => {
  if (n === 1 || n === 0) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const primeList = n => {
  let res = [2];

  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      res.push(i);
    }
  }

  return res;
};

module.exports = primeList;
