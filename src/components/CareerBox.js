import React from 'react'
import { ColumnContainer, BigText, StyledLink, RowSpaceBetween, BiggerScreen } from '../Style'

export const CareerBox = () => {

  return (
    <ColumnContainer>
      <BigText>
        Need help with a project? Big or small, just give me a shout!<br />
        Developer with previous experience in streaming and TV strategy, with more than 20 successfull launches and re-launches of Movie, Sport, and Documentary services and channels throughout the Nordics and Europe.
      </BigText>
      <BiggerScreen>
      <RowSpaceBetween>
      <BigText>
        LinkedIn: &nbsp;
        <StyledLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241' target='blank'>Lisa's LinkedIn</StyledLink>
      </BigText>
      <BigText>
        GitHub: &nbsp;
        <StyledLink href='https://github.com/LisaStur' target='blank'>Lisa's GitHub</StyledLink>
      </BigText>
      </RowSpaceBetween>
      </BiggerScreen>
 
    </ColumnContainer>
  )
}