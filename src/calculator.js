function add(numbers) {
    if (numbers === '') return 0;
  
    let delimiter = /,|\n/;
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      const delimiterPattern = numbers.substring(2, delimiterLineEnd);
      delimiter = new RegExp(delimiterPattern);
      numberString = numbers.substring(delimiterLineEnd + 1);
    }
  
    const parts = numberString.split(delimiter).map(Number);
    const negatives = parts.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    const sum = parts
      .filter((n) => n <= 1000)
      .reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }
  
  module.exports = { add };
  