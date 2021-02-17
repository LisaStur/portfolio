import React from 'react'
import styled from 'styled-components'
import { BackToStart } from '../components/BackToStart'

export const Hobby = () => {

  return (
    <HobbyContainer>
      <BackToStart />
      <HobbyRow>
        <HobbyText>Guestbook</HobbyText>
        <HobbyLinks>       
          <StyledSmallLink href='https://github.com/LisaStur/guestbook-frontend' target='blank'>code ➞</StyledSmallLink> 
          <StyledSmallLink href='https://lisas-guestbook.netlify.app' target='blank'>site ➞</StyledSmallLink>
        </HobbyLinks>
      </HobbyRow>
      <HobbyRow>
        <HobbyText>Cocktails</HobbyText>
        <HobbyLinks>       
          <StyledSmallLink href='https://github.com/LisaStur/cocktails-app' target='blank'>code ➞</StyledSmallLink> 
          <StyledSmallLink href='https://time-for-cocktail.netlify.app' target='blank'>site ➞</StyledSmallLink>
        </HobbyLinks>
      </HobbyRow>
      <HobbyRow>
        <HobbyText>Happy Thoughts</HobbyText>
        <HobbyLinks>       
          <StyledSmallLink href='https://github.com/LisaStur/project-happy-thoughts' target='blank'>code ➞</StyledSmallLink> 
          <StyledSmallLink href='https://happy-thoughts-project-2020.netlify.app' target='blank'>site ➞</StyledSmallLink>
        </HobbyLinks>
      </HobbyRow>
      <HobbyRow>
        <HobbyText>Lion Quiz</HobbyText>
        <HobbyLinks>       
          <StyledSmallLink href='https://github.com/LisaStur/project-happy-thoughts' target='blank'>code ➞</StyledSmallLink> 
          <StyledSmallLink href='https://happy-thoughts-project-2020.netlify.app' target='blank'>site ➞</StyledSmallLink>
        </HobbyLinks>
      </HobbyRow>
      <HobbyRow>
        <HobbyText>Weather</HobbyText>
        <HobbyLinks>       
          <StyledSmallLink href='https://github.com/LisaStur/project-weather-app' target='blank'>code ➞</StyledSmallLink> 
          <StyledSmallLink href='https://weather-project-technigo.netlify.app' target='blank'>site ➞</StyledSmallLink>
        </HobbyLinks>
      </HobbyRow>
    </HobbyContainer>
  )
}

const HobbyContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0.2), rgb(249,228,183, 1));
  padding:  0 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;
`
const HobbyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const HobbyLinks = styled.div`
  display: flex;
  display: row;
  align-items: center;
`
const HobbyText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`
const StyledSmallLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-family: 'Paprika', cursive;
  font-size: 12px;
  color: black;
  margin-left: 12px;
`
