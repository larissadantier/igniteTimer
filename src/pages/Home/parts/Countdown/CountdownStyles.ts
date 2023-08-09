import { styled } from 'styled-components'

export const CountdownSC = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2.5rem 1rem 2.5rem 1rem;
    border-radius: 8px;
  }
`

export const SeparatorSC = styled.div`
  color: ${({ theme }) => theme['green-500']};
  padding: 2rem 0;

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`
