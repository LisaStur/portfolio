import React from 'react'
import styled from 'styled-components'
import { VariousLinks } from './VariousLinks'

export const Header = () => {

  return (
    <HeaderContainer>
      <VariousLinks />
      <HeaderHeader>Lisas firma</HeaderHeader>
      <HeaderText>User experience by showcasing the soul of the enterprise.</HeaderText>
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

  @media (min-width: 668px) {
    font-size: 42px;
    margin: 0 0 2% 10%; 
  } 
`
const HeaderText = styled.p`
  font-family: 'Paprika', cursive;
  font-size: 14px;
  margin: 0 10%;
  
  @media (min-width: 668px) {
    font-size: 17px;
  } 
`