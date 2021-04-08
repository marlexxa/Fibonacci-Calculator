import React from 'react';
import InputField from 'components/molecules/InputField/InputField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Input Field', () => {
  it('renders the component', () => {
    renderWithThemeProvider(<InputField label="number" name="number" id="number" />);
  });
});
