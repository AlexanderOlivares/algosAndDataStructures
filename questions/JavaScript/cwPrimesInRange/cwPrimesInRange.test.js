const primeList = require("./cwPrimesInRange");

test("Primes In range", () => {
  // primeList(2000000) passes well under the codewars 12 sec timeout
  expect(primeList(10)).toEqual([2, 3, 5, 7]);
  expect(primeList(100)).toEqual([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]);
});
