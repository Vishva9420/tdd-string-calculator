function escapeRegex(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  
  function add(numbers) {
    if (numbers === '') return 0;
  
    let delimiters = [',', '\n'];
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      const delimiterSection = numbers.substring(2, delimiterLineEnd);
  
      if (delimiterSection.startsWith('[')) {
        // Handle multiple delimiters like [***][%%]
        const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
        delimiters = delimiterMatches.map((match) =>
          escapeRegex(match.slice(1, -1))
        );
      } else {
        delimiters = [escapeRegex(delimiterSection)];
      }
  
      numberString = numbers.substring(delimiterLineEnd + 1);
    }
  
    const splitRegex = new RegExp(delimiters.join('|'));
    const parts = numberString.split(splitRegex).map(Number);
  
    const negatives = parts.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return parts.filter((n) => n <= 1000).reduce((acc, curr) => acc + curr, 0);
  }
  
  module.exports = { add };
  