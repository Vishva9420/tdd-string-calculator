function add(numbers) {
    if (numbers === '') return 0;
  
    const delimiters = /,|\n/; // comma or newline
    const parts = numbers.split(delimiters);
    const sum = parts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return sum;
  }
  
  module.exports = { add };
  