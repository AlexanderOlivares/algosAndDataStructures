const plusSign = require("./edbtKnowYourNeighbor");

test("Know Your Neighbor solution #1", () => {
  expect(plusSign("+f+d+c+#+f+")).toEqual(true);
  expect(plusSign("+d+=3=+s+")).toEqual(true);
  expect(plusSign("+d+k+##f+")).toEqual(false);
  expect(plusSign("hf+d++#+f+")).toEqual(false);
  expect(plusSign("+d+i+#+c+")).toEqual(true);
  expect(plusSign("a+")).toEqual(false);
});
