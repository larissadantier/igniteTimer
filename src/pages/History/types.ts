export type StatusType = 'concluded' | 'interrupted' | 'progress'

export interface IHistoryProps {
  status: StatusType
}
