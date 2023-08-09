import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLinkSC, HeaderContainerSC, MenuSC } from './styles'
import logoIgnite from '../../assets/svg/logo-ignite.svg'

const Header = () => {
  return (
    <HeaderContainerSC>
      <img src={logoIgnite} />

      <MenuSC>
        <NavLinkSC to="/" title="Timer">
          <Timer size={24} />
        </NavLinkSC>
        <NavLinkSC to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLinkSC>
      </MenuSC>
    </HeaderContainerSC>
  )
}

export default Header
