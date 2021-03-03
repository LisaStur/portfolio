import React from 'react'
import { AssignementBox } from '../components/AssignementBox'
import { CareerBox } from '../components/CareerBox'
import { ContactBox } from '../components/ContactBox'
import { ProjectBox } from '../components/ProjectBox'
import { TechBox } from '../components/TechBox'
import { StyledSection, SmallScreen, StyledNavLink, BiggerScreen, ExtraContainer } from '../Style'


export const StarPage = () => {

  return (
    <StyledSection>
      <SmallScreen>
        <StyledNavLink to={'/assignments'}>Projects ➞</StyledNavLink>
        <StyledNavLink to={'/hobby'}>Hobby projects  ➞</StyledNavLink>
        <StyledNavLink to={'/tech'}>Tech  ➞</StyledNavLink>
        <StyledNavLink to={'/career'}>Life beside code  ➞</StyledNavLink>
        <StyledNavLink to={'/contact'}>Contact  ➞</StyledNavLink>
      </SmallScreen>
      <BiggerScreen>
        <ExtraContainer>
          <CareerBox />
          <AssignementBox />
          <ProjectBox />
          <TechBox />
        </ExtraContainer>
        <ContactBox />
      </BiggerScreen>
    </StyledSection>
  )
}