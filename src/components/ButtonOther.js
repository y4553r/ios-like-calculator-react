import React from 'react';
import styled from 'styled-components';

import { Button } from '../containers/AppStyles';

const mapOtherToString = op => {
  switch(op) {
    case "AC": return "ac";
    case "+/-": return "plusnegative";
    case "%": return "percentage";
    default: return "";
  }
}

export default ({ children, ...props }) => {
  return <Other {...props}>{children}</Other>;
}

const Other = styled(Button)`
  grid-area: ${props => mapOtherToString(props.children)};
  background-color: #AAA;
  color: black;
`;