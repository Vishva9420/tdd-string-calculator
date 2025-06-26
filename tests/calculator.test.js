const { add } = require('../src/calculator');

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
  test('returns number when a single number is passed', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
  });
  test('returns sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('10,20')).toBe(30);
  });
  test('returns sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
    expect(add('10,20,30')).toBe(60);
  });
});
