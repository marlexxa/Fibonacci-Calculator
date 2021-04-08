import React from 'react';
import PropTypes from 'prop-types';
import { Output } from 'components/atoms/Output/Output';
import { OutputName } from 'components/atoms/OutputName/OutputName';
import { Wrapper } from './OutputField.styles';

const OutputField = ({ name, value }) => {
  return (
    <Wrapper>
      <OutputName>{name}</OutputName>
      <Output data-testid="output">{value}</Output>
    </Wrapper>
  );
};

OutputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default OutputField;
