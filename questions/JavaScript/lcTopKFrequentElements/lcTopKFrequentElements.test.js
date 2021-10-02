const topKFrequent = require("./lcTopKFrequentElements.js");

test("lcTopKFrequentElements solution #1", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  expect(topKFrequent([1], 1)).toEqual([1]);
  expect(topKFrequent([4, 8, 8, 3, 2, 8, 3, 1, 1, 1, 1], 3)).toEqual([1, 8, 3]);
});
