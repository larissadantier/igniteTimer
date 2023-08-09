import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownSC, SeparatorSC } from './CountdownStyles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCycleAsFinished,
    setSecondsPassed,
  ])

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownSC>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <SeparatorSC>:</SeparatorSC>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownSC>
  )
}

export default Countdown
