import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './InputField.styles';

const InputField = ({ onChange, value, label, name, id, type = 'number', min = '0' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} min={min} value={value} onChange={onChange} data-testid="input" />
    </Wrapper>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  min: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
