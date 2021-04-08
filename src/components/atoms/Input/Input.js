import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  box-shadow: 2px 4px 5px ${({ theme }) => theme.colors.grey};

  &:focus {
    outline: none;
    box-shadow: 2px 4px 5px ${({ theme }) => theme.colors.darkGrey};
  }
`;
