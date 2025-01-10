import React, {useContext} from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
import { isNumber } from 'mathjs';
export default function LitterButton({text}) {
    const {setExpression, setCurrVal, setResult} = useContext(CalculatorContext);
        const handleClick = (text) =>{
            if(isNumber(parseFloat(text))){
              setCurrVal((prev) => (prev === '0' ? text : prev + text));
              setResult((prev) => (prev === '0' ? text : prev + text));
            }
            setExpression((prevExpression) =>{
              return prevExpression + text;
            })
        }
  return (
    <div>
      <button className='bg-[#73736e] h-[73.6px] sm:w-[38px] md:w-[58px] lg:w-[87px] text-white text-3xl sm:text-base md:text-xl m-[1px] transition-all duration-300 ease-in-out' onClick={()=> handleClick(text)}>{text}</button>
    </div>
  )
}
