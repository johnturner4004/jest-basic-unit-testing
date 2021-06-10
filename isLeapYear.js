// leap year is divisible by 4 but not divisible by 100 except when divisible by 400

function isLeapYear( year ) {
  if (typeof year !== 'number')
    return NaN;
  switch (true) {
    case (year % 400 === 0):
      return true;
    case (year % 100 === 0):
      return false;
    case (year % 4 === 0):
      return true;
    default:
      return false;
  }
}

module.exports = isLeapYear;