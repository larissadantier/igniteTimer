import { useForm, FormProvider } from 'react-hook-form'
import { HandPalm, Play } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  StartCountdownSC,
  ContainerSC,
  FormSC,
  StopCountdownSC,
} from './HomeStyles'
import Countdown from './parts/Countdown'
import NewFormCycle from './parts/NewFormCycle'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser no mínimo 60 minutos')
    .max(60, 'O ciclo deve ser no máximo 60 minutos'),
})

type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormDataType>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormDataType) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task?.trim()

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewFormCycle />
        </FormProvider>
        <Countdown />

        {activeCycle && (
          <StopCountdownSC onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownSC>
        )}

        {!activeCycle && (
          <StartCountdownSC disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownSC>
        )}
      </FormSC>
    </ContainerSC>
  )
}

export default Home
