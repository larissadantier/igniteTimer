import { ReactNode } from 'react'
export interface ICyclesContextProviderProps {
  children: ReactNode
}

export interface ICreateCycleDataProps {
  task: string
  minutesAmount: number
}

export interface ICycleProps {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export type CycleContextType = {
  cycles: ICycleProps[]
  activeCycle: ICycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: ICreateCycleDataProps) => void
  interruptCurrentCycle: () => void
}

export interface ICycleStateProps {
  cycles: ICycleProps[]
  activeCycleId: string | null
}
