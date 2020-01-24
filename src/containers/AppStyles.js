import styled from 'styled-components';

export const Root = styled.div`
  height: 100vh;
  background-color: black;
  text-align: center;
  position: relative;
`;
export const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  font-weight: 300;
  padding: 2rem;
`;
export const Calculator = styled.div`
  width: 240px;
  margin: auto;
`;
export const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-areas: 
    "ac plusnegative percentage divide"
    "seven eight nine multiply"
    "four five six substract"
    "one two three add"
    "zero zero point equal";
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
export const Button = styled.button`
  border-radius: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  &:active {
    opacity: 0.5;
  }
`;
export const CalculationsArea = styled.div`
  height: 50px;
`;
export const Calculations = styled.p`
  color: white;
  font-size: 3.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  font-weight: 300;
  text-align: right;
  padding-right: 1rem;
  padding-bottom: 20px;
`;