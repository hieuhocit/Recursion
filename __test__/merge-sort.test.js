const { mergeSort } = require('../merge-sort/index');

describe('Merge Sort Function', () => {
  test('Case 1', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('Case 2', () => {
    expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });
});
