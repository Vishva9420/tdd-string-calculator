function extractDelimiters(header) {
    const delimiterMatches = header.match(/\[(.*?)\]/g);
    if (!delimiterMatches) return [header]; // fallback: single char
    return delimiterMatches.map(d => d.slice(1, -1));
  }
  
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function add(numbers) {
    if (numbers === '') return 0;
  
    let delimiters = [',', '\n'];
    let numString = numbers;
  
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      const delimiterLine = parts[0].substring(2);
      numString = parts.slice(1).join('\n');
  
      if (delimiterLine.startsWith('[')) {
        delimiters = [...delimiters, ...extractDelimiters(delimiterLine)];
      } else {
        delimiters = [...delimiters, delimiterLine];
      }
    }
  
    const delimiterRegex = new RegExp(delimiters.map(escapeRegExp).join('|'));
    const nums = numString.split(delimiterRegex).map(Number);
  
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return nums.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
  }
  
  module.exports = { add };
  