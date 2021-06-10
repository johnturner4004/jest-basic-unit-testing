function fizzBuzz( n ) {
  // n must be a number
  if ( typeof n !== 'number') {
    return "error"
  }
  switch (true) {
    // 0 ! divisible by 3 or 5
    case(n === 0):
      return n;
    // if divisible by 3 and 5 return "FizzBuzz"
    case (n % 15 === 0):
      return "FizzBuzz"
    // if divisible by 3 return "Fizz"
    case (n % 3 === 0):
      return "Fizz";
    // if divisible by 5 return "Buzz"
    case (n % 5 === 0):
      return "Buzz";
    // if not divisible by 3 or 5 return n
    default:
      return n;
    }
}

module.exports = fizzBuzz;