import React from 'react'
import styled from 'styled-components'
import { ColumnContainer } from '../Style'
import { VariousLinks } from './VariousLinks'

export const Header = () => {

  return (
    <HeaderContainer>
      <VariousLinks />
      <ColumnContainer>
      <HeaderHeader>Lisas firma</HeaderHeader>
      <HeaderText>User experience by showcasing the soul of the enterprise.</HeaderText>
      </ColumnContainer>
    </HeaderContainer>
  )

}

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 5% 10% 0 10%;
  }   
`
const HeaderHeader = styled.h1`
  font-family: 'Paprika', cursive;
  font-size: 36px;
  margin: 5% 0 5% 10%; 

  @media (min-width: 668px) {
    font-size: 42px;
    margin: 0 0 2% 10%; 
  } 

  @media (min-width: 1025px) {
    font-size: 48px;
    margin: 0 0 0 5%;
  } 
`
const HeaderText = styled.p`
  font-family: 'Paprika', cursive;
  font-size: 14px;
  margin: 0 10%;
  
  @media (min-width: 668px) {
    font-size: 17px;
  } 

  @media (min-width: 1025px) {
    margin: 0 0 0 5%;
    width: 60%;
  } 
`