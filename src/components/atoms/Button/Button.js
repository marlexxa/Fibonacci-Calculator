import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  max-width: 100px;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
