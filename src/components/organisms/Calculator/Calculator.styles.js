import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50%;
  min-width: 300px;
  max-width: 500px;
  padding: 2em;
  border-radius: 25px;
  box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.grey};
`;
