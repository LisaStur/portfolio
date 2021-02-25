import React from 'react'
import { StyledSection, InfoText, StyledLink } from '../Style'
import { BackToStart } from '../components/BackToStart'

export const Contact = () => {

  return (
    <StyledSection>
      <BackToStart />
      <InfoText>Phone: +46 732 64 24 54</InfoText>
      <InfoText>E-mail: sturegardlisa@gmail.com</InfoText>
      <InfoText>GitHub: 
        <StyledLink href='https://github.com/LisaStur'>
          Lisa's GitHub
        </StyledLink>
      </InfoText>
      <InfoText>LinkedIn: 
        <StyledLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241'>
          Lisa's LinkedIn
        </StyledLink>
      </InfoText>
      <InfoText>Instagram: 
        <StyledLink href='https://www.instagram.com/lisastur/'>
          Lisa's Insta
        </StyledLink>
      </InfoText>
    </StyledSection>

  ) 
}