import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Output } from 'components/atoms/Output/Output';
import { OutputName } from 'components/atoms/OutputName/OutputName';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  ${OutputName} {
    margin-right: 10px;
  }
`;

const OutputField = ({ name, value }) => {
  return (
    <Wrapper>
      <OutputName>{name}</OutputName>
      <Output>{value}</Output>
    </Wrapper>
  );
};

OutputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default OutputField;
