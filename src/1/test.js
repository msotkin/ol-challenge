const arrayDimensionality = require('./index');

describe('arrayDimensionality', () => {
  it('returns 0 if an array is not passed in', () => {
    expect(arrayDimensionality('array')).toBe(0);
    expect(arrayDimensionality(false)).toBe(0);
    expect(arrayDimensionality({})).toBe(0);
  });

  it('returns the dimensionality of nested arrays', () => {
    expect(arrayDimensionality([])).toBe(1);
    expect(arrayDimensionality([[1]])).toBe(2);
    expect(arrayDimensionality([[2], [2, [3]]])).toBe(3);
    expect(arrayDimensionality([[[3], 2], [2]])).toBe(3);
  });
});
