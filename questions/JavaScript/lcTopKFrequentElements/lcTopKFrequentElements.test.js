const { topKFrequent, topKFrequent2 } = require("./lcTopKFrequentElements.js");

test("lcTopKFrequentElements solution #1", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2].sort());
  expect(topKFrequent([1], 1)).toEqual([1]);
  expect(topKFrequent([4, 8, 8, 3, 2, 8, 3, 1, 1, 1, 1], 3)).toEqual([1, 8, 3].sort());
  expect(topKFrequent2([4, 9, 18, 3, 22, 9, 3, 22, 3, 10, 11], 3)).toEqual([22, 3, 9].sort());
  expect(topKFrequent2([4, 9, 18], 3)).toEqual([18, 4, 9].sort());
  expect(topKFrequent2([9, 9, 18, 18, 18, 7], 2)).toEqual([18, 9].sort());
});

test("lcTopKFrequentElements solution #2", () => {
  expect(topKFrequent2([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2].sort());
  expect(topKFrequent2([1], 1)).toEqual([1]);
  expect(topKFrequent2([4, 8, 8, 3, 2, 8, 3, 1, 1, 1, 1], 3)).toEqual([1, 8, 3].sort());
  expect(topKFrequent2([4, 9, 18, 3, 22, 9, 3, 22, 3, 10, 11], 3)).toEqual([22, 3, 9].sort());
  expect(topKFrequent2([4, 9, 18], 3)).toEqual([18, 4, 9].sort());
  expect(topKFrequent2([9, 9, 18, 18, 18, 7], 2)).toEqual([18, 9].sort());
});
