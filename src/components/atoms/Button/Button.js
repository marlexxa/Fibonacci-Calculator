import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  max-width: 100px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
