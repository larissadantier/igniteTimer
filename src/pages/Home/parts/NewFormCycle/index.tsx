import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import {
  FormContainerSC,
  MinutesAmountInputSC,
  TaskInputSC,
} from './NewFormCycleStyles'

const NewFormCycle = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainerSC>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInputSC
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInputSC
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainerSC>
  )
}

export default NewFormCycle
