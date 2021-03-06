import React from 'react'
import { StyledSection, BigText, BigStyledLink, InfoText } from '../Style'
import { BackToStart } from '../components/BackToStart'


export const Assignments = () => {

  return (
    <StyledSection>
      <BackToStart />
      <BigText>
        Need help with a project? <br />Big or small?<br /> Just give me a shout!
      </BigText>
      <BigStyledLink href='https://kanten.netlify.app/' target='blank'>Strandkanten site ➞</BigStyledLink> 
      <BigStyledLink href='https://github.com/LisaStur/kanten' target='blank'>Code on GitHub ➞</BigStyledLink> 
      <InfoText>Homepage for Restaurant on Koster, the Swedish West Coast.</InfoText>
    </StyledSection>
  )
}


