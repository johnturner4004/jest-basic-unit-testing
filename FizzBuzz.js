function fizzBuzz( n ) {
  if ( typeof n !== 'number') {
    return "error"
  }
  console.log(n, n%15);
  
  switch (true) {
    case(n === 0):
      return n;
    case (n % 15 === 0):
      return "FizzBuzz"
    case (n % 3 === 0):
      return "Fizz";
    case (n % 5 === 0):
      return "Buzz";
    default:
      return n;
    }
}

module.exports = fizzBuzz;