import React from 'react'
import StoneLogo from '../assets/Stone.svg'
import { Header, Logo } from './HeaderPage.styles'

const HeaderPage = () => {
  return (
    <Header>
      <Logo src={StoneLogo} alt='' />
    </Header>
  )
}

export default HeaderPage