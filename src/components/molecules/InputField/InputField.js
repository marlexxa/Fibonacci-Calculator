import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  ${Label} {
    margin-right: 10px;
  }
`;

const InputField = ({ onChange, value, label, name, id, type = 'number', min = '0' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} min={min} value={value} onChange={onChange} />
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
