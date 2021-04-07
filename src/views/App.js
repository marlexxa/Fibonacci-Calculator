import React from 'react';
import styled from 'styled-components';

import Calculator from 'components/organisms/Calculator/Calculator';

const Wrapper = styled.div`
  background-color: #f7f8f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <Calculator />
  </Wrapper>
);

export default App;
