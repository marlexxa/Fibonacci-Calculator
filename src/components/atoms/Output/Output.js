import styled from 'styled-components';

export const Output = styled.div`
  padding: 10px 20px;
  min-width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 5px ${({ theme }) => theme.colors.grey};
`;
