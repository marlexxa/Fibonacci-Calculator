import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.grey};
  padding-bottom: 20px;
  text-align: center;
`;
