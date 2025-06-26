function add(numbers) {
  if (numbers === '') return 0;

  let delimiter = /,|\n/; // default delimiters
  let numberString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterLineEnd = numbers.indexOf('\n');
    const delimiterChar = numbers.substring(2, delimiterLineEnd);
    delimiter = new RegExp(delimiterChar);
    numberString = numbers.substring(delimiterLineEnd + 1);
  }

  const parts = numberString.split(delimiter);
  const sum = parts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return sum;
}

module.exports = { add };
