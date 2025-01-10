import React, { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export default function ColorButton({ text }) {
  const { setExpression } = useContext(CalculatorContext);
  
  const handleClick = (text) => {
    setExpression((prevExpression) => {
      return prevExpression + text;
    });
  };

  return (
    <div>
      <button
        className='bg-[#f0a042] h-[73.6px] sm:w-[37px] md:w-[58px] lg:w-[87px] text-white sm:text-base md:text-xl lg:text-3xl m-[1px] transition-all duration-300 ease-in-out'
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
    </div>
  );
}
