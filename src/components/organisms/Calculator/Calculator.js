import React from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import OutputField from 'components/molecules/OutputField/OutputField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 500px;
  padding: 2em;
  border-radius: 25px;
  box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.grey};
`;

const Calculator = () => (
  <Wrapper>
    <Title>Fibonacci Calculator</Title>
    <InputField label="Input: " id="number" name="number" />
    <OutputField name="Result: " />
    <Button>Calculate</Button>
  </Wrapper>
);

export default Calculator;
