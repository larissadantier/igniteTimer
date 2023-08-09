import { styled } from 'styled-components'
import { StatusType } from './types'

import { STATUS_COLORS } from './styleUtils'

export const ContainerSC = styled.main`
  flex: 1;
  padding: 3.5rem;
`

export const TitleSC = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme['gray-100']};
`

export const ListSC = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
`

export const TableSC = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
`

export const ThSC = styled.th`
  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-100']};

  font-size: 0.875rem;
  line-height: 1.6;

  padding: 1rem;

  text-align: left;

  &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
  }

  &:last-child {
    border-top-right-radius: 8px;
    padding-right: 1.5rem;
  }
`

export const TdSC = styled.td`
  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  font-size: 0.875rem;
  line-height: 1.6;

  padding: 1rem;

  border-top: 4px solid ${({ theme }) => theme['gray-800']};

  &:first-child {
    width: 50%;
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`

export const StatusSC = styled.span<{ status: StatusType }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 100%;

    background: ${({ theme, status }) => theme[STATUS_COLORS[status]]};
  }
`
