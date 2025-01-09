import React, {useContext} from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import {random} from 'mathjs'

export default function Button({text}) {
    const {setExpression, setResult} = useContext(CalculatorContext);
    const handleClick = (text) =>{
        if(text === 'C'){
            setExpression('');
            setResult('0');
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
        }
        setExpression((prevExpression) =>{
            return prevExpression + text;
        })
    }
    return (
    <div>
        <button className='bg-[#555555] w-[87px] h-[73.6px] text-white text-3xl m-[1px]' onClick={()=> handleClick(text)}>{text}</button>
    </div>
  )
}
