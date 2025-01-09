import React, {useContext} from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
export default function ColorButton({text}) {
    const {setExpression} = useContext(CalculatorContext);
        const handleClick = (text) =>{
            setExpression((prevExpression) =>{
                return prevExpression + text;
            })
        }
  return (
    <div>
      <button className='bg-[#f0a042] w-[87px] h-[73.6px] text-white text-3xl m-[1px]' onClick={()=>  handleClick(text)}>{text}</button>
    </div>
  )
}
