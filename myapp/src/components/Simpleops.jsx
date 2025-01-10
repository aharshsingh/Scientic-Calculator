import React, {useContext} from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import Button from './Button';
import ColorButton from './ColorButton';
import LitterButton from './LitterButton';
export default function Simpleops() {
      const {setExpression, evaluateExpression} = useContext(CalculatorContext);
      const handleClick = (text) =>{
          setExpression((prevExpression) =>{
              return prevExpression + text;
          })
      }

      const handleAnswer = ()=>{
        evaluateExpression();
      }
  return (
    <div>
      <div className='w-full sm:w-[159px] md:w-[239px] lg:w-[352px] h-[377px] rounded-br-lg bg-[#414141] transition-all duration-300 ease-in-out'>
        <div className='flex col-span-4'>
            <Button text={"C"} />
            <Button text={"+/-"} />
            <Button text={"%"} />
            <ColorButton text={"/"} />
        </div>
        <div className='flex col-span-4'>
            <LitterButton text={"7"} />
            <LitterButton text={"8"} />
            <LitterButton text={"9"} />
            <ColorButton text={"*"} />
        </div>
        <div className='flex col-span-4'>
            <LitterButton text={"4"} />
            <LitterButton text={"5"} />
            <LitterButton text={"6"} />
            <ColorButton text={"-"} />
        </div>
        <div className='flex col-span-4'>
            <LitterButton text={"1"} />
            <LitterButton text={"2"} />
            <LitterButton text={"3"} />
            <ColorButton  text={"+"} />
        </div>
        <div className='flex'>
          <div>
          <button className='h-[73.6px] sm:w-[78px] md:w-[118px] lg:w-[176px] text-white sm:text-base md:text-xl text-3xl bg-[#73736e] m-[1px]' onClick={()=> handleClick('0')}>0</button>
          </div>
            <LitterButton text={"."} />
            <div>
            <button className='bg-[#f0a042] h-[73.6px] sm:w-[37px] md:w-[59px] lg:w-[87px] text-white sm:text-base text-3xl rounded-br-lg m-[1px]' onClick={()=> handleAnswer('=')}>=</button>
            </div>
        </div>
      </div>
    </div>
  )
}
