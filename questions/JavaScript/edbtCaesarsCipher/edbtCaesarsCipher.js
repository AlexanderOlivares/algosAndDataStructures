// Edabit Caesar's Cipher
// tests in "./edbtCaesarsCipher.test.js"

/* QUESTION:

Julius Caesar protected his confidential information by encrypting it using a cipher.
Caesar's cipher (check Resources tab for more info) shifts each letter by a number of 
letters. If the shift takes you past the end of the alphabet, just rotate back to the 
front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z,
a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the 
rotation factor). It should return an encrypted string.
*/

///////////////////////
// SOLUTION #1
///////////////////////

function caesarCipher(s, k) {
  const repeatNum = Math.ceil(k / 26) + 1;
  const alpha = "abcdefghijklmnopqrstuvwxyz".repeat(repeatNum);

  let decoded = "";

  for (let i = 0; i < s.length; i++) {
    if (/[\.-\s\,\:]/.test(s[i])) {
      decoded += s[i];
      continue;
    }

    const startingIndex = alpha.indexOf(s[i].toLowerCase());
    const rotatedLetter = alpha[startingIndex + k];

    if (s[i] === s[i].toUpperCase()) {
      decoded += rotatedLetter.toUpperCase();
    } else {
      decoded += rotatedLetter;
    }
  }

  return decoded;
}

module.exports = caesarCipher;
