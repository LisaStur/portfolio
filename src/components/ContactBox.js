import React from 'react'
import styled from 'styled-components'
import { RowSpaceEvenly, InfoText, ColumnContainer, StyledLink } from '../Style'

export const ContactBox = () => {

  return (
   <RowSpaceEvenly>
      <ContactContainer>
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
      </ContactContainer>
      <ContactContainer>
        <TechText>Phone: +46 732 64 24 54</TechText>
        <TechText>E-mail: sturegardlisa@gmail.com</TechText>
      </ContactContainer>
    </RowSpaceEvenly>
  )
}

const TechText = styled(InfoText)`
  margin: 0;
`
const ContactContainer = styled(ColumnContainer)`
  padding-top: 24px;
  justify-content: flex-end;
`