import React, {useContext} from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import {random, pow, sqrt, nthRoot, log10} from 'mathjs'

export default function Button({text, id}) {
    const {setExpression, setResult, result, AddToMemory, SubToMemory, ClearMemory, RecallMemory, setCurrVal} = useContext(CalculatorContext);
    const handleClick = (text, id) =>{
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
        }else if(text === '1/x'){
            const currentValue = parseFloat(result);
            if (currentValue === 0) {
                text = 'Infinity'; 
            } else {
                text = String(1 / currentValue); 
            }
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "x2"){
            const currentValue = parseFloat(result);
            text = pow(currentValue,2);
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }
        else if(id === "x3"){
            const currentValue = parseFloat(result);
            text = pow(currentValue,3);
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "ex"){
            const currentValue = parseFloat(result);
            const eValue = Math.E
            text = pow(eValue,currentValue);
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "10x"){
            const currentValue = parseFloat(result);
            text = pow(10,currentValue);
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "2rx"){
            const currentValue = parseFloat(result);
            if (currentValue < 0) {
                text = "Invalid Input"; 
            } else {
                text = sqrt(currentValue); 
            }
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "3rx"){
            const currentValue = parseFloat(result);
            text = nthRoot(currentValue, 3)
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }else if(id === "log10"){
            const currentValue = parseFloat(result);
            if (currentValue <= 0) {
                text = "Undefined"; 
            } else {
                text = log10(currentValue);
            }
            setResult(text); 
            setCurrVal(text); 
            setExpression('');
            return;
        }
        setExpression((prevExpression) =>{
            return prevExpression + text;
        })
    }
    return (
    <div>
        <button className='bg-[#555555] h-[73.6px] sm:w-[38px] md:w-[58px] lg:w-[87px] text-white sm:text-base md:text-xl text-3xl m-[1px] transition-all duration-300 ease-in-out' onClick={()=> handleClick(text, id)}>{text}</button>
    </div>
  )
}
