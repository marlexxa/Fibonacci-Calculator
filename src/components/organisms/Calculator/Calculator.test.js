import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders the component', () => {
    renderWithThemeProvider(<Calculator />);
    fireEvent.change(screen.getByTestId('Input:'), { target: { value: '6' } });
    fireEvent.click(screen.getByText('Calculate'));
    screen.getByText('8');
  });
});
