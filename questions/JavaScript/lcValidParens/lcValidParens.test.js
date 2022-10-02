const { isValid, isValid2 } = require("./lcValidParens");

test("isValid", () => {
  expect(isValid("()")).toEqual(true);
  expect(isValid("()[]{}")).toEqual(true);
  expect(isValid("(]")).toEqual(false);
  expect(isValid("([)]")).toEqual(false);
  expect(isValid("{[]}")).toEqual(true);
  expect(isValid("([])")).toEqual(true);
  expect(isValid("(([]){})")).toEqual(true);
  expect(isValid("[")).toEqual(false);
});

test("isValid solution 2", () => {
  expect(isValid2("()")).toEqual(true);
  expect(isValid2("()[]{}")).toEqual(true);
  expect(isValid2("(]")).toEqual(false);
  expect(isValid2("([)]")).toEqual(false);
  expect(isValid2("{[]}")).toEqual(true);
  expect(isValid2("([])")).toEqual(true);
  expect(isValid2("(([]){})")).toEqual(true);
  expect(isValid2("[")).toEqual(false);
});
