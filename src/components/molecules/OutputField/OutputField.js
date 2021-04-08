import React from 'react';
import styled from 'styled-components';
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

const OutputField = ({ name }) => {
  return (
    <Wrapper>
      <OutputName>{name}</OutputName>
      <Output />
    </Wrapper>
  );
};

export default OutputField;
