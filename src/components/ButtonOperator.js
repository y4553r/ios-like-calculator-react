import React from 'react';
import styled from 'styled-components';

import { Button } from '../containers/AppStyles';

const mapOperatorToString = op => {
  switch(op) {
    case "÷": return "divide";
    case "x": return "multiply";
    case "-": return "substract ";
    case "+": return "add";
    case "=": return "equal";
    default: return "";
  }
}

export default ({ children, ...props }) => {
  return <Operator {...props}>{children}</Operator>;
}

const Operator = styled(Button)`
  grid-area: ${props => mapOperatorToString(props.children)};
  background-color: orange;
  color: white;
`;