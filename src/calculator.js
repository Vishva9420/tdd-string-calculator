function add(numbers) {
    if (numbers === '') return 0;
  
    const parts = numbers.split(',');
    const sum = parts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return sum;
  }
  
  module.exports = { add };
  