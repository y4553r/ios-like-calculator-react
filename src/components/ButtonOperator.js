import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { Button } from '../containers/AppStyles';

const mapOperatorToString = op => {
  switch (op) {
    case "÷": return "divide";
    case "x": return "multiply";
    case "-": return "substract ";
    case "+": return "add";
    case "=": return "equal";
    default: return "";
  }
}

export default ({ children, ...props }) => {
  return <AnimatedOperator {...props}>{children}</AnimatedOperator>;
}

const clickAnimationStart = keyframes`
  0% {
    background-color: orange;
    color: white;
  }
  100% {
    background-color: #FCD588;
    color: white;
  }
`;
const clickAnimationMiddle = keyframes`
  0% {
    background-color: #FCD588;
    color: white;
  }
  100% {
    background-color: white;
    color: orange;
  }
  `;
const clickAnimationOut = keyframes`
  0% {
    background-color: white;
    color: orange;
  }
  100% {
    background-color: orange;
    color: white;
  }
`;
const Operator = styled(Button)`
  grid-area: ${({ children }) => mapOperatorToString(children)};
  background-color: ${({ children, currentActive }) => currentActive === children ? "white" : "orange"};
  color: ${({ children, currentActive }) => currentActive === children ? "orange" : "white"};
  border: orange 1px solid;
`;
const AnimatedOperator = styled(Operator)`
  animation: ${({ children, currentActive }) => currentActive && currentActive === children ? css`${clickAnimationStart} 0.3s ease-out, ${clickAnimationMiddle} 0.3s 0.3s ease-out` :
    css`${clickAnimationOut} 0.5s ease-out`}
`;