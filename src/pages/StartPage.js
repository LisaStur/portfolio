import React from 'react'
import { StyledSection, StyledNavLink } from '../Style'

export const StarPage = () => {

  return (
    <StyledSection>
      <StyledNavLink to={'/assignments'}>Projects ➞</StyledNavLink>
      <StyledNavLink to={'/hobby'}>Hobby projects  ➞</StyledNavLink>
      <StyledNavLink to={'/tech'}>Tech  ➞</StyledNavLink>
      <StyledNavLink to={'/career'}>Life beside code  ➞</StyledNavLink>
      <StyledNavLink to={'/contact'}>Contact  ➞</StyledNavLink>
    </StyledSection>
  )
}