export const resultHistoryCalculator = history => {
  if(history.length < 3)
    return history[0];
  let result = history[0];
  for(let i = 2; i < history.length; i+=2) {
    switch(history[i-1]) {
      case "+":
        result += history[i];
        break;
      case "*":
        result *= history[i];
        break;
      case "-":
        result -= history[i];
        break;
      case "/":
        result /= history[i];
        break;
      default:
        return result + history[i];
    }
  }
  return result;
}
