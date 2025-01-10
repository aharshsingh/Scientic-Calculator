import React, {useContext, useState} from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
import dark from '../public/toggle-on-solid.svg';
import light from '../public/toggle-on-solid (1).svg'
export default function Display() {
  const [mode, setMode] = useState(false);
const {expression, result, currVal} = useContext(CalculatorContext);
 const displayValue = expression
    ? String(expression)
    : currVal
    ? String(currVal)
    : String(result);

  const toggleMode = ()=>{
    if(mode === false)
      setMode(true);
    else
      setMode(false);
  }
  return (
    <div>
      {mode ? (<div className='bg-[#a7a7a7] w-full sm:w-[398px] md:w-[598px] lg:w-[886px] h-[130px]  transition-all duration-300 ease-in-out rounded-tr-lg rounded-tl-lg'>
        <div className='flex justify-between'>
        <div className='flex gap-2 pt-2 pl-2'>
          <div className='rounded-full w-4 h-4 bg-[#eb6959]'></div>
          <div className='rounded-full w-4 h-4 bg-[#eeb750]'></div>
          <div className='rounded-full w-4 h-4 bg-[#5fc350] '></div>
        </div>
        <div>
          <div><img className='w-6 h-6 mr-3' src={dark} alt='switch' onClick={()=> toggleMode()} /></div>
        </div>
        </div>
        <div className='pr-6 pt-6'>
        <div className='overflow-x-auto'>
            <p className='font-light text-end text-7xl text-black'>{displayValue}</p>
        </div>
        </div>scientificcalulator
      </div> ):(
        <div className='bg-[#414141] w-full sm:w-[398px] md:w-[598px] lg:w-[886px] h-[130px]  transition-all duration-300 ease-in-out rounded-tr-lg rounded-tl-lg'>
        <div className='flex justify-between'>
        <div className='flex gap-2 pt-2 pl-2'>
          <div className='rounded-full w-4 h-4 bg-[#eb6959]'></div>
          <div className='rounded-full w-4 h-4 bg-[#eeb750]'></div>
          <div className='rounded-full w-4 h-4 bg-[#5fc350] '></div>
        </div>
        <div>
          <div><img className='w-6 h-6 mr-3' src={light} alt='switch' onClick={()=> toggleMode()} /></div>
        </div>
        </div>
        <div className='pr-6 pt-6'>
        <div className='overflow-x-auto'>
            <p className='font-light text-end text-7xl text-white'>{displayValue}</p>
        </div>
        </div>
      </div>)}
    </div>
  )
}
