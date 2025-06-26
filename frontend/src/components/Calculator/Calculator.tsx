// src/components/Calculator/Calculator.tsx
import React, { useState } from 'react';
import { calculateString } from '../../services/api';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    try {
      setError(null);
      const response = await calculateString(input);
      setResult(response.result);
    } catch (err: any) {
      setResult(null);
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2>🧮 String Calculator</h2>
        <input
          type="text"
          placeholder='e.g. "1,2,3" or "//[***]\n1***2***3"'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="calculator-input"
        />
        <button onClick={handleCalculate} className="calculator-button">
          Calculate
        </button>
        {result !== null && (
          <div className="calculator-result">Result: <strong>{result}</strong></div>
        )}
        {error && (
          <div className="calculator-error">Error: {error}</div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
