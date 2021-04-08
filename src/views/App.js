import React from 'react';
import { ThemeProvider } from 'styled-components';
import Calculator from 'components/organisms/Calculator/Calculator';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './App.styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Calculator />
    </Wrapper>
  </ThemeProvider>
);

export default App;
