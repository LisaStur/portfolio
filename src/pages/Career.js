import React from 'react'
import { StyledSection, ExtraContainer, BigText, StyledLink } from '../Style'
import { BackToStart } from '../components/BackToStart'


export const Career = () => {

  return (
    <StyledSection>
      <BackToStart />
      <ExtraContainer>
      <BigText>
        Content specialist with focus on strategy, launches and re-branding in streaming and TV.
      </BigText>
      <BigText>
        In depth experience of the whole content service offering, from branding and marketing to acquisitions and planning. 
      </BigText>
      <BigText>
        With more than 20 successful TV- and steraming launches and re-launches in the Nordics and Europe, always focusing on the user preference and demand.
      </BigText>
      <BigText><br />LinkedIn: &nbsp;
        <StyledLink href='https://www.linkedin.com/in/lisa-stureg%C3%A5rd-2624241'>
          Lisa's LinkedIn
        </StyledLink>
        </BigText>
      </ExtraContainer>
    </StyledSection>
  )
}
