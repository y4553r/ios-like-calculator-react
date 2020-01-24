import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe("Layout", () => {
  it("displays the title", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("iOS Calculator")).toBeInTheDocument();
  });
  it("displays calcultor container", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("calculator-container")).toBeTruthy();
  });
  it("displays 19 buttons", () => {
    const { getAllByTestId } = render(<App />);
    const buttons = getAllByTestId("calculator-button");
    expect(buttons.length).toBe(19);
  })
});