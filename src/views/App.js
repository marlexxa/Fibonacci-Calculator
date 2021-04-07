import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Calculator from 'components/organisms/Calculator/Calculator';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Calculator />
    </Wrapper>
  </ThemeProvider>
);

export default App;
