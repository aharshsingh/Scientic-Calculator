import React, {useContext} from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
export default function Display() {
const {expression, result} = useContext(CalculatorContext);
const displayValue = expression === '' ? String(result) : String(expression);
  return (
    <div>
      <div className='bg-[#414141] w-full sm:w-[398px] md:w-[598px] lg:w-[886px] h-[130px]  transition-all duration-300 ease-in-out rounded-tr-lg rounded-tl-lg'>
        <div className='flex gap-2 pt-2 pl-2'>
            <div className='rounded-full w-4 h-4 bg-[#eb6959]'>
            </div>
            <div className='rounded-full w-4 h-4 bg-[#eeb750]'>

            </div>
            <div className='rounded-full w-4 h-4 bg-[#5fc350] '>

            </div>
        </div>
        <div className='pr-6 pt-6'>
        <div className='overflow-x-auto'>
            <p className='font-light text-end text-7xl text-white'>{displayValue}</p>
        </div>
        </div>
      </div>
    </div>
  )
}
