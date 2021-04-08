import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import Calculator from './Calculator';
import '@testing-library/jest-dom';

describe('Calculator', () => {
  it('renders the component', () => {
    renderWithThemeProvider(<Calculator />);
    screen.getByText('Calculate');
  });
  it('properly handles value change', () => {
    renderWithThemeProvider(<Calculator />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '6' } });
    expect(input).toHaveValue(6);
  });
  it('disables button when input value is not provided', () => {
    renderWithThemeProvider(<Calculator />);
    const input = screen.getByTestId('input');
    const button = screen.getByText('Calculate');
    fireEvent.change(input, { target: { value: '' } });
    expect(button).toBeDisabled();
  });
  it('shows the calculated value in the div output', () => {
    renderWithThemeProvider(<Calculator />);
    const input = screen.getByTestId('input');
    const output = screen.getByTestId('output');
    fireEvent.change(input, { target: { value: '6' } });
    fireEvent.click(screen.getByText('Calculate'));
    expect(output).toHaveTextContent('8');
  });
});
