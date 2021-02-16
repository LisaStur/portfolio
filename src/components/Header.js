import React from 'react'
import styled from 'styled-components'
import { VariousLinks } from './VariousLinks'

export const Header = () => {

  return (
    <HeaderContainer>
      <VariousLinks />
      <HeaderHeader>Lisas firma</HeaderHeader>
      <HeaderText>sturegardlisa@gmail.com</HeaderText>
      <HeaderText>+46 732 64 24 54</HeaderText>
    </HeaderContainer>
  )

}

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const HeaderHeader = styled.h1`
  font-family: 'Paprika', cursive;
  font-size: 36px;
  margin: 5% 0 5% 10%;
`
const HeaderText = styled.p`
  font-family: 'Paprika', cursive;
  font-size: 12px;
  margin: 0 0 0 10%;
  
`