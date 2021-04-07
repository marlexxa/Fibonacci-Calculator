import React from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import OutputField from 'components/molecules/OutputField/OutputField';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5em 10em;
  border-radius: 25px;
  box-shadow: 5px 5px 10px grey;
`;

const Calculator = () => (
  <Wrapper>
    <InputField label="Number" id="number" name="number" />
    <OutputField name="Result" />
    <Button>Calculate</Button>
  </Wrapper>
);

export default Calculator;
