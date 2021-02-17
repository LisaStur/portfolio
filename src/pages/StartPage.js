import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StarPage = () => {

  return (
    <StartPageContainer>
      <StyledNavLink to={'/assignments'}>Projects ➞</StyledNavLink>
      <StyledNavLink to={'/hobby'}>Hobby projects  ➞</StyledNavLink>
      <StyledNavLink to={'/tech'}>Tech  ➞</StyledNavLink>
      <StyledNavLink to={'/cv'}>Life before code  ➞</StyledNavLink>
    </StartPageContainer>
  )
}
const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0.2), rgb(249,228,183, 0.9));
  padding:  0 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 5% 0;
`