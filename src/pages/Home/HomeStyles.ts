import { styled } from 'styled-components'
import { BaseCountdownSC } from './styleUtils'

export const ContainerSC = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FormSC = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`

export const StartCountdownSC = styled(BaseCountdownSC)`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`

export const StopCountdownSC = styled(BaseCountdownSC)`
  background: ${({ theme }) => theme['red-500']};
  color: ${({ theme }) => theme.white};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`
