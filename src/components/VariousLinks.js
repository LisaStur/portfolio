import React from 'react'
import styled from 'styled-components'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import insta from '../assets/insta.png'

export const VariousLinks = () => {

  return (
    <IconContainer>
      <StyledLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241/' target='blank'>
        <StyledIcon src={linkedin} alt='Linkedin'/>
      </StyledLink>
      <StyledLink href='https://github.com/LisaStur' target='blank'>
        <StyledIcon src={github} alt='GutHub'/>
      </StyledLink>
      <StyledLink href='https://www.instagram.com/lisastur/' target='blank'>
        <StyledIcon src={insta} alt='Instagram'/>
      </StyledLink>
    </IconContainer>
    
  )
}
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5% 5% 0 0;
`
const StyledLink = styled.a`
  display: flex;
  padding-left: 2%;
`
const StyledIcon = styled.img`
  display: flex;
  width: 24px;
`