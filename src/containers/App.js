import React, { useReducer } from 'react';

import { NUMBERS, OPERATORS, OTHERS } from '../constants';
import * as AppStyles from './AppStyles';
import ButtonNumber from '../components/ButtonNumber';
import ButtonOperator from '../components/ButtonOperator';
import ButtonOther from '../components/ButtonOther';

const initialState = {
  display: '0'
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY':
      return { ...state, 
        display: state.display === "0" ? action.payload :  state.display + action.payload
      }
    case 'CLEAR_ALL': return { ...state, display: '0' };
    case 'CHANGE_SIGN': return { ...state, display: -1 * Number(state.display) + "" };
    case 'PERCENTAGE': return { ...state, display: Number(state.display) / 100 + "" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { display, result, operatorClicked } = state;

  const onClickNumber = number => {
    dispatch({ type: 'DISPLAY', payload: number });
  }

  const onClickOther = other => {
    switch(other) {
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
  }

  const onClickOperator = operator => {
    
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
