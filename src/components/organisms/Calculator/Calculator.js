import React, { useEffect, useRef, useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import OutputField from 'components/molecules/OutputField/OutputField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { calculateFibonacci } from 'utils/calculateFibonacci';
import { Wrapper } from './Calculator.styles';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOutputCalulation = (e) => {
    e.preventDefault();
    setOutputValue(calculateFibonacci(inputValue));
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const ref = useRef(null);

  return (
    <Wrapper onSubmit={handleOutputCalulation}>
      <Title>Fibonacci Calculator</Title>
      <InputField ref={ref} label="Input:" id="number" name="number" value={inputValue} onChange={handleInputChange} />
      <OutputField name="Result:" value={outputValue} />
      <Button type="submit" disabled={!inputValue}>
        Calculate
      </Button>
    </Wrapper>
  );
};

export default Calculator;
