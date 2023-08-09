import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  ContainerSC,
  ListSC,
  StatusSC,
  TableSC,
  TdSC,
  ThSC,
  TitleSC,
} from './HistoryStyles'
import { ICycleProps } from '../../contexts/CyclesContext/types'

const History = () => {
  const { cycles } = useContext(CyclesContext)

  const renderStatus = (cycle: ICycleProps) => {
    if (cycle.interruptedDate)
      return <StatusSC status="interrupted">Interrompido</StatusSC>

    if (cycle.finishedDate)
      return <StatusSC status="concluded">Concluído</StatusSC>

    if (!cycle.interruptedDate && !cycle.finishedDate)
      return <StatusSC status="progress">Em progresso</StatusSC>
  }

  return (
    <ContainerSC>
      <TitleSC>Meu histórico</TitleSC>

      <ListSC>
        <TableSC>
          <thead>
            <ThSC>Tarefa</ThSC>
            <ThSC>Duração</ThSC>
            <ThSC>Início</ThSC>
            <ThSC>Status</ThSC>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <TdSC>{cycle.task}</TdSC>
                <TdSC>{cycle.minutesAmount} minutos</TdSC>
                <TdSC>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </TdSC>
                <TdSC>{renderStatus(cycle)}</TdSC>
              </tr>
            ))}
          </tbody>
        </TableSC>
      </ListSC>
    </ContainerSC>
  )
}

export default History
