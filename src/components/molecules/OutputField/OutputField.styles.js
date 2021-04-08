import styled from 'styled-components';
import { OutputName } from 'components/atoms/OutputName/OutputName';

export const Wrapper = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  ${OutputName} {
    margin-right: 10px;
  }
`;
