import React, { useState, useEffect, useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import Display from './Display';
import Simpleops from './Simpleops';
import Complexops from './Complexops';
import Confetti from 'react-confetti';

export default function Calculator() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { expression, setExpression, setCurrVal, setResult } = useContext(CalculatorContext);

  useEffect(() => {
    if (expression && (expression.includes('99') || expression.includes('33'))) {
      console.log('Explosion triggered!');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
      setExpression('');
      setCurrVal('');
      setResult('');
    }
  }, [expression]);

  return (
    <>
    <div>
      {showConfetti && (<Confetti/>)}
      </div>
    <div className="flex justify-center py-10 relative">
      <div className="h-[509px] w-full sm:w-[400px] md:w-[600px] lg:w-[888px] border border-gray-600 rounded-lg mx-4 sm:mx-8">
        <div>
          <Display/>
        </div>
        <div className="flex">
          <Complexops />
          <Simpleops />
        </div>
      </div>
    </div>
    </>
  );
}
