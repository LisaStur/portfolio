import React from 'react'
import styled from 'styled-components'
import { BackToStart } from '../components/BackToStart'

export const Assignments = () => {

  return (
    <AssignmentsSection>
      <BackToStart />
      <InfoText>
        Need help with a project? <br />Big or small...<br /> Just give me a shout!
      </InfoText>
      <StyledLink href='https://kanten.netlify.app/' target='blank'>Strandkanten site ➞</StyledLink> 
      <StyledLink href='https://github.com/LisaStur/kanten' target='blank'>Code on GitHub ➞</StyledLink> 
    </AssignmentsSection>
   
  )
}

const AssignmentsSection = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0.2), rgb(249,228,183, 1));
  padding:  0 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;
`
const InfoText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`
const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 5% 0;
  justify-content: space-between;
`