import React, { useReducer, useState } from 'react';

import { NUMBERS, OPERATORS, OTHERS } from '../constants';
import { reducer } from '../reducer';

import ButtonNumber from '../components/ButtonNumber';
import ButtonOperator from '../components/ButtonOperator';
import ButtonOther from '../components/ButtonOther';

import * as AppStyles from './AppStyles';

/**
 * @todo: add button effects
 */
const initialState = {
  display: '0',
  resultHistory: [],
  operatorClicked: false,
  previousValue: 0,
};

function App() {
  const [operatorSelected, setOperatorSelected] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { display, operatorClicked } = state;

  const onClickNumber = number => {
    dispatch({ type: 'DISPLAY', payload: number });
    setOperatorSelected("");
  }

  const onClickOther = other => {
    switch (other) {
      case "AC":
        dispatch({ type: 'CLEAR_ALL' });
        break;
      case "+/-":
        dispatch({ type: 'CHANGE_SIGN' });
        break;
      case "%":
        dispatch({ type: 'PERCENTAGE' });
        break;
      default: return;
    }
    setOperatorSelected("");
  }

  const onClickOperator = operator => {
    switch (operator) {
      case "=":
        dispatch({ type: 'EQUAL' });
        setOperatorSelected("");
        break;
      case "+":
        if (!operatorClicked)
          dispatch({ type: 'ADD' });
          setOperatorSelected("+");
        break;
      case "-":
        if (!operatorClicked)
          dispatch({ type: 'SUBSTRACT' });
          setOperatorSelected("-");
        break;
      case "x":
        if (!operatorClicked)
          dispatch({ type: 'MULTIPLY' });
          setOperatorSelected("x");
        break;
      case "÷":
        if (!operatorClicked)
          dispatch({ type: 'DIVIDE' });
          setOperatorSelected("÷");
        break;
      default:
        return;
    }
  }

  const renderNumbers = NUMBERS.map(number => {
    return <ButtonNumber key={number} onClick={() => onClickNumber(number)} data-testid="calculator-button">{number}</ButtonNumber>
  });
  const renderOperators = OPERATORS.map(operator => {
    return <ButtonOperator key={operator} currentActive={operatorSelected} onClick={() => onClickOperator(operator)} data-testid="calculator-button">{operator}</ButtonOperator>
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
