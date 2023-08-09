import { styled } from 'styled-components'

export const BaseInput = styled.input`
  background: transparent;

  height: 2.5rem;

  padding: 0 0.5rem;

  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  font-size: 1.125rem;
  font-weight: bold;

  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;

    border-color: ${({ theme }) => theme['green-500']};
  }
`

export const BaseCountdownSC = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  transition: background 0.2s ease-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
