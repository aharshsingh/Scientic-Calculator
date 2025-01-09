import {useState, createContext, useEffect} from 'react';
import { create, all } from 'mathjs';
import '../styles/scroll.css'
export const CalculatorContext = createContext();

export const CalculatorProvider = ({children})=>{
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');
    const [angleState, setAngleState] = useState('Rad');
    const math = create(all);

    useEffect(()=>{
      console.log('Configuring angle unit:', angleState);
      if(angleState === 'Deg')
        math.config({ angleUnit: 'degree' });
      else
        math.config({angleUnit: 'radian'});
    },[angleState])

    const evaluateExpression = ()=>{
        const answer = math.evaluate(expression);
        setResult(String(answer));
        setExpression('');
    }

    return (
        <CalculatorContext.Provider value={{ expression, result, setExpression, setResult, evaluateExpression, angleState, setAngleState }}>
          {children}
        </CalculatorContext.Provider>
      );
}