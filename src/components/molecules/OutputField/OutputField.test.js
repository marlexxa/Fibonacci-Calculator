import React from 'react';
import OutputField from 'components/molecules/OutputField/OutputField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Output Field', () => {
  it('renders the component', () => {
    renderWithThemeProvider(<OutputField name="name" />);
  });
});
