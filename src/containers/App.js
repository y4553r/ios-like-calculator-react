import React from 'react';
import styled from 'styled-components';

const BUTTONS = [
  { label: "AC", type: "none" },
  { label: "+/-", type: "none" },
  { label: "%", type: "none" },
  { label: "÷", type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "x", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: "=", type: "number" },
];

function App() {
  return (
    <Root>
      <Title>iOS Calculator</Title>
      <Calculator data-testid="calculator-container">
        <CalculationsArea>
          <Calculations>0</Calculations>
        </CalculationsArea>
        <Grid>
          {BUTTONS.map(button => {
            if(button.label === "0")
              return <Button_0 key={button.label} type={button.type} label={button.label} data-testid="calculator-button">{button.label}</Button_0>
            return <Button key={button.label} type={button.type} label={button.label} data-testid="calculator-button">{button.label}</Button>
          })}
        </Grid>
      </Calculator>
    </Root>
  );
}

const Root = styled.div`
  height: 100vh;
  background-color: black;
  text-align: center;
  position: relative;
`;
const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  font-weight: 300;
  padding: 2rem;
`;
const Calculator = styled.div`
  width: 25%;
  margin: auto;
  height: 100%;
`;
const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template: 
    ". . . ." auto
    ". . . ." auto
    ". . . ." auto
    ". . . ." auto
    "zero zero . ." auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
const Button = styled.button`
  border-radius: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.type === "number" ? "#333" : props.type === "operator" ? "orange" : "#AAA"};
  color: ${props => props.type === "number" || props.type === "operator" ? "white" : "black"};
  width: ${props => props.label === "0" ? "110px" : "50px"};
  height: 50px;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    
  }
`;
const Button_0 = styled(Button)`
  grid-area: zero;
`;
const CalculationsArea = styled.div`
  height: 50px;
`;
const Calculations = styled.p`
  color: white;
  font-size: 3.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  font-weight: 300;
  text-align: right;
  padding-right: 1rem;
  padding-bottom: 20px;
`;

export default App;
