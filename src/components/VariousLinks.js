import React from 'react'
import styled from 'styled-components'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import insta from '../assets/insta.png'

export const VariousLinks = () => {

  return (
    <IconContainer>
      <StyledVariousLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241/' target='blank'>
        <StyledIcon src={linkedin} alt='Linkedin'/>
      </StyledVariousLink>
      <StyledVariousLink href='https://github.com/LisaStur' target='blank'>
        <StyledIcon src={github} alt='GutHub'/>
      </StyledVariousLink>
      <StyledVariousLink href='https://www.instagram.com/lisastur/' target='blank'>
        <StyledIcon src={insta} alt='Instagram'/>
      </StyledVariousLink>
    </IconContainer>
    
  )
}
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5% 5% 0 0;
    
  @media (min-width: 668px) {
    margin: 5% 5% -20px 0;
  } 

  @media (min-width: 1025px) {
    margin: 2% 0 0 0;
  } 
`
const StyledVariousLink = styled.a`
  display: flex;
  padding-left: 2%;

  @media (min-width: 1025px) {
    padding-left: 10%;
  } 
`
const StyledIcon = styled.img`
  display: flex;
  width: 24px;

  @media (min-width: 668px) {
    width: 48px;
  } 

  
  @media (min-width: 1025px) {
    height: 52px;
    width: auto;
  } 
`