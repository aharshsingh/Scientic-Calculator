import {useState, createContext, useEffect} from 'react';
import { create, all } from 'mathjs';
import '../styles/scroll.css'
export const CalculatorContext = createContext();

export const CalculatorProvider = ({children})=>{
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');
    const [angleState, setAngleState] = useState('Rad');
    const [memory, setMemory] = useState('');
    const [currVal, setCurrVal] = useState('0');

    const math = create(all);

    useEffect(()=>{
      localStorage.setItem('memory', memory);
    },[memory]);

    useEffect(()=>{
      console.log('Configuring angle unit:', angleState);
      if(angleState === 'Deg')
        math.config({ angleUnit: 'degree' });
      else
        math.config({angleUnit: 'radian'});
    },[angleState])

    const AddToMemory = ()=>{
      if(memory === ''){
        setMemory(currVal);
        setExpression('');
      }else {
        setMemory((prev) => String(parseFloat(prev) + parseFloat(currVal)));
        setExpression('');
      }
    }

    const SubToMemory = ()=>{
      if(memory === ''){
        setMemory(currVal);
        setExpression('');
      }else {
        setMemory((prev) => String(parseFloat(prev) - parseFloat(currVal)));
        setExpression('');
      }
    }

    const ClearMemory = ()=>{
      setMemory('');
      alert("Memory Cleared");
    }

    const RecallMemory = ()=>{
      const mem = localStorage.getItem('memory');
      console.log(mem);
      setCurrVal(mem);
      setResult(mem);
      setExpression(mem);
    }

    const evaluateExpression = ()=>{
        const answer = math.evaluate(expression);
        setResult(String(answer));
        setCurrVal(String(answer));
        setExpression('');
    }

    return (
        <CalculatorContext.Provider value={{ expression, result, setExpression, setResult, evaluateExpression, angleState, setAngleState, AddToMemory, SubToMemory, ClearMemory, RecallMemory, setCurrVal }}>
          {children}
        </CalculatorContext.Provider>
      );
}