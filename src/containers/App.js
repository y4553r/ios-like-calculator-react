import React, { useState } from 'react';

import { NUMBERS, OPERATORS, OTHERS } from '../constants';
import * as AppStyles from './AppStyles';
import ButtonNumber from '../components/ButtonNumber';
import ButtonOperator from '../components/ButtonOperator';
import ButtonOther from '../components/ButtonOther';

function App() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(0);
  const [activeOperator, setActiveOperator] = useState("");

  const onClickNumber = number => {
    if (display === "0")
      setDisplay(number);
    else
      setDisplay(display + number)
  }

  const onClickOther = other => {
    switch (other) {
      case "AC":
        setDisplay("0");
        break;
      case "+/-":
        if (display[0] === "-")
          setDisplay(display.slice(1));
        else
          setDisplay("-" + display);
        break;
      case "%":
        setDisplay(Number(display) / 100);
        break;
      default: return;
    }
  }

  const onClickOperator = operator => {
    switch (operator) {
      case "÷":
        setResult(Number(result) / Number(display));
        break;
      case "x":
        setResult(Number(result) * Number(display));
        break;
      case "-":
        setResult(Number(result) - Number(display));
        break;
      case "+":
        setResult(Number(result) + Number(display));
        break;
      case "=":
        setDisplay(Number(result));
        break;
      default:
        return;
    }
    setActiveOperator(operator);
  }

  const renderNumbers = NUMBERS.map(number => {
    return <ButtonNumber key={number} onClick={() => onClickNumber(number)} data-testid="calculator-button">{number}</ButtonNumber>
  });
  const renderOperators = OPERATORS.map(operator => {
    return <ButtonOperator key={operator} onClick={() => onClickOperator(operator)} data-testid="calculator-button">{operator}</ButtonOperator>
  });
  const renderOthers = OTHERS.map(other => {
    return <ButtonOther key={other} onClick={() => onClickOther(other)} data-testid="calculator-button">{other}</ButtonOther>
  });

  return (
    <AppStyles.Root>
      <AppStyles.Title>iOS Calculator</AppStyles.Title>
      <AppStyles.Calculator data-testid="calculator-container">
        <AppStyles.CalculationsArea>
          <AppStyles.Calculations>{display}</AppStyles.Calculations>
        </AppStyles.CalculationsArea>
        <AppStyles.Grid>
          {renderNumbers}
          {renderOperators}
          {renderOthers}
        </AppStyles.Grid>
      </AppStyles.Calculator>
    </AppStyles.Root>
  );
}

export default App;
