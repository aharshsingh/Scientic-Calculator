import React, {useContext} from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
import { isNumber, pow } from 'mathjs';
export default function LitterButton({text}) {
    const {setExpression, setCurrVal, setResult, xry} = useContext(CalculatorContext);
        const handleClick = (text) =>{
            if(isNumber(parseFloat(text))){
              setCurrVal((prev) => (prev === '0' ? text : prev + text));
              setResult((prev) => (prev === '0' ? text : prev + text));
            }
            setExpression((prevExpression) =>{
              let updatedText = text;
              if (xry) {
              updatedText = `(${pow(text, -1)})`;
              }
              return prevExpression + updatedText;
            })
        }
  return (
    <div>
      <button className='bg-[#73736e] h-[73.6px] sm:w-[38px] md:w-[58px] lg:w-[87px] text-white text-3xl sm:text-base md:text-xl m-[1px] transition-all duration-300 ease-in-out' onClick={()=> handleClick(text)}>{text}</button>
    </div>
  )
}
