import React from 'react'
import styled from 'styled-components'
import { RowSpaceBetween, InfoText, ColumnContainer, StyledLink } from '../Style'

export const ContactBox = () => {

  return (
   <RowSpaceBetween>
      <TechContainer>
        <TechText>Phone: +46 732 64 24 54</TechText>
        <TechText>E-mail: sturegardlisa@gmail.com</TechText>
      </TechContainer>
      <TechContainer>
      <TechText>GitHub: &nbsp;
        <StyledLink href='https://github.com/LisaStur' target='blank'>
          Lisa's GitHub
        </StyledLink>
      </TechText>
      <TechText>LinkedIn: &nbsp;
        <StyledLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241' target='blank'>
          Lisa's LinkedIn
        </StyledLink>
      </TechText>
      <TechText>Instagram: &nbsp;
        <StyledLink href='https://www.instagram.com/lisastur/' target='blank'>
          Lisa's Insta
        </StyledLink>
      </TechText>
      </TechContainer>
    </RowSpaceBetween>
  )
}

const TechText = styled(InfoText)`
  margin: 0;
`
const TechContainer = styled(ColumnContainer)`
  padding-top: 24px;
  justify-content: flex-end;
`