import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Using eval is simple but not safe for production. Consider using a library for complex calculations.
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Calculator</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your calculation"
          />
        </div>
        <div className="flex justify-between mb-4">
          <button onClick={calculate} className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600">Calculate</button>
          <button onClick={clear} className="bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600">Clear</button>
        </div>
        <div className="text-xl font-semibold text-center">
          {result !== '' && <p>Result: {result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
