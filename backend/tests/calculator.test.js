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
    expect(add('5,10,15,20')).toBe(50);
    expect(add('7,3,2,8,10')).toBe(30);
  });
  test('supports new lines as delimiters along with commas', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('10\n20\n30')).toBe(60);
  });
  test('supports custom single-character delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//#\n4#5#6')).toBe(15);
  });
  test('throws exception for negative numbers with all in message', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
    expect(() => add('-1,-5')).toThrow('negative numbers not allowed: -1, -5');
  });
  test('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('1000,1')).toBe(1001);
  });
  test('supports delimiters of any length like [***]', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });
  test('supports multiple single-character delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });
  test('supports multiple delimiters with length > 1', () => {
    expect(add('//[***][%%]\n1***2%%3')).toBe(6);
  });
});
