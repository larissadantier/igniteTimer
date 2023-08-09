import { styled } from 'styled-components'
import { BaseInput } from '../../styleUtils'

export const FormContainerSC = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

export const TaskInputSC = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInputSC = styled(BaseInput)`
  width: 4.5rem;
  text-align: center;
`
