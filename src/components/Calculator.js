import React, { useState } from 'react';
import './Calculator.css'; // You'll use this for styling

const Calculator = () => {
    const [input, setInput] = useState('');  // To store the input

    const handleButtonClick = (value) => {
        setInput(input + value);  // Append the clicked button value to input
    };

    const clearInput = () => {
        setInput('');  // Clear the input
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());  // Evaluate the expression
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="keypad">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>

                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>

                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>

                <button onClick={clearInput}>C</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleButtonClick('/')}>/</button>

                <button onClick={calculateResult}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
