import './App.css';
import Calculator from './components/Calculator.jsx';
import { CalculatorProvider } from './context/CalculatorContext.jsx';
function App() {
  return (
    <div className="App bg-sky-950  min-h-screen flex items-center justify-center">
      <CalculatorProvider>
      <Calculator/>
      </CalculatorProvider>
    </div>
  );
}

export default App;
