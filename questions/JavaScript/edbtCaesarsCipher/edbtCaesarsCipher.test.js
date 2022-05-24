const caesarCipher = require("./edbtCaesarsCipher");

test("edbtCaesarsCipher solution #1", () => {
  expect(caesarCipher("middle-Outz", 2)).toEqual("okffng-Qwvb");
  expect(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)).toEqual(
    "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
  );
  expect(caesarCipher("A friend in need is a friend indeed", 20)).toEqual(
    "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
  );
  expect(caesarCipher("A Fool and His Money Are Soon Parted.", 27)).toEqual(
    "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe."
  );
  expect(
    caesarCipher(
      "One should not worry over things that have already happened and that cannot be changed.",
      49
    )
  ).toEqual(
    "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba."
  );
  expect(
    caesarCipher(
      "Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.",
      126
    )
  ).toEqual(
    "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz."
  );
});
