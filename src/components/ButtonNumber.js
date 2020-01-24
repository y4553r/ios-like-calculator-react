import React from 'react';
import styled from 'styled-components';

import { Button } from '../containers/AppStyles';

const mapNumberToString = n => {
  switch(n) {
    case "0": return "zero";
    case "1": return "one";
    case "2": return "two";
    case "3": return "three";
    case "4": return "four";
    case "5": return "five";
    case "6": return "six";
    case "7": return "seven";
    case "8": return "eight";
    case "9": return "nine";
    case ".": return "point";
    default: return "";
  }
}

export default ({ children, ...props }) => {
  return children === "0" ? <Zero {...props}>{children}</Zero> : <Number {...props}>{children}</Number>;
}

const Number = styled(Button)`
  grid-area: ${props => mapNumberToString(props.children)};
  background-color: #333;
  color: white;
`;
const Zero = styled(Number)`
  grid-area: zero;
  text-align: left;
  padding-left: 18px;
  width: 110px;
`;