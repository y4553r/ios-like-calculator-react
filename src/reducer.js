import { resultHistoryCalculator } from './helpers';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY': return displayStateCreator(state, action);
    case 'CLEAR_ALL': return { ...state, display: '0', resultHistory: [], operatorClicked: false };
    case 'CHANGE_SIGN': return { ...state, display: -1 * Number(state.display) + "" };
    case 'PERCENTAGE': return { ...state, display: Number(state.display) / 100 + "" };
    case 'EQUAL': return equalStateCreator(state);
    case 'ADD': return addStateCreator(state);
    case 'SUBSTRACT': return substractStateCreator(state);
    case 'MULTIPLY': return multiplyStateCreator(state);
    case 'DIVIDE': return divideStateCreator(state);
    default: return state;
  }
};

const displayStateCreator = (state, action) => {
  return {
    ...state,
    display: state.display === "0" || state.operatorClicked ? action.payload : state.display + action.payload,
    operatorClicked: false,
    // resultHistory: [...state.resultHistory, Number(action.payload)]
  };
};
const addStateCreator = state => {
  const updatedResultHistory = [...state.resultHistory];
  updatedResultHistory.push(Number(state.display));
  updatedResultHistory.push("+");
  const displayedValue = resultHistoryCalculator(updatedResultHistory) + "";
  return { ...state, resultHistory: updatedResultHistory, operatorClicked: true, display: displayedValue };
}
const substractStateCreator = state => {
  const updatedResultHistory = [...state.resultHistory];
  updatedResultHistory.push(Number(state.display));
  updatedResultHistory.push("-");
  const displayedValue = resultHistoryCalculator(updatedResultHistory) + "";
  return { ...state, resultHistory: updatedResultHistory, operatorClicked: true, display: displayedValue };
}
const multiplyStateCreator = state => {
  const updatedResultHistory = [...state.resultHistory];
  updatedResultHistory.push(Number(state.display));
  updatedResultHistory.push("*");
  const displayedValue = resultHistoryCalculator(updatedResultHistory) + "";
  return { ...state, resultHistory: updatedResultHistory, operatorClicked: true, display: displayedValue };
}
const divideStateCreator = state => {
  const updatedResultHistory = [...state.resultHistory];
  updatedResultHistory.push(Number(state.display));
  updatedResultHistory.push("/");
  const displayedValue = resultHistoryCalculator(updatedResultHistory) + "";
  return { ...state, resultHistory: updatedResultHistory, operatorClicked: true, display: displayedValue };
}
const equalStateCreator = state => {
  const updatedResultHistory = [...state.resultHistory];
  updatedResultHistory.push(Number(state.display));
  updatedResultHistory.push("=");
  const displayedValue = resultHistoryCalculator(updatedResultHistory) + "";
  return { ...state, resultHistory: [], operatorClicked: false, display: displayedValue, previousValue: Number(displayedValue) };
}