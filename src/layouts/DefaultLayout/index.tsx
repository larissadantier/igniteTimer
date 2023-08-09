import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { ContainerSC } from './styles'

const DefaultLayout = () => {
  return (
    <ContainerSC>
      <Header />
      <Outlet />
    </ContainerSC>
  )
}

export default DefaultLayout
