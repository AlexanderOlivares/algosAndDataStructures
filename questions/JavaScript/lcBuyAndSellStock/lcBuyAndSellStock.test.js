const maxProfit = require("./lcBuyAndSellStock");

test("lcBuyAndSellStock solution #1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  expect(maxProfit([4, 2, 3, 0, 4, 2, 11, 3, 5])).toEqual(11);
  expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
  expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
  expect(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])).toEqual(9);
});
