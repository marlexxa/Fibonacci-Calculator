import React from 'react';
import styled from 'styled-components';
import { Output } from 'components/atoms/Output/Output';
import { OutputName } from 'components/atoms/OutputName/OutputName';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
