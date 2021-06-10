const isLeapYear = require('./isLeapYear');

describe('Testing isLeapYear()', () => {

  test('if divisible by 4, 100, or 400', () => {
    expect(isLeapYear(2003)).toBe(false);
  })

  test('if not divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2400)).toBe(true);
  })

  test('if divisible by 100 but not 400', () => {
    expect(isLeapYear(2100)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
  })

  test('if not divisible by 4 but not 100', () => {
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
  })

  test('if not a number', () => {
    expect(isLeapYear('this is not a number')).toBe(NaN);
  })

})