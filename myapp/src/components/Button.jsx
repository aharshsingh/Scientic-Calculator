import React, {useContext} from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import {random} from 'mathjs'

export default function Button({text}) {
    const {setExpression, setResult, result, AddToMemory, SubToMemory, ClearMemory, RecallMemory, setCurrVal} = useContext(CalculatorContext);
    const handleClick = (text) =>{
        if(text === 'C'){
            setExpression('');
            setResult('0');
            setCurrVal('0');
            return;
        }else if(text === 'x!'){
            text = '!'
        }else if(text === 'π'){
            text = '3.14159265358979323846264'
        }else if(text === 'ln'){
            text = 'log'
        }else if(text === 'Rand'){
            setExpression('');
            setResult('');
            const randomNumber = random();
            text = randomNumber;
            setResult(text);
            setCurrVal(text)
        }else if(text === 'm+'){
            AddToMemory();
            return;
        }else if(text === 'm-'){
            SubToMemory();
            return;
        }else if(text === 'mc'){
            ClearMemory();
            return;
        }else if(text === 'mr'){
            RecallMemory();
            return;
        }
        setExpression((prevExpression) =>{
            return prevExpression + text;
        })
    }
    return (
    <div>
        <button className='bg-[#555555] h-[73.6px] sm:w-[38px] md:w-[58px] lg:w-[87px] text-white sm:text-base md:text-xl text-3xl m-[1px] transition-all duration-300 ease-in-out' onClick={()=> handleClick(text)}>{text}</button>
    </div>
  )
}
