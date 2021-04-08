import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.black};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.grey};
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.black};
  }

  &:focus {
    outline: none;
  }
`;
