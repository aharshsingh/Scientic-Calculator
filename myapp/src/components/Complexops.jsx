import React, {useContext} from 'react';
import Button from './Button';
import { CalculatorContext } from '../context/CalculatorContext';

export default function Complexops() {
    const {angleState, setAngleState, setXry} = useContext(CalculatorContext);
    const handleClick = ()=>{
        console.log('Current angleState:', angleState);
        if(angleState === 'Rad')
            setAngleState('Deg');
        else
            setAngleState('Rad')
    }
    const toggleXry = ()=>{
        setXry(true);
    }
  return (
    <div>
      <div className='w-full sm:w-[240px] md:w-[358px] lg:w-[533px] h-[377px] bg-[#414141] rounded-bl-lg transition-all duration-300 ease-in-out '>
        <div>
            <div className='flex col-span-6'>
                <Button text={"("}/>
                <Button text={")"}/>
                <Button text={"mc"}/>
                <Button text={"m+"}/>
                <Button text={"m-"}/>
                <Button text={"mr"}/>
            </div>
            <div className='flex col-span-6'>
                <Button text={<><span>2</span><sup className='text-base'>nd</sup></>} id={"2nd"}/>
                <Button text={<><span>x</span><sup className='text-base'>2</sup></>} id={"x2"}/>
                <Button text={<><span>x</span><sup className='text-base'>3</sup></>} id={"x3"}/>
                <Button text={<><span>x</span><sup className='text-base'>y</sup></>} id={"xy"}/>
                <Button text={<><span>e</span><sup className='text-base'>x</sup></>} id={"ex"}/>
                <Button text={<><span>10</span><sup className='text-l'>x</sup></>} id={"10x"}/>
            </div>
            <div className='flex col-span-6'>
                <Button text={"1/x"}/>
                <Button text={<><sup className='text-base'>2</sup><span>√x</span></>} id={"2rx"}/>
                <Button text={<><sup className='text-base'>3</sup><span>√x</span></>} id={"3rx"}/>
                <div onClick={()=> toggleXry()}>
                    <Button text={<><sup className='text-base'>y</sup><span>√x</span></>} id={"yrx"}/>
                </div>
                <Button text={"ln"}/>
                <Button text={<><span>log</span><sub className='text-sm'>10</sub></>} id={"log10"}/>
            </div>
            <div className='flex col-span-6'>
                <Button text={"x!"}/>
                <Button text={"sin"}/>
                <Button text={"cos"}/>
                <Button text={"tan"}/>
                <Button text={"e"}/>
                <Button text={"EE"}/>
            </div>
            <div className='flex col-span-6'>
                <div>
                <button className='bg-[#555555] h-[73.6px] sm:w-[38px] md:w-[58px] lg:w-[87px] text-white sm:text-base md:text-xl text-3xl ml-[1px] mt-[1px] mr-[1px] rounded-bl-lg' onClick={()=> handleClick()}>{angleState}</button>
                </div>
                <Button text={"sinh"}/>
                <Button text={"cosh"}/>
                <Button text={"tanh"}/>
                <Button text={"π"}/>
                <Button text={"Rand"}/>
            </div>
        </div>
      </div>
    </div>
  );
}
