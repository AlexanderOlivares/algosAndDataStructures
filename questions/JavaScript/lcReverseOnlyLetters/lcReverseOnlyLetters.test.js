const { reverseOnlyLetters, reverseOnlyLetters2 } = require("./lcReverseOnlyLetters");

test("reverseOnlyLetters", () => {
  expect(reverseOnlyLetters("ab-cd")).toEqual("dc-ba");
  expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
  expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toEqual("Qedo1ct-eeLg=ntse-T!");
  expect(reverseOnlyLetters("alexiscool")).toEqual("loocsixela");
  expect(reverseOnlyLetters("-?()")).toEqual("-?()");
});

test("reverseOnlyLetters solution 2", () => {
  expect(reverseOnlyLetters2("ab-cd")).toEqual("dc-ba");
  expect(reverseOnlyLetters2("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
  expect(reverseOnlyLetters2("Test1ng-Leet=code-Q!")).toEqual("Qedo1ct-eeLg=ntse-T!");
  expect(reverseOnlyLetters2("alexiscool")).toEqual("loocsixela");
  expect(reverseOnlyLetters2("-?()")).toEqual("-?()");
});
