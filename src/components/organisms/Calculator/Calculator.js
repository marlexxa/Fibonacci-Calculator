import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import OutputField from 'components/molecules/OutputField/OutputField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 500px;
  padding: 2em;
  border-radius: 25px;
  box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.grey};
`;

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOutputCalulation = (e) => {
    e.preventDefault();
    setOutputValue(calculateFibonacci(inputValue));
  };

  const calculateFibonacci = (input) => {
    if (input < 2) return input;
    return calculateFibonacci(input - 1) + calculateFibonacci(input - 2);
  };

  return (
    <Wrapper onSubmit={handleOutputCalulation}>
      <Title>Fibonacci Calculator</Title>
      <InputField label="Input: " id="number" name="number" value={inputValue} onChange={handleInputChange} />
      <OutputField name="Result: " value={outputValue} />
      <Button type="submit">Calculate</Button>
    </Wrapper>
  );
};

export default Calculator;
