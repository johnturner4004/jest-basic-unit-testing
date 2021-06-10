const fizzBuzz = require('./FizzBuzz');

describe('Testing fizzBuzz()...', () => {

  test('if input is a string return "error"', () => {
    expect(fizzBuzz('not a number')).toBe('error');
  });

  test('if input is undefined return "error"', () => {
    expect(fizzBuzz(undefined)).toBe('error');
  });

  test('if input is NaN return NaN', () => {
    expect(fizzBuzz(true)).toBe('error');
  });

  test('if input is not divisible by 3 or 5 return n', () => {
    expect(fizzBuzz(0)).toBe(0);
    expect(fizzBuzz(8)).toBe(8);
  });

  test('if input is divisible by 3 and 5 return "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(225)).toBe("FizzBuzz");
  });
  
  test('if input is divisible by 3 and 5 return "FizzBuzz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  
  test('if input is divisible by 3 and 5 return "FizzBuzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

})